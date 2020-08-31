import React from 'react'
import { mount } from 'enzyme'
import HeroScreen from '../../../components/heroes/HeroScreen'
import { MemoryRouter, Route } from 'react-router-dom'

describe('<HeroScreen />', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  }

  test('should show Redirect if no exists arguments in URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    )
    expect(wrapper.find('Redirect').exists()).toBe(true)
  })

  test('should show a hero if param exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('.row').exists()).toBe(true)
  })

  test('should goBack with push', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')()

    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })

  test('should goBack with goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')()

    expect(historyMock.goBack).toHaveBeenCalled()
    expect(historyMock.push).toHaveBeenCalledTimes(0)
  })

  test('should be call Redirect if hero not exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider123456']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )

    expect(wrapper.text()).toBe('')
  })
})
