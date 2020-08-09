import {
    TEST_ACTION,
    LOAD_MESSAGES
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
    myName: 'Giulio',
    messages: [],
    test: false
};

const dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric', time: 'full' };
const timeFormatOptions = { hour: '2-digit', minute:'2-digit', hour12: false };


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
                message.date = new Date(message.timeStamp).toLocaleDateString('en-DE', dateFormatOptions) 
                    + ' ' + new Date(message.timeStamp).toLocaleTimeString('en-DE', timeFormatOptions);
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