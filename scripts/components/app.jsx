import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from './fish';
import sampleFishes from '../sample_fishes';
import Rebase from 're-base';

var base = Rebase.createClass('https://catch-of-the-day-byr.firebaseio.com/');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.renderFish = this.renderFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUpdate = this.componentWillUpdate.bind(this);
  }

  componentDidMount() {
    base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
    var localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(this.renderFish)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
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

  renderFish(key) {
    return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
  }

  addToOrder(key) {
    this.state.order[key] = this.state.order[key] + 1 || 1;

    this.setState({ order: this.state.order });
  }
};
