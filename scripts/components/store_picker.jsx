import React from 'react';
import { getFunName } from '../helper';

export default class StorePicker extends React.Component {
  render() {
    var name = "Byron";
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={getFunName()} required/>
        <input type="Submit"/>
      </form>
    )
  }
}
