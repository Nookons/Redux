import './App.css';
import React, { Component } from "react";
import  {connect} from "react-redux";

class App extends Component {

    addTrack() {
        console.log('addTrack', this.trackInput.value)
        this.props.onAddTrack(this.trackInput.value)
    }

    render() {
        console.log(this.props.testStore)
        return(
            <div>
                <input type="text" ref={(input) => {this.trackInput = input}} placeholder='Name Track...'/>
                <button onClick={this.addTrack.bind(this)}>Add</button>
                <h1>List Track :</h1>
                <ul>
                    {this.props.testStore.tracks.map((track, index)=> {
                        return (
                            <li key={index}>{track}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// const App = (props) => {
//     console.log(this.props.testStore)
//     return (
//         <div>
//
//         </div>
//     );
// };

export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({ type: 'ADD_TRACK', payload: trackName});
        }
    })
)(App);
