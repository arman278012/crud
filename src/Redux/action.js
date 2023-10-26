import { deleteData, successData } from "./actionType";
import axios from 'axios'


/*For fetching the API we have this method*/
const url = 'https://dummyjson.com/products';
export const fetchData = () => async (dispatch) => {
    try {
        const result = await axios.get(url)
        dispatch({ type: successData, payload: result.data })
    }
    catch (err) {
        console.log("Any error is found here")
    }
}

export const deleteHandler = (id, userData) => async (dispatch) => {
    try {
        const result1 = userData.user.products.filter((el) => {
            return el.id !== id
        })
        userData.products = result1
        dispatch({ type: deleteData, payload: userData })
    } catch (err) {
        console.log(err)
    }
}


export const updateHandler = (id, userData, price, rating) => async (dispatch) => {
    try {
        const result1 = userData.user.products.map((el) => {
            if (el.id === id && rating == "uniquePrice") {
                el.price = price;
            } else if (el.id === id && price == "uniqueRating") {
                el.rating = rating
            }
        });
        userData.products = result1;
    } catch (err) {
        console.log(err);
    }
};

