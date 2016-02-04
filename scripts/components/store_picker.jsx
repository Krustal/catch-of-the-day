import React from 'react';

export default class StorePicker extends React.Component {
  render() {
    var name = "Byron";
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text,ref=storeId,required"/>
        <input type="Submit"/>
      </form>
    )
  }
}
