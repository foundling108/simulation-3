import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    if( props.location.pathname !== '/' ) {
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

export default Nav;