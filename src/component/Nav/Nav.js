import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav() {
    if( window.location.pathname !== '/' ) {
        return(
            <div>
            <div className='Navbar'>
            Nav
            </div>
            <div>
              <Link to='/dashboard'><button>Home</button></Link>  
              <Link to='/new'><button>New Post</button></Link>  
              <Link to='/'>Logout</Link>  
            </div>
            </div>
        )
    } else {
        return null
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(Nav);