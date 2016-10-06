import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import {
    Field
} from 'redux-form'

class PostForm extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
         // this.props.resetMe()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost && !nextProps.newPost.error) {
            this.context.router.push('/')
        }
    }

    renderError(newPost) {
        if(newPost && newPost.error && newPost.error.message) {
          return (
            <div className="alert alert-danger">
            {newPost ? newPost.error.message : ''}
            </div>
            );
      } else {
          return <span></span>
      }
  }

  render() {
    const {fields: { title, content }, handleSubmit, pristine, reset, submitting, newPost } = this.props

    console.log('sheila', newPost)

    return (
        <div>
            {this.renderError(newPost)}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title*</label>&nbsp;&nbsp;
                    <Field name="title" component="input" type="text" {...title} />
                </div>
                <div>
                    <label>Content*</label>&nbsp;&nbsp;
                    <Field name="content" component="input" type="textarea" {...content} />
                </div>

                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    &nbsp;&nbsp;
                    <Link to="/" className="btn btn-error">Cancel</Link>
                </div>
                </form>
        </div>
        )
    }
}

export default PostForm
