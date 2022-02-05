import styles from './Tagline.module.css'

interface ITagline {
  background: string;
  tagline: string;
}

export function Tagline({background, tagline}: ITagline) {
  return (
    <section className={styles.container} style={{backgroundImage:`url("${background}")`}}>
      <div className={styles.tagline} style={{backgroundImage:`url("${tagline}")`}}></div>
    </section>
  )
}