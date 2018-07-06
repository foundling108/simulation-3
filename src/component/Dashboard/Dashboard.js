import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            myPosts: true,
            posts: []
        }
        this.getPosts = this.getPosts.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        let {search, myPosts} = this.state;
        let url = '/api/posts';
        // a bunch of || and/or && here

        axios.get(url)
        .then(res => {
            this.setState({posts: res.data})
        })
    }

    reset() {
        let { myPosts } = this.state;
        let url = `/api/posts/${this.props.userId}`;
        if (myPosts) {
            url += '?mypost=true'
            // query string is necessary to filter the posts by id. 
        }
        axios.get(url)
        .then(res => {
            this.setState({posts: res.data, search: ''})
        })
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
                <button onClick={this.reset}>Reset</button>
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

