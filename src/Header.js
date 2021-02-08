import React from 'react';
import SocialMediaImages from './SocialMedia.js';

export default class PizzaHeader extends React.Component {
    render() {
        return (
            <div>
                < span >
                    <img alt='logo' src='../Logo.png' />
                </span>
                <span>
                    <h1>Delicious</h1>
                    <p>THE BEST FOOD BLOG ON THE WEB</p>
                </span>
                <SocialMediaImages />
            </div>
        )
    }
}