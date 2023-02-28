import {addPostAC, ProfilePageType, profileReducer} from "./profileReducer";

test('post should be added',()=>{
    let action=addPostAC('yo-yo')
    let startState: ProfilePageType = {

        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 3, message: "Yo!", likesCount: 15},
            {id: 4, message: "Yo!", likesCount: 15},
        ],
        profile: null,
        status: ''
    }

    let endState=profileReducer(startState,action)
    expect(endState.posts.length).toBe(5)
})