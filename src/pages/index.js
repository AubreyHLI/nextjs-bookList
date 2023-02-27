import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    console.log('useEffect ran on Home page');
  }, [])

  return (
  <>
    <Head>
      <title>Nextjs books app | Home</title>
    </Head>
    <div>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>This is the home page</p>
        <p  className={styles.text}>This is the home page</p>
        <p  className={styles.text}>This is the home page</p>
        <p  className={styles.text}>This is the home page</p>
        <div className={styles.rowflex}>
          <a href='/books'  className={styles.btn}>1. To books list via normal 'a'</a>
          <Link href='/books'  className={styles.btn}>2. To books list via next.js 'Link'</Link>
        </div>
      </div>
    </div>
  </>
  )
}
