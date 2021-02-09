import React from 'react';

export default class List extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: `url('../list-bg.png')` }}>
                <input type="checkbox" />
                <label>{this.props.ingredientProp.amount} {this.props.ingredientProp.name} </label>

            </div>
        )
    }
}