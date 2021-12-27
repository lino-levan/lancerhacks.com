import Image from 'next/image'
import { useAppSelector } from '../../redux/hooks'
import { pageSelector } from '../../redux/slices/pageSlice'
import styles from './Home.module.css'

export function Home() {
  const { scroll } = useAppSelector(pageSelector)

  // TODO: Figure out how to shrink the lancerhacks text if screen size changes
  return (
    <section className={styles.container} id="home">
      <div className={styles.background}>
        <div className={styles.inner_container} style={{opacity:1-(scroll/200), display: scroll>200?'none':'flex'}}>
          <Image src="/logo_white.png" alt="lancerhacks logo" height={400} width={400}/>
          <h1 className={styles.name}>Lancerhacks V</h1>
          <button className={styles.sign_up}>Sign Up</button>
        </div>
      </div>
    </section>
  )
}