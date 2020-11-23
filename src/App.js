import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ username: 'Pikki', text: 'Hi' }, { username: 'Kisshi', text: 'Wassup' }, { username: 'Kisshi', text: 'Love you' }]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Let's Message 💌</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send</Button>
      </form>

      {
        messages.map(message => (
          <Message chat={message} />
        ))
      }
    </div>
  );
}

export default App;
