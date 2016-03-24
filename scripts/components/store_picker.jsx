import React from 'react';
import { getFunName } from '../helper';

export default class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  render() {
    var name = "Byron";
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={getFunName()} required/>
        <input type="Submit"/>
      </form>
    );
  }

  goToStore(ev) {
    ev.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;

    // transition from StorePicker to App
    this.props.history.pushState(null, `/store/${storeId}`);
  }
}
