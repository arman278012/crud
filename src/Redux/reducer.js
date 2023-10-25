import { deleteData, successData } from "./actionType";

const userData = {
    user: [],
    deleteUser:[]
}

const reducer = (state = userData, { type, payload })=>{
    switch (type) {
        case successData:
            return { ...state, user: payload }


        case deleteData:
             return { user: payload }

        default:
            return state
    }
}

export default reducer
