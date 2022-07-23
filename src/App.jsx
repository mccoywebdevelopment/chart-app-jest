import React from 'react';
import LineGraph from './components/LineGraph/LineGraph';
import { populationData } from './data/us-population.js';

import { addData, removeData, reverseGraph } from './utils/graph'

export default class App extends React.Component {
  state = {
    x: [],
    y: [],
    arr: []
  }

  constructor(props) {
    super(props);

    this.state = {
      x: populationData[1].slice(0, 3).map((data) => { return data.date }),
      y: populationData[1].slice(0, 3).map((data) => { return data.value }),
      arr: populationData[1]
    }
  }

  add = () => {
    let newState = this.state;
    let { x, y } = addData(newState.x, newState.y, newState.arr);

    newState.x = x;
    newState.y = y;

    this.setState(newState);
  }

  remove = () => {
    let newState = this.state;
    let { x, y } = removeData(newState.x, newState.y);

    newState.x = x;
    newState.y = y;
    
    this.setState(newState);
  }

  reverse = () =>{
    let newState = this.state;
    let { x, y, arr} = reverseGraph(newState.x, newState.y,newState.arr);

    newState.x = x;
    newState.y = y;
    newState.arr = arr;

    this.setState(newState);
  }

  componentDidMount = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div style={{ padding: '2em' }}>
        <LineGraph {...this.state} />
        <button onClick={this.add}>Add Data</button>
        <button onClick={this.remove}>Remove Data</button>
        <button onClick={this.reverse}>Reverse Data</button>
      </div>
    )
  }
}