import React from 'react';
import PropTypes from 'prop-types';
import CannonBase from './CanonBase';
import CannonPipe from './CanonPipe';
import Ground from './Ground';
import Sky from './Sky';

const Canvas = (props) =>{
    // const style = {
    //     border: '1px solid black'
    // };

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]

    return(
        <svg
            id='aliens-go-home-canvas'
            preserveAspectRatio='xMaxYMax none'
            viewBox={viewBox}
            onMouseMove={props.trackMouse}
            >
                <Sky /> {/* SVG does not support z-index; relies on the order that elements are listed */}
                <Ground />
                <CannonPipe rotation={props.angle}/>
                <CannonBase />
            </svg>
    )
}

Canvas.propTypes ={
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired
}

export default Canvas