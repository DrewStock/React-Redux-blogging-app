import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {

        return _.map(this.props.posts, post => {
            return (
                <li 
                    className="list-group-item"
                    key={post.id}
                >
                <Link to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
                </li>
            );
        });
    }

    render() {

        const transitionOptions = {
            transitionName: "fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        }

        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                    Add a Post
                    </Link>
                </div>
                <h3>Posts Index</h3>
                <ul className="list-group">
                    <ReactCSSTransitionsGroup {...transitionOptions}>
                        {this.renderPosts()}
                    </ReactCSSTransitionsGroup>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);