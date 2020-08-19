import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Redirect } from 'react-router-dom'

import { getHeroById } from '../../selectors/getHeroById'

const HeroScreen = props => {
  const { heroId } = useParams()

  const hero = getHeroById(heroId)

  if (!hero) return <Redirect to="/" />

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  return (
    <div>
      <h2>HeroScreen</h2>
    </div>
  )
}

HeroScreen.propTypes = {}

export default HeroScreen
