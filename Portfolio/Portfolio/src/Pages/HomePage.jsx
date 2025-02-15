import React from 'react';
import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.intro}>Hi, I'm Your Name, a passionate web developer ready to create amazing websites.</p>
      
    </div>
  )
}

export default HomePage
