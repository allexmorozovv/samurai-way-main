import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFields} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";


export const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} key={p.id} message={p.message}
                                                               likesCount={p.likesCount}/>)

    const addPost = (values: AddNewPostFormFormType) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostReduxForm onSubmit={addPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
});

type AddNewPostFormFormType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: InjectedFormProps<AddNewPostFormFormType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPostText"} placeholder={"Add your post"}
                   validate={[requiredFields, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const AddNewPostReduxForm = reduxForm<AddNewPostFormFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)