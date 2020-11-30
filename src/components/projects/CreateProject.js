import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
import { addNewRestaurant } from '../actions/restaurantAction'

class CreateProject extends Component {
    state = {
        name: '',
        owner: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('1', this.state.name, this.state.owner);
        this.props.addNewRestaurant(this.state.name, this.state.owner)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add New Restaurant</h5>
                    <div className="input-field">
                        <label htmlFor="name">Restaurant Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="owner">Owner</label>
                        <textarea 
                            id="owner" 
                            className="materialize-textarea"
                            onChange={this.handleChange}
                            value={this.state.owner}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addNewRestaurant,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreateProject)