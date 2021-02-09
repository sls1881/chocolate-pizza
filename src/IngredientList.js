import React from 'react';

export default class List extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: `url('../list-bg.png')` }}>
                <input type="checkbox" />
                <label> 1 1/2 cups milk</label>
                <input type="checkbox" />
                <label> 1 1/2 cups milk</label> <input type="checkbox" />
                <label> 1/2 cup mascarpone</label> <input type="checkbox" />
                <label> 1/2 tsp pink salt</label> <input type="checkbox" />
                <label> 1 lb black mission figs</label> <input type="checkbox" />
                <label> 1/2 cups brown sugar</label> <input type="checkbox" />
                <label> 2-4 tbsp water</label> <input type="checkbox" />
                <label> 1/3 granulated sugar</label> <input type="checkbox" />
                <label> 2 egg yolks</label> <input type="checkbox" />
                <label> 1 lemon juiced</label> <input type="checkbox" />
                <label> 2 tbsp butter</label> <input type="checkbox" />
                <label> 1 cup honey roasted pecans, roughly chopped</label>

            </div>
        )
    }
}