import React from 'react';
import ReactDOM from 'react-dom';

class StorePicker extends React.Component {
  render() {
    return (
      <p>hi there</p>
    )
  }
}

ReactDOM.render(<StorePicker />, document.getElementById('main'));

if(module.hot) {
  module.hot.accept();
}
