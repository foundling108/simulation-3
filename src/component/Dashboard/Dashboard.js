import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myPosts: true,
            posts: []
        }
    }

    render() {
        let posts = this.state.posts.map((el) => {
            return <Link to={`/posts/${el.posts_id}`} key={el.posts_id}>
                <div>
                <p>{el.title}</p>
                    <div>
                        <p>{el.author_id}</p>
                        <img src={el.profile_pic} alt="User Picture"/>
                    </div>
                </div>
            </Link>

        })
        return(
            <div>
                Dashboard
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    } 
}

export default Dashboard;

