import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.deletedPost.error && nextProps.deletedPost.error.message) {//delete failure
      alert(nextProps.deletedPost.error.message || 'Could not delete. Please try again.');
    } else if(nextProps.deletedPost.post && !nextProps.deletedPost.error) {//delete success
      this.context.router.push('/');
    }
  }

    renderLinks() {
        const { type } = this.props;
        if(type === 'posts_index') {
       return (
        <Link style={{color:'#337ab7',  fontSize: '18px'}} to="/posts/new">New Post</Link>
        );
    } else if(type === 'posts_new') {
       return (
        <Link className="text-xs-right"  style={{color:'#337ab7',  fontSize: '18px'}}  to="/">Back To Post list</Link>
         );
    } else if(type === 'posts_show') {
        return (
            <div className="navbar-form navbar-right" style={{paddingRight: '50px'}}>
                <button className="btn btn-warning pull-xs-right"  onClick={()=> {this.props.onDeleteClick()}}>Delete Post</button>
            </div>
        );
    }
    };

    render() {
            return (
             <nav>
                  <div id="navbar" className="navbar-collapse collapse">
                  <Link className="text-xs-right"  style={{color:'#337ab7',  fontSize: '18px'}}  to="/">Home</Link>
                  <span> | </span>
                  {this.renderLinks()}
                  <span> | </span>
                </div>
             <hr />
             </nav>
            );
    }
}

export default Header
