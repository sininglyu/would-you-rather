import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/';

function App() {

  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
      setChoice1(response.data.choice1);
      setChoice2(response.data.choice2);
    });
  }, [])

  // const onButton1Click = () => {
  //   console.log('You chose option 1');
  // }

  // const onButton2Click = () => {
  //   console.log('You chose option 2');
  // }

  return (
    <div className='App'>
      <Button1 choice={choice1} />
      <Button2 choice={choice2} />
    </div>
  );

}

// Button components
// Is separating into 2 components a good idea?
function Button1(props) {
  return (
    <button className='Button'>{props.choice}</button>
  )
}

function Button2(props) {
  return (
    <button className='Button'>{props.choice}</button>
  )
}

export default App;
