import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {

        return(
            <div>
            <div className='Navbar'>
                <div style={{backgroundImage: `url('${props.profilePic}')`}} ></div>
                <p>{props.username}</p>
            </div>
            <div>
              <Link to='/dashboard'><button>Home</button></Link>  
              <Link to='/new'><button>New Post</button></Link>  
              <Link to='/'>Logout</Link>  
            </div>
            </div>
        )

}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(Nav);