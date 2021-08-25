import { connect } from 'react-redux';

import App from '../App';
import { moveObjects, startGame, leaderboardLoaded, loggedIn, shoot } from '../actions/index';

const mapStateToProps = state =>({
    angle: state.angle,
    gameState: state.gameState,
    currentPlayer: state.currentPlayer,
    players: state.players,
})

const mapDispatchToProps = dispatch =>({
    moveObjects: (mousePosition) =>{
        dispatch(moveObjects(mousePosition))
    },
    startGame: ()=>{
        dispatch(startGame())
    },
    leaderboardLoaded: (players) => {
        dispatch(leaderboardLoaded(players))
    },
    loggedIn: (player) =>{
        dispatch(loggedIn(player))
    },
    shoot: (mousePosition) =>{
        dispatch(shoot(mousePosition))
    }
})

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;