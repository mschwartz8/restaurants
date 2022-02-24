import React from "react"; 
import Restaurant from "./Restaurant";
import {fetchRestaurantsfromServer} from "../store/restaurants"
import axios from "axios";
import {connect} from "react-redux"



class Restaurants extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }
   
    render (){
        if (this.props.restaurants.length === 0){
            return <h1>Loading...</h1>
        }
        return (
            <div id="restaurant-list">
               <h1> Favorites List</h1>  
               {this.props.restaurants.map((rest) => {
                   return <div key={rest.id}> <Restaurant theRestaurant={rest}/> </div>

               })}
               <button>add new restaurant</button>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

const dispatchToStore = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurantsfromServer())
    }
}



export default connect(mapStateToProps, dispatchToStore)(Restaurants)

