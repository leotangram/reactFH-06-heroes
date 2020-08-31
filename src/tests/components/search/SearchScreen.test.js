import React from 'react'
import { mount } from 'enzyme'
import SearchScreen from '../../../components/search/SearchScreen'
import { MemoryRouter, Route } from 'react-router-dom'

describe('<SearchScreen />', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/search']}>
      <Route path="/search" component={SearchScreen} />
    </MemoryRouter>
  )

  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
  })

  test('should displayed to Batman & input with queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('input').prop('value')).toBe('batman')
    expect(wrapper).toMatchSnapshot()
  })
})
