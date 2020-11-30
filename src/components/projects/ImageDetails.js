import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllReviews } from '../actions/reviewAction'
import { bindActionCreators } from 'redux';
import Ileyka from '../../images/review/Ileyka.jpg'
import Marina from '../../images/review/Marina.jpg'
import Stefanie from '../../images/review/Stefanie.jpg'
import Frank from '../../images/review/Frank.jpg'
import Sean from '../../images/review/Sean.jpg'
import Gabrielle from '../../images/review/Gabrielle.jpg'
import Mimi from '../../images/review/Mimi.jpg'
import Sandeep from '../../images/review/Sandeep.jpg'
import Matt from '../../images/review/Matt.jpg'
import Mike from '../../images/review/Mike.jpg'
import Jozza from '../../images/review/Jozza.jpg'
import Connie from '../../images/review/Connie.jpg'
import Alice from '../../images/review/Alice.jpg'
import Mina from '../../images/review/Mina.jpg'
import Ellen from '../../images/review/Ellen.jpg'

class ImageDetails extends Component {
    componentDidMount() {
        this.props.getAllReviews(this.props.match.params.id)
    }

    getImage = (reviewId) => {
        if (reviewId === '1') {
            return Ileyka
        } else if (reviewId === '3') {
            return Marina
        } else if (reviewId === '4') {
            return Stefanie
        } else if (reviewId === '5') {
            return Frank
        } else if (reviewId === '2') {
            return Sean
        } else if (reviewId === '6') {
            return Gabrielle
        } else if (reviewId === '7') {
            return Mimi
        } else if (reviewId === '8') {
            return Sandeep
        } else if (reviewId === '9') {
            return Matt
        } else if (reviewId === '10') {
            return Mike
        } else if (reviewId === '11') {
            return Jozza
        } else if (reviewId === '12') {
            return Connie
        } else if (reviewId === '13') {
            return Alice
        } else if (reviewId === '14') {
            return Mina
        } else if (reviewId === '15') {
            return Ellen
        } 
        return Ileyka
    }


    render() {

        return (
            <div className="dashboard container">
                <img className="image is-16x16" src={this.getImage(this.props.match.params.id)} alt='' style={{ height: '300px', float: 'left', margin: '30px' }} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ImageDetails)