import React, { Component } from 'react'
import "bulma/css/bulma.css"
import { NavLink } from 'react-router-dom'
import { deleteProject } from '../../components/store/actions/projectActions'
import { connect } from 'react-redux'   

class ProjectSummary extends Component {

    handleClick = (id) => {
        this.props.deleteProject(id)
    }

    render() {
        const { project } = this.props;
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        <NavLink to={`/plan/${project.id}`}>{project.title}</NavLink>
                        <button className="delete" onClick={() => this.handleClick(project.id)}/>
                    </span>
                    <p>Posted by the Net Ninja</p>
                    <p className="grey-text">3rd September, 2am</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default connect(null, mapDispatchToProps)(ProjectSummary)