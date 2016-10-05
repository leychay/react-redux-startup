import React, { Component } from 'react'
import { Link } from 'react-router'

class PostsList extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <li key={post.id}>
                <Link style={{color:'black'}} to={"show/" + post.id}>
                <h3>{post.title}</h3>
                </Link>
                <div>{post.content}</div>
                </li>
                )
        })
    }

    render() {
        const { posts, loading, error } = this.props.postsList
        if(loading) {
            return <div><h1>Posts</h1><h3>Loading...</h3></div>
        } else if(error) {
            return <div>Error: {error.message}</div>
        }

        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </div>
            )
    }
}


export default PostsList
