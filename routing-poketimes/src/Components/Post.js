import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../Redux/Actions/postActions'

class Post extends React.Component{

    handleClick = () => {
        this.props.deletePost(this.props.match.params.post_id)
        this.props.history.push('/');
    };

    render(){
        let postContent;
        if(this.props.post){
            postContent = 
            <div className='post'>
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{ this.props.post.body }</p>
                <div className='center'>
                    <button className='btn grey' onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        }
        else{
            postContent = 
            <div className='center'>Loading the post...</div>
        }
        return(
            <div className='container'>
                { postContent }
            </div>
        )
    }
}

const mapStateToProps = (storeState, ownProps) => {
    console.log(ownProps);
    let id = ownProps.match.params.post_id;
    return{
        post: storeState.posts.find(post => {
            return post.id === id;
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: function(clickedID){
            dispatch(deletePost(clickedID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);