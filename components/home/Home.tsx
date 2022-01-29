import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { pageSelector } from '../../redux/slices/pageSlice'
import styles from './Home.module.css'

export function Home() {
  const { scroll } = useAppSelector(pageSelector)
  const [ height, setHeight ] = useState<number>(200)

  useEffect(()=>{
    setHeight(window.innerHeight/4)
  }, [])

  return (
    <section className={styles.container} id="home">
      <div className={styles.background}>
        <div className={styles.inner_container} style={{opacity:1-(scroll/height), display: scroll>height?'none':'flex'}}>
          <img src="/logo_white.png" alt="lancerhacks logo" height={400} width={400} className={styles.logo}/>
          <h1 className={styles.name}>Lancerhacks V</h1>
          <a className={styles.sign_up} href="https://forms.gle/Mw89pSjc3k9qmxMQ8">Sign Up</a>
        </div>
      </div>
    </section>
  )
}