import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllReviews } from '../actions/reviewAction'
import { bindActionCreators } from 'redux';
import ProjectList from '../projects/ProjectList'
import Anzu from '../../images/restaurants/Anzu.jpeg'
import CreoLa from '../../images/restaurants/CreoLa.jpg'
import Fog from '../../images/restaurants/Fog Harbor Fish House.jpg'

class ProjectDetails extends Component {
    componentDidMount() {
        this.props.getAllReviews(this.props.match.params.id)
    }

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
        const { reviews } = this.props
        if (!reviews || reviews.length < 1) {
            return <h5 style={{ color: 'red', textAlign: 'center', paddingTop: '50px' }}>No Reviews Available</h5>
        }

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-4">
                        <img className="image is-16x16" src={this.getImage(this.props.match.params.name)} alt='' style={{ height: '80px', float: 'left', paddingRight: '20px' }} />
                    </div>
                    <div className="col-8">
                        <h2 style={{  textAlign: 'left', color: 'grey' }}>{this.props.match.params.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        {reviews.map(review => <ProjectList review={review}/>)}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        reviews: state.reviews.allReviews,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllReviews,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)