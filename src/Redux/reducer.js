import { deleteData, successData, updateData } from "./actionType";

const userData = {
    user: []
}

const reducer = (state = userData, { type, payload }) => {
    switch (type) {
        case successData:
            return { ...state, user: payload }


        case deleteData:
            return { ...state, user: payload }


        case updateData:
            return { ...state, user: payload }

        default:
            return state
    }
}

export default reducer
