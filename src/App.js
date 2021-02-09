import React from 'react';
import PizzaHeader from './Header';
import Body from './ImageSection';
import List from './IngredientList';
import PizzaFooter from './Footer';
import Recipe from './Recipe';

import './App.css';

ingredients = [
  {
    name: 'milk',
    amount: '1 1/2 cups'
  },
  {
    name: 'mascarpone',
    amount: '1/2 cup'
  },
  {
    name: 'pink salt',
    amount: '1/2 tsp'
  },
  {
    name: 'black mission figs',
    amount: '1 lb'
  },
  {
    name: 'brown sugar',
    amount: '1/2 cups'
  },
  {
    name: 'water',
    amount: '2-4 tbsp'
  },
  {
    name: 'heavy cream',
    amount: '1 1/2cups'
  },
  {
    name: 'granulated sugar',
    amount: '1/3 cup'
  },
  {
    name: 'egg yolks',
    amount: '2'
  },
  {
    name: 'lemon juiced',
    amount: '1'
  },
  {
    name: 'butter',
    amount: '2 tbsp'
  },
  {
    name: 'honey roasted pecans, roughly chopped',
    amount: '1 cup'
  }]

export default class App extends React.Component {
  render() {
    const Ingredients = IngredientArray.map(ingredient => <List ingredients />)


    return (
      <div>
        <PizzaHeader />
        <Body />
        <Recipe />
        <List />
        <PizzaFooter />
      </div>
    )
  }
}
