import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Anzu from '../../images/restaurants/Anzu.jpeg'
import CreoLa from '../../images/restaurants/CreoLa.jpg'
import Fog from '../../images/restaurants/Fog Harbor Fish House.jpg'

class ProjectSummary extends Component {

    getImage = (name) => {
        if (name === 'Anzu') {
            return Anzu
        } else if (name === 'CreoLa') {
            return CreoLa
        } else if (name === 'Fog Harbor Fish House') {
            return Fog
        }
        return Anzu
    }

    render() {
        const { restaurant } = this.props;
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        <NavLink to={`/restaurant/${restaurant.restaurantName}/${restaurant.restaurantId}`}>{restaurant.restaurantName}</NavLink>
                        <NavLink to={`/restaurant/${restaurant.restaurantName}/${restaurant.restaurantId}`}><img className="image is-16x16" src={this.getImage(restaurant.restaurantName)} alt='' style={{ height: '65px', float: 'right' }} /></NavLink>
                    </span>
                    <p>Posted by: {restaurant.createdBy}</p>
                    <p className="grey-text">{restaurant.createdDate}</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(null, null)(ProjectSummary)