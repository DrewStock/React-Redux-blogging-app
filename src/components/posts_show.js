import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
        // console.log('getting data from API');
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        console.log('post rendering', post);

        return (
            <div>
               <h3>{post.title}</h3>
               <h6>Categories: {post.categories}</h6>
               <p>{post.content}</p>
               <Link className="btn btn-primary" to="/">Back to home</Link>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    // console.log('getting posts', posts, 'getting a post', posts[ownProps.match.params.id]);
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);