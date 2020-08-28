import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import PrivateRoute from '../../routers/PrivateRoute'

describe('<PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/'
    }
  }

  Storage.prototype.setItem = jest.fn()

  test('should show <PrivateRoute /> if the user is authenticated & save localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Auntenticado!</span>}
          {...props}
        />
      </MemoryRouter>
    )
    expect(wrapper.find('span').exists()).toBe(true)
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
  })

  test('should block the component if it is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Auntenticado!</span>}
          {...props}
        />
      </MemoryRouter>
    )
    expect(wrapper.find('span').exists()).toBe(false)
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
  })
})
