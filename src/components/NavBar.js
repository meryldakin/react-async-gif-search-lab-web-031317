import React from 'react'

function NavBar(props){
  return (
    <nav className={ 'navbar deep-purple accent-2' }>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='brand-logo center'>
            { props.title }
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
