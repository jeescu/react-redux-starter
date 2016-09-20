import React, { Component } from 'react';
import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts()
    }

    getPostLists() {
        return this.props.posts.map(post =>  <li key={ post.id }>{ post.name }</li>)
    }

    render() {

        return( 
            <ul>
                { this.getPostLists() }
            </ul>
        )
    }
}

function mapStateToProps({ posts }) {
    return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);