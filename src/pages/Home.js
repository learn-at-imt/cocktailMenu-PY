import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import "../index.css"

const Home = () => {
  return (
    <div>
      <SearchForm/>
      <CocktailList/>
    </div>
  )
}

export default Home