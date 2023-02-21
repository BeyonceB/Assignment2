import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import Text from '@/components/text'
import record from '../data/artists.json'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    const [color, setColor] = useState('white');
    
    useEffect(() => {
        setColor('white');
    }, []);

    const handleClick = () => {
        setColor('#a5c8bb');
    }

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="about the artists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.home}>
            <Link href="/"><Text txt='Home' size='25px' weight='500' /></Link>
        </div>
        <Text txt='Meet the Artists' size='64px' weight='700' align='center'/>
        <div>
          {
            record.map( (rec, index) => {
              return(
                <div key={index}>
                  <div className={styles.box} onClick={handleClick} style={{ backgroundColor: color }}>

                    <div className={styles.text}>
                        <div className={styles.row}>
                            <Text txt={rec.name} size='25px' weight='600' font='Source Sans Pro' />
                            <Text txt="-" size='20px' weight='600' font='Source Sans Pro' />
                            <Link href={rec.wikipedia}><Text txt='Wikipedia' size='19px' weight='600' font='Source Sans Pro' /></Link>
                        </div>
                        <div className={styles.row}>
                            <Text txt={rec.years} size='19px' weight='500' font='Source Sans Pro' />
                            <Text txt="," size='19px' weight='500' font='Source Sans Pro' />
                            <Text txt={rec.nationality} size='19px' weight='500' font='Source Sans Pro' />
                        </div>
                        <div className={styles.row}>
                            <Text txt={rec.paintings} size='18px' weight='600' font='Source Sans Pro' />
                            <Text txt="paintings" size='18px' weight='600' font='Source Sans Pro' />
                        </div>
                        <Text txt={rec.bio} size='15px' weight='500' font='Source Sans Pro' />
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
