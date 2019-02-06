import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;  
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-conten">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod aliquid ipsam quos ex eius, nemo veniam optio et doloribus quasi accusantium repudiandae, est dolore? Expedita perferendis magni quas eos.</p>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by the Net Ninja</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails