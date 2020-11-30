import React, { Component } from 'react'
import { connect } from 'react-redux'  
import { addNewRestaurant } from '../actions/restaurantAction'  


class EditPage extends Component {
    state = {
        title:'',
        content:'',
        oldTitle: this.props.project.title,
        oldContent: this.props.project.content
    }
    componentDidMount() {
        this.props.fetch(this.props.match.params.id)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value 
        })
   }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.update(this.props.match.params.id, this.state)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Edit Project {this.props.project.id}</h5>
                    <div className="input-field">
                        <label htmlFor="title">{this.state.oldTitle}</label>
                        <input 
                            type="text" 
                            id="title" 
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">{this.state.oldContent}</label>
                        <textarea 
                            id="content" 
                            className="materialize-textarea"
                            onChange={this.handleChange}
                            value={this.state.content}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Edit</button>
                    </div>
                </form>
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
        fetch: (id) => {dispatch(addNewRestaurant(id))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)