import React from 'react';
import PropTypes from 'prop-types';
import CannonBase from './CanonBase';
import CannonPipe from './CanonPipe';
import Ground from './Ground';
import Sky from './Sky';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject.jsx';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

const Canvas = (props) => {
    // const style = {
    //     border: '1px solid black'
    // };
    const gameHeight = 1200;
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]

    return (
        <svg
            id='aliens-go-home-canvas'
            preserveAspectRatio='xMaxYMax none'
            viewBox={viewBox}
            onMouseMove={props.trackMouse}
        >
            <defs>
                <filter id='shadow'>
                    <feDropShadow dx='1' dy='1' stdDeviation='2' />
                </filter>
            </defs>
            <Sky /> {/* SVG does not support z-index; relies on the order that elements are listed */}
            <Ground />
            <CannonPipe rotation={props.angle} />
            <CannonBase />
            <CurrentScore score={15} />
            {!props.gameState.started &&
                <g>
                    <StartGame onClick={() => props.startGame()} />
                    <Title />
                </g>
            }

            {props.gameState.flyingObjects.map(flyingObject => (
                <FlyingObject
                    key={flyingObject.id}
                    position={flyingObject.position}
                />
            ))}
            {/* {props.gameState.started &&
                <g>
                    <FlyingObject position={{ x: -150, y: -300 }} />
                    <FlyingObject position={{ x: 150, y: -300 }} />
                </g>
            } */}
            {/* <CannonBall position={{x:0, y: -100}} /> */}
            {/* <Heart position={{x: -300, y: 35}} /> */}
            {/* <StartGame onClick={()=> console.log('Aliens, Go Home!')} /> */}
            {/* <Title /> */}
        </svg>
    )
}

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default Canvas