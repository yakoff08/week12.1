import React, { useState } from 'react'
import { history } from '../redux'

const MainInput = () => {
  const [username, setUsername] = useState('')

  const handleClick = () => {
    history.push(`/${username}`)
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-black"
            id="input-field"
            placeholder="Search"
            type="text"
            // className="text-black"
            value={username}
            onChange={handleChange}
          />
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleClick}
            id="search-button"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

MainInput.propTypes = {}

export default MainInput
