import styles from './Tagline.module.css'

interface ITagline {
  background: string;
  tagline: string;
}

export function Tagline({background, tagline}: ITagline) {
  return (
    <section className={styles.container} style={{backgroundImage:`url("${background}")`}}>
      <h1 className={styles.header}>{tagline}</h1>
    </section>
  )
}