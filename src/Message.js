import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ chat, username }, ref) => { //forward ref is nothing but a way to manage the ref using the key passed from the App.js.

    const isUser = username === chat.username;

    return (
        <>
            <div ref={ref} className={`message_card ${isUser && 'message_user'}`}>
                <div className='message_details'>{!isUser && `${chat.username}`}</div>
                <Card className={isUser ? 'message_user_card' : 'message_guest_card'} style={{ borderRadius: '45px' }}>
                    <CardContent>
                        <Typography color="white" varient="h5" component='h2'>
                            {chat.message}
                        </Typography>
                    </CardContent>
                </Card>
                <div className='message_details'>{chat.timestamp}</div>
            </div>
        </>
    )
})

export default Message;
