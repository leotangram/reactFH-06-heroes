import React from 'react'
import PropTypes from 'prop-types'
import HeroList from '../heroes/HeroList'

const DcScreen = props => {
  return (
    <div>
      <h2>DcScreen</h2>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  )
}

DcScreen.propTypes = {}

export default DcScreen
