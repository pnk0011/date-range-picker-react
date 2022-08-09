import React, { useState } from 'react';
import './App.css';
import DatePicker from './DatePicker';



export default function App() {

  const [form, formSet] = useState({
    end: 'end',
    start: 'start',
    destination: ''
  });
  const [open, openSet] = useState(false);
  const [startDate, startDateSet] = useState<Date | undefined>(undefined);
  const [endDate, endDateSet] = useState<Date | undefined>(undefined);

  function handleSubmit() {
    console.log(form);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    formSet({ ...form, [e.target.name]: e.target.value });
  }

  function handleCalenderClicks(e: React.MouseEvent<HTMLDivElement>, value: string) {
    let p = e.target as HTMLDivElement
    if (!(startDate && !endDate)) {
      startDateSet(new Date(value))
      formSet({ ...form, start: value as string, end: 'end' })
      endDateSet(undefined)
      resetDivs()
      p.style.color = 'green'
      p.style.backgroundColor = 'lightblue'
    }
    else if (new Date(value) >= startDate) {
      endDateSet(new Date(value))
      formSet({ ...form, end: value as string })
      p.style.color = 'red'
      p.style.backgroundColor = 'lightblue'
    }
    else {
      startDateSet(new Date(value))
      formSet({ ...form, start: value as string })
      resetDivs()
      p.style.color = 'green'
      p.style.backgroundColor = 'lightblue'
    }
  }
  
  function resetDivs() {
    let container = document.querySelectorAll('p')
    container.forEach((div) => {
      let box = div as HTMLParagraphElement;
      if ((box.style.color === 'red' || 'green')) {
        box.style.color = 'inherit';
        box.style.fontWeight = 'inherit';
        box.style.backgroundColor = 'inherit';
      }
    })
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
          {open && <DatePicker handleClick={handleCalenderClicks} />}
        </div>
        <div className='input'>
          <button onClick={handleSubmit} type='button'>Search</button>
        </div>
      </form>
    </div >
  )
}

