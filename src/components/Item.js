import React, { Component } from "react";
import { FaGift } from "react-icons/fa";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}₽</b>
                <div className="add-to-cart" onClick={() => this.props.onAddOrder(this.props.item)}>+</div>
                <FaGift className="addGift" onClick={() => this.props.onAddGift(this.props.item)} />
            </div>
        )
    }
}

export default Item