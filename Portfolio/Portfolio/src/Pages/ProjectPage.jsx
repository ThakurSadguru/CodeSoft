import React from 'react'
import styles from './project.module.css'

const ProjectPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectCard}>
          <img src="" alt="img" className={styles.projectImage}/>
          <h3 className={styles.projectTitle}>Project 1</h3>
          <p className={styles.projectDescription}>Description of Project 1.</p>
        </div>

        <div className={styles.projectCard}>
          <img src="" alt="img" className={styles.projectImage}/>
          <h3 className={styles.projectTitle}>Project 2</h3>
          <p className={styles.projectDescription}>Description of Project 2.</p>
        </div>

      </div>
    </div>
  )
}

export default ProjectPage
