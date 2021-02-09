import React from 'react';
import IngredientArray from './data';

export default class List extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: `url('../list-bg.png')` }}>
                <input type="checkbox" />
                <label>{this.props.amount} {this.props.name} </label>

            </div>
        )
    }
}