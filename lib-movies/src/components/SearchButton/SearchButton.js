import React from 'react'
import './SearchButton.css'
function SearchButton({handleSearch,props,label}) {
  return (
    <button onClick={handleSearch} className='btn-search'>{label}</button>
  )
}


export default SearchButton
