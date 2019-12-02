import React from 'react'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

// Redux imports
import { connect } from 'react-redux'
import { compose } from 'redux'

// Firebase imports
import { firestoreConnect } from 'react-redux-firebase'

const ProjectDetails = (props) => {
    const loggedUser = props.loggedUser
    if(loggedUser){
        let firebaseProject = props.project
        if(firebaseProject){
            return (
                <div className='project-details container section'>
                    <div className='card z-depth-0'>
                        <div className='card-content'>
                            <span className='card-title'>{ firebaseProject.title }</span>
                            <p>{ firebaseProject.content }</p>
                        </div>
                        <div className='card-action grey-text'>
                            <p>Posted by { firebaseProject.authorFirstName }, { firebaseProject.authorLastName }</p>
                            <p>Posted on {moment(firebaseProject.createdAt.toDate()).calendar()}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='container section'>
                    <p>Loading post...</p>
                </div>
            )
        }
    }
    else{
        return (
            <Redirect to='/signin' />
        )
    }
}

const mapStateToProps = (storeState, ownProps) => {
    let firebaseProject = null;
    let projectID = ownProps.match.params.project_id

    if(storeState.firestore.data.projects){
        firebaseProject = storeState.firestore.ordered.projects.find(project => {
            return project.id === projectID
        })

    }

    return{
        project: firebaseProject,
        loggedUser: storeState.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);