import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {

  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const onSearchHandler = (event) =>{
    event.preventDefault();
    navigate('/course-list/' + input);
  }

  return (
    <div className="flex ">
      <form onSubmit={onSearchHandler}>
        <input
          value={input}
          onChange={(e)=>{setInput(e.target.value)}}
          type="text"
          placeholder="Search for courses"
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
        className="p-2 bg-blue-500 p t4ext-white rounded-r-md hover:bg-blue-700">
            Search
        </button>
       </form>
    </div>
  )
}

export default SearchBar
