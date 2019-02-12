import React, { Component } from 'react'
import { connect } from 'react-redux'  
import ProjectSummary from './ProjectSummary'
import { deleteProject } from '../store/actions/projectActions';

class ProjectList extends Component {
    render () {
        return (
            <div className="project-list section">
                {this.props.projects.map(project => {
                    return (
                        <ProjectSummary 
                            project={project} 
                            key={project.id} 
                            deletePlan={this.props.deletePlan}
                        />
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePlan: id => {
            dispatch(deleteProject(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProjectList)