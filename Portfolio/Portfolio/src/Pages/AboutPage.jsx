import React from 'react';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>I am a full-stack developer with a passion for creating beautiful and functional web applications.</p>
    </div>
  )
}

export default AboutPage
