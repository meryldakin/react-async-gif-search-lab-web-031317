import React from 'react'

function GifList(props) {

    return <div> {props.gifList.length > 0 ? <h1 className="center-align">Here are your gifs:</h1> : null} {props.gifList.map(function(gif, i) {
      return (
        <div key={i} className="row">
              <div className="col s3">
              </div>
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img src={gif} />
                  </div>
                </div>
              </div>
              <div className="col s3">
              </div>
        </div>
          )
        }
      )
      }
    </div>
}

export default GifList
