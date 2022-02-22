import React from "react"; 
import Restaurant from "./Restaurant";

const dummyData = [{
    name: "4 Charles Prime Rib",
    cuisine: "american",
    googleLink: "https://nycprimerib.com/",
    cost: 4
}, 
{
    name: "Fish Cheeks",
    cuisine: "thai",
    googleLink: "https://www.fishcheeksnyc.com/",
    cost: 3
}]

class Restaurants extends React.Component {
    render (){
        return (
            <div id="restaurant-list">
               <h3>Restaurant List</h3>  
               {dummyData.map((restaurant) => {
                   return <Restaurant theRestaurant={restaurant} />
               })}
            </div>
           
        )
    }
}

export default Restaurants;