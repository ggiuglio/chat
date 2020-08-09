import {
    TEST_ACTION,
    LOAD_MESSAGES
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
    myName: 'Giulio',
    messages: [],
    test: false
};

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                test: true
            }
        case LOAD_MESSAGES:
            action.messages.map((message, i) => {
                message.id = i;
                message.timeStamp = new Date(message.timeStamp).toLocaleDateString();
                message.isMine = message.author === state.myName;
                return message;
            });

            return {
                ...state,
                messages: action.messages
            }
        default:
            return state
    }
}

export default Reducer