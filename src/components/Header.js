import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import Order from "./Order";
import Gift from "./Gift";

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(el => (
            <Order onDeleteOrder={props.onDeleteOrder} key={el.id} item={el} />
        ))}
        <p className="summa">Итого: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>)
}

const showGifts = (props) => {
    let summa = 0
    props.gifts.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
        {props.gifts.map(el => (
            <Gift onDeleteGift={props.onDeleteGift} key={el.id} item={el} />
        ))}
        <p className="summa">Итого: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>)
}

const showNothingOrder = () => {
    return (<div className='empty'>
        <h2>Корзина пуста</h2>
    </div>)
}

const showNothingGift = () => {
    return (<div className='empty'>
        <h2>Корзина подарков пуста</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    let [giftOpen, setGiftOpen] = useState(false)
    return (
        <header>

            <div>
                <a href="/catalog">
                    <span className='logo'> Friendzone </span>
                </a>
                <ul className='nav'>
                    <li onClick={() => props.onShowLogin()} >Войти</li>
                    <li onClick={() => props.onShowLogin()} >Зарегестрироваться</li>
                </ul>

                <FaShoppingCart onClick={() => { setCartOpen(cartOpen = !cartOpen); setGiftOpen(giftOpen = false) }} className={`shop-cart-button ${cartOpen && 'active'}`} />
                <FaGift onClick={() => { setGiftOpen(giftOpen = !giftOpen); setCartOpen(cartOpen = false) }} className={`gift-button ${giftOpen && 'active'}`} />

                {cartOpen && (
                    <div className="shop-cart">
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothingOrder()}
                    </div>
                )}
                {giftOpen && (
                    <div className="gift">
                        {props.gifts.length > 0 ?
                            showGifts(props) : showNothingGift()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>

        </header>
    )
}