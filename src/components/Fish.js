import React from "react";
import { formatPrice } from "../helpers";
class Fish extends React.Component {
  render() {
    const { name, price, status, desc, image } = this.props.details;
    const isAvailable = status === "available";
    return (
      <div className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Cart" : "Sold Out"}
        </button>
      </div>
    );
  }
}

export default Fish;
