import React from 'react';
import { formatPrice } from '../helper';

export default class Fish extends React.Component {
  constructor() {
    super();

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    var details = this.props.details;
    var isAvailable = (details.status === 'available' ? true : false);
    var buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name}/>
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    )
  }

  onButtonClick() {
    this.props.addToOrder(this.props.index);
  }
}
