import React, { Component } from "react";
import Canvas from "./components/Canvas";
import PropTypes from 'prop-types';
import { getCanvasPosition } from "./utils/formulas";

// article written in 2018, uses class components:
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.message}</h1>
//       </div>
//     )
//   }
// }

// with functional components, write like this
// function App({message}) {
//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );
// }

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`
      cnv.style.height = `${window.innerHeight}px`
    };
    window.onresize();
  }

  trackMouse(e) {
    this.canvasMousePosition = getCanvasPosition(e)
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        trackMouse={e => (this.trackMouse(e))}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
}

export default App;
