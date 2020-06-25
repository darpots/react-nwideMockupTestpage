import React, { Component } from 'react';

// MyComponents
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Cards from '../Components/Cards';
import Form from '../Components/Form';

class Support extends Component {
  state = {
    cards: 6,
  };

  addCard = () => {
    this.setState(prevState => ({ cards: prevState.cards + 1 }));
  };

  removeCard = () => {
    this.setState(prevState => ({ cards: prevState.cards - 1 }));
  };

  render() {
    return (
      <div>
        <Nav addCard={this.addCard} removeCard={this.removeCard} />
        <Hero />
        <Cards cards={this.state.cards} />
        <Form />
      </div>
    );
  }
}

export default Support;
