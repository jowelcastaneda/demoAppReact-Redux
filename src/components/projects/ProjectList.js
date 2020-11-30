import React, { Component } from 'react'
import { connect } from 'react-redux'  
import { NavLink } from 'react-router-dom'
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

class ProjectList extends Component {
    getImage = (name) => {
        if (name === 'Ileyka W.') {
            return Ileyka
        } else if (name === 'Marina J.') {
            return Marina
        } else if (name === 'Stefanie C.') {
            return Stefanie
        } else if (name === 'Frank W.') {
            return Frank
        } else if (name === 'Sean F.') {
            return Sean
        } else if (name === 'Gabrielle W.') {
            return Gabrielle
        } else if (name === 'Mimi T.') {
            return Mimi
        } else if (name === 'Sandeep C.') {
            return Sandeep
        } else if (name === 'Matt Y.') {
            return Matt
        } else if (name === "Mike 'Mikey' K.") {
            return Mike
        } else if (name === 'Jozza M.') {
            return Jozza
        } else if (name === 'Connie L.') {
            return Connie
        } else if (name === 'Alice C.') {
            return Alice
        } else if (name === 'Mina N.') {
            return Mina
        } else if (name === 'Ellen F.') {
            return Ellen
        } 
        return Ileyka
    }

    render() {
        const { review } = this.props;
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content red-text text-darken-1" style={{ background: 'grey' }}>
                    <span className="card-title">
                        <NavLink to={`/${review.reviewId}`} style={{ color: 'white' }}>{review.reviewerName}</NavLink>
                        <NavLink to={`/${review.reviewId}`}><img className="image is-16x16" src={this.getImage(review.reviewerName)} alt='' style={{ height: '65px', float: 'right' }} /></NavLink>
                        <h6 style={{ color: 'black' }}>{review.review}</h6>
                    </span>
                    <p style={{ color: 'black' }}>Posted at: {review.reviewerLocation}</p>
                    <p className="grey-text">{review.createdDate}</p>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(ProjectList)