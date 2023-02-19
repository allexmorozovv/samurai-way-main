import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.css"

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
      setEditMode(true)
    }
    const deactivateEditMode = () => {
      setEditMode(false)
        props.updateUserStatus(status)
    }
 const   onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
       // setState({status: e.currentTarget.value})
     setStatus(e.currentTarget.value)
    }
    
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '----------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} type="text" value={status}
                    />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks