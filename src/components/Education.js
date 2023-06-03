import { useState } from 'react'
import styles from './education.module.css';

export default function Education () {
  const [education, setEducation] = useState([{
    name: '',
    degreeType: '', 
    major: '',
    startDate: '', 
    endDate: ''
  }]);
  return (
    <div>
      <h2 className='title'>Education</h2>
      <div className={styles.edu_container}>
        {education.map((school) => (
          <div className={styles.school_container}>
            <h3 className={styles.school}>School: {school.name}</h3>
            <h3 className={styles.degree}>Degree Type: {school.degreeType}</h3>
            <h3 className={styles.major}>Major: {school.major}</h3>
            <h3 className={styles.date}>Date: {school.startDate}-{school.endDate}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}