import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <header>
        <h1>
          Welcome to the Starwars Proxy API!
        </h1>
      </header>
      <main>
        This are not the endpoints you are looking for (jk yes they are)

        <section>
          <h3>GET characters</h3>
          returns json of all characters
          <h3>GET characters?page={'{number}'}&perPage={'{number}'}</h3>
        </section>
      </main>
    </div>
  )
}
