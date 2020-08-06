import {
    TEST_ACTION,
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
};

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                test: true
            }
        default:
            return state
    }
}

export default Reducer