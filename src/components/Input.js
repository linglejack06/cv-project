import { useState } from 'react'

export default function Input({handleChange, value, name}) {
  const [isEditing, setIsEditing] = useState(false);
  function handleDoubleClick() {
    setIsEditing(true);
  }
  return (
    <div>
      {
        isEditing ? (
          <form onSubmit={(e) => {
            setIsEditing(false);
            e.preventDefault();
          }}>
            <input type='text' value={value} onChange={handleChange} name={name} autoFocus />
            <button type='submit'>Finish</button>
          </form>
        ) : (
          <span onDoubleClick={handleDoubleClick}>{value}</span>
        )
      }
    </div>
  )
}