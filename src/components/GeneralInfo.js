export default function GeneralForm ({ name, email, phoneNumber}) {
  return (
    <form>
      <label htmlFor='name'>Name:</label>
      <input type='text' value={name} id='name' placeholder='Joe Burrow' />
      <label htmlFor='email'>Email Address:</label>
      <input type='email' value={email} id='email' placeholder='jburrow@bengals.com' />
      <label htmlFor='number'>Phone Number:</label>
      <input type='text' value={phoneNumber} id='number' placeholder='123-456-7890' />
    </form>
  )
}