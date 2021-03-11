import styles from '../styles/Header.module.css'

function Header() {
  

  return (
    <header className={styles.header}>
      <h1><a href='/characters'>Star Wars Search</a></h1>
    </header>
  )
}

export default Header
