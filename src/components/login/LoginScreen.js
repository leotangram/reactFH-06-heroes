import React from 'react'
import PropTypes from 'prop-types'

const LoginScreen = ({ history }) => {
  const handleLogin = () => history.replace('/')

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
