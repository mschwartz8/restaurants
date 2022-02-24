import React from "react"; 
import Restaurant from "./Restaurant";
import axios from "axios"



class Restaurants extends React.Component {
    constructor () {
        super ();
        this.state = {
            fetchedRestaurants : null
        }
    }
    async componentDidMount () {
        const response = await axios.get("/restaurants");
        const restaurants = response.data;
        this.setState({ fetchedRestaurants: restaurants})
        

    }
    render (){
        if (this.state.fetchedRestaurants === null){
            return <h1>Loading...</h1>
        }
        return (
            <div id="restaurant-list">
               <h3>Restaurant List</h3>  
               {this.state.fetchedRestaurants.map((rest) => {
                   return <div key={rest.id}> <Restaurant theRestaurant={rest}/> </div>

               })}
            </div>
           
        )
    }
}

export default Restaurants;