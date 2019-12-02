import React from 'react';
import moment from 'moment'

const ProjectFields = ({project}) => {
    return(
        <div className='card z-depth-0 project-summary'>
            <div className='card-content darken-3'>
                <span className='card-title'> {project.title } </span>
                <p className='grey-text'>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className='grey-text'>on {moment(project.createdAt.toDate()).calendar() }</p>
            </div>
        </div>
    )
}


export default ProjectFields;