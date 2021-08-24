import React, {Component} from "react";
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
  componentDidMount(){
    const self = this;
    setInterval(()=>{
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }

  trackMouse(e){
    this.canvasMousePosition = getCanvasPosition(e)
  }

  render(){
    return (
      <Canvas 
        angle={this.props.angle}
        trackMouse={e => (this.trackMouse(e))}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired
}

export default App;
