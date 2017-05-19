import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'
import fetchGifs from '../api/index.js'

class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      query: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const query  = e.target.value
    this.setState({
      query: query
    })
  }

  handleSubmit(e){
    console.log("submitted!!")
    e.preventDefault()
    fetchGifs(this.state.query)
    .then(data => this.setState({
      gifs: (data.data.map(gif => gif.images.fixed_height.url)).slice(0,3)
    }))
    .catch(error => console.log('error is', error));
  }


  render(){
    console.log(this.state.query)
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            < GifSearch query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
          <div className="col s6">
            < GifList gifList={this.state.gifs} />
          </div>
        </div>
      </div>
    )
  }
}

export default GifListContainer
