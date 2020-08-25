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
  })
})
