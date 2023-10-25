import { deleteData, successData } from "./actionType";
import axios from 'axios'

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

export const deleteHandler = (id) => async (dispatch) => {
    try {
        const result1 = axios.delete(`${url}/${id}`);
        dispatch({ type: deleteData, payload: result1.data})
    } catch (err) {
        console.log(err)
    }
}