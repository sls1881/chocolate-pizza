import React from 'react';

export default class PizzaFooter extends React.Component {
    render() {
        return (
            <div>
                <img alt='autor' src='../van-pic.png' />
                <h3>Vanessa Stevenson</h3>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and thats pretty much who I am.</p>
                <button>SHARE RECIPE</button>
                <img alt='logo' src='../Logo.png' />
                <p>Delicious &copy; 2013 • All Rights Reserved. </p>
                <p>Proudly published with Ghost.</p>


            </div>
        )
    }
}