import React from 'react';
import PizzaHeader from './Header';
import Body from './ImageSection';
import List from './IngredientList';
import PizzaFooter from './Footer'

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PizzaHeader />
        <Body />
        <List />
        <PizzaFooter />
      </div>
    )
  }
}
