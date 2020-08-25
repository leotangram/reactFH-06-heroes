import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

describe('authReducer', () => {
  test('should return default state', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('should auth & set the user name', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Leonardo'
      }
    }

    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({ logged: true, name: 'Leonardo' })
  })

  test('should remove the user name & set looged in false', () => {
    const action = {
      type: types.logout
    }

    const state = authReducer({ logged: true, name: 'Leonardo' }, action)
    expect(state).toEqual({ logged: false })
  })
})
