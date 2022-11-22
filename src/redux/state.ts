export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileMessagesType = {
    newPostText: string
    posts: Array<PostType>

}

 type DialogsPageType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
export type DialogsType={
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: ActionTypes) => void
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfileMessagesType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ProfileType = {
    newPostText: string
    posts: Array<PostType>
    dispatch: (action: ActionTypes) => void
}

export type MainStateType = {
    store: StoreType
}


export type StoreType = {
    _state: RootStateType
    _render: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendNewMessageTextAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const updateNewMessageTextAC = (newTextBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newTextBody: newTextBody
    } as const
}
export const sendNewMessageTextAC = () => {
    return {
        type: 'SEND-MESSAGE-TEXT',
    } as const
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 25},
                {id: 3, message: "Yo!", likesCount: 15},
                {id: 4, message: "Yo!", likesCount: 15},
            ]
        },
        dialogsPage: {
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
            newMessageText: ""
        },
        sidebar: {}
    },

    _render() {
        console.log('hey')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._render = observer
    },

    // addPost() {
    //     const newPost: PostType = {
    //         id: new Date().getTime(),
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ""
    //     this._render()
    // },
    //
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._render()
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._render()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._render()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newTextBody
            this._render()
        } else if(action.type==='SEND-MESSAGE-TEXT'){
            const newMessage:MessageType={
                id:new Date().getTime(),
                message:this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText=""
            this._render()
        }
    }
}















