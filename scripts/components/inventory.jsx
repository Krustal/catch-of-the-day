import React from 'react';
import AddFishForm from './add_fish_form';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInventoryChange = this.props.handleInventoryChange.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm {...this.props} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }

  renderInventory(key) {
    return (
      <div className="fish-edit" key={key}>
        <input type="text" value={this.props.fishes[key].name} onChange={this.handleChange(key, 'name')}/>
        <input type="text" value={this.props.fishes[key].price} onChange={this.handleChange(key, 'price')}/>
        <select value={this.props.fishes[key].status} onChange={this.handleChange(key, 'status')} >
          <option value="unavailable">Sold Out!</option>
          <option value="available">Fresh!</option>
        </select>
        <textarea value={this.props.fishes[key].desc} onChange={this.handleChange(key, 'desc')}>
        </textarea>
        <input type="text" value={this.props.fishes[key].image} onChange={this.handleChange(key, 'image')} />
        <button>Remove Fish</button>
      </div>
    );
  }

  handleChange(fish, field) {
    return (ev) => {
      this.handleInventoryChange(fish, field, ev.target.value);
    };
  }
}
