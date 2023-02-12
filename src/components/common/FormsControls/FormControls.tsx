import React, {HTMLInputTypeAttribute} from "react";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import styles from './FormControl.module.css'

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
}


const FormControl = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div><input {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}



