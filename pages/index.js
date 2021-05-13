import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Image from 'next/image'

const API_URL = 'http://192.168.1.9:8080'

const Home = () => {

  const [books, setBooks] = React.useState()

  const getBooksViaApi = async () => {
    const resp = await fetch('/api/books')
    const result = await resp.json()
    setBooks(result.data)
    console.log(result.data)
  }

  const getBooks = async () => {
    const resp = await fetch(`${API_URL}/books`)
    const result = await resp.json()
    setBooks(result)
    console.log(result)
  }

  const getBooksViaClass = async () => {
    const resp = await fetch(`${API_URL}/annotated-class/books`)
    const result = await resp.json()
    setBooks(result)
    console.log(result)
  }

  const getBooksViaMethod = async () => {
    const resp = await fetch(`${API_URL}/annotated-method/books`)
    const result = await resp.json()
    setBooks(result)
    console.log(result)
  }

  const getBooksViaMethodNoAnnotation = async () => {
    const resp = await fetch(`${API_URL}/annotated-method/books/restricted`)
    const result = await resp.json()
    setBooks(result)
    console.log(result)
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
            Spring CORS
          </h1>

          <div className={styles.czetsuyatechLogo}><Image src="/logo.svg" alt="Czetsuya Tech Logo" width={250}
                                                          height={75}/></div>

          <p className={styles.description}>
            Configure CORS in a Spring Boot REST application to make it accessible from a frontend application such as
            React or Angular.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Actions</h2>
              <div className={styles.actions}>
                <button onClick={getBooks}>Get Books</button>
                <button onClick={getBooksViaClass}>Get Books via Class Annotation</button>
                <button onClick={getBooksViaMethod}>Get Books via Method Annotation</button>
                <button onClick={getBooksViaMethodNoAnnotation}>Get Books via Method no Annotation</button>
                <button onClick={getBooksViaApi}>Get Books via API</button>
              </div>
            </div>

            <div className={styles.card}>
              <h2>Response</h2>
              {books &&
              Object.keys(books).map((keyName, i) => (
                  <li key={i}>
                    <span>{keyName}={books[keyName]}</span>
                  </li>
              ))
              }
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <p>
                If you would like to support these tutorials I have a Patreon account where you could
                contribute. It is a service that allows supporters to contribute as little as a dollar a month.
                I would be most grateful for any support. Also, if you have suggestions for future topics I
                would love to hear your feedback.
              </p>
              <p>
                <a target="_blank" href="https://www.patreon.com/czetsuya">
                  <Image src="/patreon_support.png" alt="Support Me" width={250} height={114}/>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default Home