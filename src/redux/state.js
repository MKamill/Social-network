const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: "My name is Kamil", likesCount: "234" },
                { id: "2", message: "My name is Artem", likesCount: "24" },
                { id: "3", message: "Im so tired", likesCount: "2422212" },
                { id: "3", message: "Im so tired", likesCount: "2" },
            ],
            newPostText: "-test-",
        },
        messagesPage: {
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
    },
    _callSubscriber() {
        console.log('*')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            let newMessage = {
                id: this._state.messagesPage.messages.length + 1,
                message: body,
            }
            this._state.messagesPage.messages.push(newMessage)
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD_POST"
    }
}

export const updateNewPostTextActionCreator = (data) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: data,
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

export default store
