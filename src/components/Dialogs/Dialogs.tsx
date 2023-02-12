import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, requiredFields} from "../../utils/validators/validators";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessage(values.newMessageText)
        values.newMessageText = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type AddMessageFormType = {
    newMessageText: string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[requiredFields, maxLength100]}
                   name={"newMessageText"} placeholder={"Enter your message"}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)