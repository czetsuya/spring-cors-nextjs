import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";

const Home = () => {

  const [books, setBooks] = React.useState()

  const getBooks = async () => {
    const resp = await fetch('/api/books')
    const result = await resp.json()
    setBooks(result.data)
    console.log(result.data)
  }

  return (
      <div className={styles.container}>
        <Head>
          <title>Spring CORS - Czetsuya Tech</title>
          <meta name="description" content="Spring CORS by Czetsuya Tech"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Spring CORS by Czetsuya Tech
          </h1>

          <div>
            <h2>Actions</h2>
            <div>
              <button onClick={getBooks}>Get Books</button>
            </div>
          </div>

          <div>
            <h2>Response</h2>
            {books &&
            Object.keys(books).map((keyName, i) => (
                <li key={i}>
                  <span>{keyName}={books[keyName]}</span>
                </li>
            ))
            }
          </div>
        </main>

        <footer className={styles.footer}>

        </footer>
      </div>
  )
}

export default Home