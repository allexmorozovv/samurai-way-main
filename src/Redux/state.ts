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

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
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

export type ActionTypes = AddPostActionType|UpdateNewPostTextActionType

export type AddPostActionType = ReturnType<typeof addPostAC>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostAC>


export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    }as const
}

export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
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
            ]
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
        }
    }
}















