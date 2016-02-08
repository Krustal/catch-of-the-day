import React from 'react';
import { formatPrice } from '../helper';

export default class Order extends React.Component {
  constructor() {
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }

  render() {
    var orderIds = Object.keys(this.props.order);
    var total = orderIds.reduce((prevTotal, key) => {
      var fish = this.props.fishes[key];
      var count = this.props.order[key];
      var isAvailable = fish && fish.status === 'available';

      if (fish && isAvailable) {
        return prevTotal + (count * parseInt(fish.price, 10) || 0);
      }

      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }

  renderOrder(key) {
    var fish = this.props.fishes[key];
    var count = this.props.order[key];

    if(!fish) {
      return (
        <li key={key}>Sorry, fish no longer available!</li>
      )
    }

    return (
      <li key={key}>
        <span>{count}</span>lbs
        {fish.name}
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }
}
