import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import ShowLogin from './components/ShowLogin';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      gifts: [],
      items: [
        {
          id: 1,
          title: 'Процессор Intel Core i5-11600K Box 1',
          img: 'proc.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'processors',
          price: '19.999'
        },
        {
          id: 2,
          title: 'Процессор Intel Core i5-11600K Box 2',
          img: 'proc.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'processors',
          price: '19.999'
        },
        {
          id: 3,
          title: 'Процессор Intel Core i5-11600K Box 3',
          img: 'proc.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'processors',
          price: '19.999'
        },
        {
          id: 4,
          title: 'Процессор Intel Core i5-11600K Box 4',
          img: 'proc.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'processors',
          price: '19.999'
        },
      ],
      showFullItem: false,
      showLogin: false,
      modalForm: "login",
      fullItem: {}
    }
    this.addToOrder = this.addToOrder.bind(this) //взаимодействие с состояниями
    this.deleteOrder = this.deleteOrder.bind(this)
    this.addToGift = this.addToGift.bind(this)
    this.deleteGift = this.deleteGift.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.onShowLogin = this.onShowLogin.bind(this)
    //this.onShowRegister = this.onShowLogin.bind(this)
  }
  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <div class='wrapper-content'>
            <Route path='/catalog' component={StartPage} />
            <Route path='/catalog/user' component={MainPage} />
            <Route path='/profile' component={Profile} />
          </div>
          <Header orders={this.state.orders} gifts={this.state.gifts} onDeleteOrder={this.deleteOrder} onDeleteGift={this.deleteGift} onShowLogin={this.onShowLogin} />
          <Items onShowItem={this.onShowItem} items={this.state.items} onAddOrder={this.addToOrder} onAddGift={this.addToGift} />

          {this.state.showFullItem && <ShowFullItem onClose={this.onShowItem} onAddOrder={this.addToOrder} onAddGift={this.addToGift} onShowItem={this.onShowItem} item={this.state.fullItem} />}
          {this.state.showLogin && <ShowLogin onClose={this.onShowLogin} onShowLogin={this.onShowLogin} form={this.state.modalForm} />}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  onShowLogin(form) {
    this.setState({ modalForm: form })
    this.setState({ showLogin: !this.state.showLogin })
  }

  /*onShowRegister(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }
  */

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) }) //с помощью метода filter перебираем весь массив в новый массив, выбирая нужные нам элементы
  }

  addToOrder(item) {
    let isAnArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isAnArray = true
    })
    if (!isAnArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {
      })
  }

  deleteGift(id) {
    this.setState({ gifts: this.state.gifts.filter(el => el.id !== id) }) //с помощью метода filter перебираем весь массив в новый массив, выбирая нужные нам элементы
  }

  addToGift(item) {
    let isAnArray = false
    this.state.gifts.forEach(el => {
      if (el.id === item.id)
        isAnArray = true
    })
    if (!isAnArray)
      this.setState({ gifts: [...this.state.gifts, item] }, () => {
      })
  }

  closeItem(item) {

  }
}

export default App;
