import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types'
import Navbar from '../../../components/ui/Navbar'

describe('<Navbar />', () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn()
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, user: 'Leonardo' }
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  afterEach(() => {
    jest.clearAllMocks
  })

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('')
  })

  test('should call logout & use history', () => {
    wrapper.find('button').prop('onClick')()
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout
    })

    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  })
})
