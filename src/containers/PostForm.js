import { connect } from 'react-redux'

import {
  createPost,
  createPostSuccess,
  createPostFailure,
  resetNewPost
}
from '../actions/post'

import PostForm from '../components/PostForm'

import {
    Field,
    reduxForm
} from 'redux-form'

// //Client side validation
// function validate(values) {
//   const errors = {}

//   if (!values.title || values.title.trim() === '') {
//     errors.title = 'Enter a Title'
//   }
//   if (!values.content || values.content.trim() === '') {
//     errors.content = 'Enter some content'
//   }

//   return errors
// }

const createNewPost = (values, dispatch) => {

  return new Promise((resolve, reject) => {

    dispatch(createPost(values))
      .then((response) => {
        let data = response.payload
        console.log('oblivion', response.payload)

        //if any one of these exist, then there is a field error
        if (response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(createPostFailure(response.payload))
          reject(data) //this is for redux-form itself
        } else {
          //let other components know that everything is fine by updating the redux` state
          dispatch(createPostSuccess(response.payload))
          resolve() //this is for redux-form itself
        }
      })

  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      createNewPost: 'createNewPost',
    // createNewPost: (values) => {

    //   console.log('oblivion ', values)

    //   dispatch(createPost(values))
    //     .then((response) => {
    //       let data = response.payload
    //       //if any one of these exist, then there is a field error
    //       if (response.payload.status != 200) {
    //         //let other components know of error by updating the redux` state
    //         dispatch(createPostFailure(response.payload))
    //         reject(data) //this is for redux-form itself
    //       } else {
    //         //let other components know that everything is fine by updating the redux` state
    //         dispatch(createPostSuccess(response.payload))
    //         resolve() //this is for redux-form itself
    //       }
    //     })
    // },

    resetMe: () => {
       dispatch(resetNewPost())
    }

  }
}

function mapStateToProps(state, ownProps) {
  console.log('piah', state.post)
  return {
    newPost: state.post.newPost
  }
}

export default reduxForm({
  form: 'newPost',
  fields: ['title', 'content'],
  onSubmit: createNewPost
},mapStateToProps, mapDispatchToProps)(PostForm)

// const connected = connect(state => (mapStateToProps, mapDispatchToProps))(PostForm)
// export default reduxForm({
//   form: 'newPost',
//   fields: ['title', 'content']
// })(connected)
