import React from 'react';
import Restaurants from './Restaurants';

class Restaurant extends React.Component {
    render () {
        
        return (
            <div>
                <h2><a href={this.props.theRestaurant.googleLink}>{this.props.theRestaurant.name}</a></h2>
                <ul>
                  <li>Cuisine: {this.props.theRestaurant.cuisine} </li>
                  <li>Price (1/5): {this.props.theRestaurant.cost} </li>
                </ul>
            </div>
        )
    }
}

export default Restaurant