import { useState } from 'react';
import Input from './Input';

export default function GeneralForm () {
  const [name, setName] = useState('Joe Burrow');
  const [email, setEmail] = useState('jburrow@bengals.com');
  const [number, setNumber] = useState('123-456-7890');
  function handleChange(e) {
    switch(e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  }
  return (
    <div>
      <Input handleChange={handleChange} value={name} name='name'/>
      <Input handleChange={handleChange} value={email} name='email' />
      <Input handleChange={handleChange} value={number} name='number' />
    </div>
  )
  // return (
  //   <form>
  //     <label htmlFor='name'>Name:</label>
  //     <input type='text' value={name} id='name' placeholder='Joe Burrow' />
  //     <label htmlFor='email'>Email Address:</label>
  //     <input type='email' value={email} id='email' placeholder='jburrow@bengals.com' />
  //     <label htmlFor='number'>Phone Number:</label>
  //     <input type='text' value={phoneNumber} id='number' placeholder='123-456-7890' />
  //   </form>
  // )
}