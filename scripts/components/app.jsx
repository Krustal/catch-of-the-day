import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import sampleFishes from '../sample_fishes';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }

  // TODO: This can probably be improved with immutablejs
  addFish(fish) {
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.fishes[`fish-${timestamp}`] = fish;
    // set the state
    this.setState({ fishes: this.state.fishes });
  }
  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }
};
