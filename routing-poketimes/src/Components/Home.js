import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends React.Component{
    render(){
        let postList;
        console.log(this.props);
        //if(this.state.posts.length > 0){
        if(this.props.posts.length > 0){
            //postList = this.state.posts.map(post => {
            postList = this.props.posts.map(post => {
                return(
                    <div className='post card' key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className='card-content'>
                            <Link to={'/posts/' + post.id }>
                                <span className='card-title red-text'> { post.title }</span>
                            </Link>
                            <p> { post.body }</p>
                        </div>
                    </div>
                )
            })
        }
        else{
            postList = <p>No posts yet dude!!!</p>
        }
        return(
            <div className='home container'>
                <h4 className='center home'>This is the Home Page</h4>
                { postList }
            </div>
        )
    }
}

const mapStateToProps = ((storeState) => {
    return{
        posts: storeState.posts
    }
});

export default connect(mapStateToProps)(Home);