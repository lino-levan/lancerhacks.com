import styles from './Sponsors.module.css'

export function Sponsors() {
  
  let sponsors = [
    'wolfram',
    'leading_learners',
    'aops',
    'veritas'
  ]

  return (
    <section className={styles.container} id="sponsors">
      <h1 className={styles.header}>Sponsors</h1>
      {
        sponsors.map((sponsor)=> <img className={styles.sponsor} key={sponsor} alt={sponsor} src={`/sponsors/${sponsor}.png`}/>)
      }
    </section>
  )
}