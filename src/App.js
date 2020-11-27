import React, { useEffect, useState } from 'react';
import './App.css';
import { IconButton, FormControl, Input, Card } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import db from './firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const date = new Date();

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  useEffect(() => {
    db
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, chat: doc.data() })))
      })
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100' alt='messenger' style={{ margin: '1em' }} />
      <h1>Let's Message 💌</h1>
      {username ? <h2>Welcome {username}</h2> : null}
      <Card className='app_card' style={{ borderRadius: '45px', marginBottom: '0.75em' }}>
        <form>
          <FormControl className='app_formControl'>
            <Input className='app_input' placeholder='Enter a message...' value={input} onChange={e => setInput(e.target.value)} />
            <IconButton className={!input ? 'app_iconButton_disabled' : 'app_iconButton'} disabled={!input && !username} variant="contained" color="primary" type='submit' onClick={sendMessage}> <SendIcon /> </IconButton>
          </FormControl>
        </form>
      </Card>

      <FlipMove>
        {username ?
          messages.map(({ id, chat }) => (
            <Message key={id} chat={chat} username={username} /> //use key to render only the ones that is added
          ))
          : null
        }
      </FlipMove>

    </div>
  );
}

export default App;
