import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    dispatch({
      type: types.login,
      payload: {
        name: 'Leonardo'
      }
    })
    history.replace(lastPath)
  }

  return (
    <div className="container mt-5">
      <h2>LoginScreen</h2>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

LoginScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default LoginScreen
