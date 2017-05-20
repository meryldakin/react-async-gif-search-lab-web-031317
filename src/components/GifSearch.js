import React from 'react'

function GifSearch(props) {

  return (
    <div>
      <h1>Find kewl gifs!</h1>
      <form onSubmit={props.handleSubmit}>
        <label>Search term:</label>
        <input value={props.query} onChange={props.handleChange}></input>
        <button type="Submit" className="btn red accent-3">See my gifs!</button>
      </form>
      <div className="live-typing">
        {props.query}
      </div>
    </div>
  )
}

export default GifSearch
