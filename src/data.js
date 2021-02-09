import React from 'react';
import List from './IngredientList';

export default class IngredientArray extends React.Component {

    render() {
        return (
            <div>
                {
                    this.ingredients.map((item, i) => {
                        return <List name={item.name} amount={item.amount} key={i} />
                    })

                }
            </div>
        )
    }
}