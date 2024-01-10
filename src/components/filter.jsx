import React from 'react'

export const Filter = ({onFilter}) => {
    const filterHandler = e => {
        const filter = e.target.value

        onFilter(filter)
    } 
  return (
    <>
    
    <select name="Region" id="region" onChange={filterHandler}>
    <option value="North America">North America</option> 
    <option value="South America">South America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Africa">Africa</option>
    <option value="Oceania">Oceania</option>
  </select>
    
    </>
  )
}


