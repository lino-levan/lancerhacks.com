import styles from './Sponsors.module.css'

export function Sponsors() {
  
  let sponsors = [
    ['wolfram', ''],
    ['leading_learners','https://linktr.ee/leadinglearners'],
    ['aops',''],
    ['veritas','https://drive.google.com/drive/u/0/folders/1teSDbIvwUmXvWEW5XZFquP4iP2MWKsvt'],
    ['sticker_giant', 'https://www.stickergiant.com/event-coupons?utm_source=website&utm_medium=event']
  ]

  return (
    <section className={styles.container} id="sponsors">
      <h1 className={styles.header}>Sponsors</h1>
      {
        sponsors.map((sponsor)=> <a key={sponsor[0]} href={sponsor[1]}><img className={styles.sponsor} alt={sponsor[0]} src={`/sponsors/${sponsor[0]}.png`}/></a>)
      }
    </section>
  )
}