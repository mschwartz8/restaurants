import React from 'react';

class Restaurant extends React.Component {
    render () {
        
        return (
            <div>
                <h2><a href={this.props.theRestaurant.googleLink}>{this.props.theRestaurant.name}</a></h2>
                <ul>
                  <ul>Cuisine: {this.props.theRestaurant.cuisine} </ul>
                  <ul style={{color: "blue"}}>Price: {this.props.theRestaurant.cost}/5 </ul>
                </ul>
            </div>
        )
    }
}

export default Restaurant