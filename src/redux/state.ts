export type PostPropsType = {
    id: number
    message: string
    likesCount: number

}

export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}
export type PostsPropsType = {
    posts: Array<PostPropsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}


export type AllPropsType = {
    posts: Array<PostPropsType>
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newPostText: string

}
export type StatePropsType = {
    state: AllPropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type StoreType = {
    _state: AllPropsType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (callback: () => void) => void
    getState: () => AllPropsType
}

export const store: StoreType = {

    _state: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 3, message: "Yo!", likesCount: 15},
            {id: 4, message: "Yo!", likesCount: 15},
        ],
        newPostText: "",
        dialogs: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Kris"},
            {id: 3, name: "Bob"},
            {id: 4, name: "Tom"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 1, message: "How are you?"},
            {id: 1, message: "Yo!"},
            {id: 1, message: "Yo!"},
        ],
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        const newPost: PostPropsType = {
            id: new Date().getTime(),
            message: this._state.newPostText,
            likesCount: 0
        }
        this._state.posts.push(newPost)
        this._state.newPostText = ""
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {

        this._state.newPostText = newText
        this._callSubscriber()
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}
// window.store = store





