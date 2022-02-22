import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Header } from '../components/header/Header'
import { Home as Logo } from '../components/home/Home'
import { About } from '../components/about/About'
import { Schedule } from '../components/schedule/Schedule'
import { Footer } from '../components/footer/Footer'
import { FAQ } from '../components/faq/FAQ'
import { Sponsors } from '../components/sponsors/Sponsors'
import { SFHS } from '../components/sfhs/SFHS'
import { Team } from '../components/team/Team'
import { Tagline } from '../components/tagline/Tagline'

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setScroll } from '../redux/slices/pageSlice'
import { Transition } from '../components/transition/Transition'


const Home: NextPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const onScroll = ()=>{
      dispatch(setScroll(window.scrollY))
    }

    window.addEventListener("scroll", onScroll, {passive: true})

    return () => window.removeEventListener("scroll", onScroll)
  }, [dispatch])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>LancerHacks V</title>
        <meta name="description" content="LancerHacks V is the fifth annual twelve-hour hackathon organized by sfhacks, the student-led programming club at Saint Francis High School." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Logo />
        <About />
        <Schedule />
        <Transition backgroundColor="rgb(250, 250, 250)" color="rgb(235, 235, 235)" flipped={true}/>
        <FAQ />
        <Tagline background="/backgrounds/sobrato1.jpg" tagline="/img/doodle.png"/>
        <Sponsors />
        <Transition backgroundColor="white" color="rgb(250, 250, 250)" flipped={true}/>
        <SFHS />
        <Transition backgroundColor="white" color="rgb(250, 250, 250)"/>
        <Team />
        <Transition backgroundColor="rgba(109, 122, 158, 0.8)" color="rgb(250, 250, 250)" flipped={true}/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
