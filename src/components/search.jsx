import React, { useState} from 'react'

const Search = ({onSearch}) => {

  const [input, setInput] = useState('')

  const submitHandler = (e) => {
      e.preventDefault()

      onSearch(input)
  }

  return (
    <div className='search'>
    <form onSubmit={submitHandler}>
        <input type="search" name="Country Name" id="search" placeholder='Country' value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </form>
    </div>
  )
}

export default Search