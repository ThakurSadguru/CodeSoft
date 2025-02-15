import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <a className={styles.navlink} href="/">Home</a>
        <a className={styles.navlink} href="/about">About</a>
        <a className={styles.navlink} href="/projects">Projects</a>
        <a className={styles.navlink} href="/contact">Contact</a>

      </nav>
      
    </div>
  )
}

export default Header
