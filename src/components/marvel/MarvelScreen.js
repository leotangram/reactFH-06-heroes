import React from 'react'
import PropTypes from 'prop-types'
import HeroList from '../heroes/HeroList'

const MarvelScreen = props => {
  return (
    <div>
      <h2>MarvelScreen</h2>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  )
}

MarvelScreen.propTypes = {}

export default MarvelScreen
