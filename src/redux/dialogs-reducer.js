const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    dialogs: [
        { id: "1", name: "Kamil", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "2", name: "Artem", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "3", name: "Sasha", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "4", name: "Olya", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "4", name: "Olya", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
    ],
    messages: [
        { id: "1", message: "Hi" },
        { id: "1", message: "Hi" },
        { id: "2", message: "Hello!" },
        { id: "3", message: "How are you?" },
        { id: "4", message: "Im fine! ;)" },
        { id: "4", message: "Im fine! ;)///" },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
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