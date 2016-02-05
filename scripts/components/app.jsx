import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
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
};
