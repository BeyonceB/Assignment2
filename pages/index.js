import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Text from '@/components/text'
import record from '../data/artists.json'
import ImageBox from '@/components/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [padding, setPadding] = useState('0px');

  useEffect(() => {
    setPadding('0px');
  }, []);

  const handleClick = () => {
    setPadding('30px');
  }
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Beyonce" content="Art Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Text txt='Art Gallery' size='64px' weight='700' align='center'/>
        <div className={styles.artists}>
          {
            record.map( (rec, index) => {
              return(
                <div key={index}>
                  <div onClick={handleClick} style={{ padding: padding }}>
                    <ImageBox src={rec.image} alt={rec.name} />
                  </div>
                  <div className={styles.text}>
                    <Text txt={rec.name} size='25px' weight='600' font='Source Sans Pro' />
                    <div className={styles.link}>
                      <Link href="/about"><Text txt='Learn More' size='15px' weight='500' font='Source Sans Pro' /></Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
