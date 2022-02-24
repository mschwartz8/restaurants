import axios from 'axios'

export const SET_RESTAURANTS = "SET_RESTAURANTS";

export const setRestaurantsOnStore = (restaurants) => {
    return {
        type: SET_RESTAURANTS,
        restaurants
    }
}

export const fetchRestaurantsfromServer = () => {
    return async (dispatch) => {
        const response = await axios.get("/restaurants");
        const restaurants = response.data;
        dispatch(setRestaurantsOnStore(restaurants))
    }
}