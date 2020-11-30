import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getAllRestaurants } from '../actions/restaurantAction'
import ProjectSummary from '../projects/ProjectSummary'

class Dashboard extends Component {
    static propTypes = {
        getAllRestaurants: PropTypes.func,
    };

    componentDidMount() {
        this.props.getAllRestaurants()
    }

    render() {
        const { restaurants } = this.props
        if (!restaurants || restaurants.length < 1) {
            return <h5 style={{ color: 'red', textAlign: 'center', paddingTop: '50px' }}>No Restaurant Available</h5>
        }

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        {restaurants.map(restaurant => <ProjectSummary restaurant={restaurant}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        restaurants: state.restaurants.allrestaurants,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllRestaurants,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)