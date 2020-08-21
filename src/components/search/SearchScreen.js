import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import HeroCard from '../heroes/HeroCard'

const SearchScreen = ({ history }) => {
  const { search } = useLocation()
  const { q = '' } = queryString.parse(search)

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })
  const { searchText } = formValues
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = e => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
  }

  return (
    <div>
      <h2>SearchScreen</h2>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === '' && <div className="alert alert-info">Search a hero</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is not a hero with {q}
            </div>
          )}
          {heroesFiltered.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  )
}

SearchScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default SearchScreen
