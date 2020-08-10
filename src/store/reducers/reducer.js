import {
    LOAD_MESSAGES,
    WRITE_MESSAGE
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
    myName: 'Giulio',
    myToken: 'qSdDhODv3pca',
    messages: [],
    test: false
};

const dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric', time: 'full' };
const timeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            action.messages.map(message => {
                message.date = new Date(message.timestamp).toLocaleDateString('en-DE', dateFormatOptions)
                    + ' ' + new Date(message.timestamp).toLocaleTimeString('en-DE', timeFormatOptions);
                message.isMine = message.author === state.myName;
                return message;
            });

            return {
                ...state,
                messages: action.messages
            }
        case WRITE_MESSAGE:
            action.message.date = new Date(parseInt(action.message.timestamp)).toLocaleDateString('en-DE', dateFormatOptions)
            + ' ' + new Date(parseInt(action.message.timestamp)).toLocaleTimeString('en-DE', timeFormatOptions);
            action.message.isMine = true;
            
            const messages = [...state.messages, action.message];
            
            return {
                ...state,
                messages: messages
            }
        default:
            return state
    }
}

export default Reducer