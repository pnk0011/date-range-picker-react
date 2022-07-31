import React, { useState } from 'react';
import './App.css';
import DatePicker from './DatePicker';



export default function App() {

  const [form, formSet] = useState({
    destination: '',
    start: 'start',
    end: 'end'
  });
  const [open, openSet] = useState(false);

  function handleSubmit() {
    console.log(form);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    formSet({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div className='container'>
      <div className='spacer'>
        <h1>Choose Your Adventure</h1>
      </div>
      <form className='form' >
        <div className='input'>
          <input
            onChange={(e) => handleChange(e)}
            value={form.destination}
            name="destination"
          />
        </div>
        <div className='input'>
          <div onClick={() => openSet(!open)}>{form.start}</div>
          <div onClick={() => openSet(!open)}>{form.end}</div>
         {open && <DatePicker />}
        </div>
        <div className='input'>
          <button onClick={handleSubmit} type='button'>Search</button>
        </div>
      </form>
    </div >
  )
}

