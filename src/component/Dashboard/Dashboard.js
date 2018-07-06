import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            myPosts: true,
            posts: []
        }
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        let {search, myPosts} = this.state;
        // a bunch of || and/or && here
    }

    reset() {
        let { myPosts } = this.state;
        let url = `/api/posts/${this.props.userId}`;
        if (myPosts) {
            url += '?mine=true'
            // query string is necessary to filter the posts by id. 
        }
    }


    render() {
        let posts = this.state.posts.map((el) => {
            return <Link to={`/posts/${el.posts_id}`} key={el.posts_id}>
                <div>
                <p>{el.title}</p>
                    <div>
                        <p>{el.author_id}</p>
                        <img src={el.profile_pic} alt="User"/>
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

function mapStateToProps(state) {
    return {
        userId: this.userId
    }
}
export default connect(mapStateToProps)(Dashboard);

