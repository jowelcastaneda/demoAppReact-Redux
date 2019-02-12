import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjectById } from '../store/actions/projectActions'
import image from './images/image.png'
import { NavLink } from 'react-router-dom'

class ProjectDetails extends Component {
    componentDidMount() {
        this.props.fetch(this.props.match.params.id)
    }

    render() {
        const { project } = this.props;
        return (
            <div className="container section project-details">
                <NavLink to={`/plan/edit/${project.id}`}><img className="image is-16x16" src={image} alt='' /> </NavLink>
                <div className="card z-depth-0">
                    <div className="card-conten">
                        <span className="card-title">{project.title}</span> 
                        <p>{project.content}</p>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by the Net Ninja</div>
                            <div>2nd September, 2am</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        project: state.project.project
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (id) => {
            dispatch(fetchProjectById(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)