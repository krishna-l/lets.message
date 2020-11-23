import React from 'react'

function Message(props) {
    return (
        <div>
            <h2>{props.chat.username}: {props.chat.text}</h2>
        </div>
    )
}

export default Message;
