import React from 'react';
import PizzaHeader from './Header';
import Body from './ImageSection';
import List from './IngredientList';
import PizzaFooter from './Footer';
import Recipe from './recipe';
import { ingredients } from './data'

import './App.css';



export default class App extends React.Component {
  render() {
    const IngredientsList = ingredients.map(ingredient => <List ingredientProp={ingredient} />)


    return (
      <div>
        <PizzaHeader />
        <Body />
        <Recipe />
        { IngredientsList}
        <PizzaFooter />
      </div>
    )
  }
}
