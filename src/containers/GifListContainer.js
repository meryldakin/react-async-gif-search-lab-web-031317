import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'
import fetchGifs from '../api/index.js'

class GifListContainer extends React.Component {
  constructor(){
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

  handleSubmit(event){
    event.preventDefault()
    fetchGifs(this.state.query)
      .then(data => this.setState({
        gifs: (data.data.map(gif => gif.images.fixed_height.url)).slice(0,11)
      }))
      .then(data => this.setState({
        query: ''
      }))
      .catch(error => console.log('error is', error))
  }


  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col s4">
            < GifSearch query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
          <div className="col s8">
            < GifList gifList={this.state.gifs} />
          </div>
        </div>
      </div>
    )
  }
}

export default GifListContainer
