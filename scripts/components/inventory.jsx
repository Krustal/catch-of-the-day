import React from 'react';
import AddFishForm from './add_fish_form';

export default class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm {...this.props} />
      </div>
    )
  }
}
