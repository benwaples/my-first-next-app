import styles from '../styles/Header.module.css'

function Header() {
  

  return (
    <header className={styles.header}>
      <h1>Star Wars Search</h1>
      <a href='/characters'>HOME</a>
    </header>
  )
}

export default Header
