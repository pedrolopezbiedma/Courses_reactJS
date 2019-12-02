import React from 'react'
import ProjectFields from '../Project/ProjectFields'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectFields project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList