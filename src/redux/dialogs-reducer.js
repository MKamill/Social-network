const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    dialogs: [
        { id: "1", name: "Kamil", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "2", name: "Artem", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "3", name: "Sasha", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "4", name: "Olya", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
        { id: "5", name: "Olya", imgURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
    ],
    messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Hi" },
        { id: "3", message: "Hello!" },
        { id: "4", message: "How are you?" },
        { id: "5", message: "Im fine! ;)" },
        { id: "6", message: "Im fine! ;)///" },
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {
                id: state.messages.length + 1,
                message: body,
            };
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newMessage]
            };
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