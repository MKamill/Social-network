const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let newMessage = {
                id: state.messages.length + 1,
                message: body,
            }
            state.messages.push(newMessage)
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: "SEND_MESSAGE"
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body: body,
    }
}

export default dialogsReducer