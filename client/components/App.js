import React from "react";
import Restaurants from "./Restaurants";

class App extends React.Component {
    render (){
        return (
            <div>
                <h1>Welcome to the NYC Eats app!</h1>
                 <Restaurants />
            </div>
            
        )
        
    }
    
}

export default App;