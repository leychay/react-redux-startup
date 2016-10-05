import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class PostDetail extends Component {

    static contextTypes = {
      router: PropTypes.object
    };

    componentWillUnmount() {
        this.props.resetMe()
    }

    componentDidMount() {
        console.log('componentDidMount fetchPost...')
        this.props.fetchPost(this.props.postId)
    }

    render() {
        const { post, loading, error } = this.props.activePost
        console.log('baethelr', this.props)
        if (loading) {
            return <div>Loading...</div>;
        } else if(error) {
            return  <div className="alert alert-danger">{error.message}</div>
        } else if(!post) {
            return <span />
        }

        return (
            <div className="container">
            <h3>{post.title}</h3>
            <h5>{post.content}</h5>
            </div>
            );
    }

}


export default PostDetail
