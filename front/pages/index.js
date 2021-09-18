import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ countries}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>EigenWaifu</title>
        <meta name="description" content="EigenWaifu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          EigenWaifu
        </h1>

        <p className={styles.description}>
          The learning platform with anime incentives.
        </p>

        {/* <div className={styles.grid}>
          {countries.map((country) => (
            <div key={country.code} className={styles.card}>
              <h3>{country.name}</h3>
              <p>
                {country.code} - {country.emoji}
              </p>
            </div>
          ))}
        </div> */}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  })

  return {
    props: {
      countries: data.countries.slice(0, 4)
    }
  }
}
