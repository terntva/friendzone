import React, { Component } from "react";
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => (
                    <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAddOrder={this.props.onAddOrder} onAddGift={this.props.onAddGift} />
                ))}
            </main>
        )
    }
}

export default Items