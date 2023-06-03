import { useState } from 'react';
import Input from './Input';
import styles from './general.module.css';

export default function GeneralInfo () {
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
      <h2 className='title'>General Information</h2>
      <Input handleChange={handleChange} value={name} name='name'/>
      <Input handleChange={handleChange} value={email} name='email' />
      <Input handleChange={handleChange} value={number} name='number' />
    </div>
  )
}