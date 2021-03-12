import styles from '../styles/Header.module.css'

function Header(): JSX.Element {
  

  return (
    <header className={styles.header}>
      <h1>Star Wars Search</h1>
      <a href='/characters'>HOME</a>
    </header>
  )
}

export default Header
