import React from 'react';
import { formatPrice } from '../helper';

export default class Fish extends React.Component {
  render() {
    var details = this.props.details;
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name}/>
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
      </li>
    )
  }
}
