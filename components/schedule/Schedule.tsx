import styles from './Schedule.module.css'

export function Schedule() {
  
  return (
    <section className={styles.container} id="schedule">
      <h1 className={styles.header}>Schedule</h1>
      <h1 className={styles.date}>March 5, 2022</h1>
      <h1 className={styles.time}>7:30 AM - 10:00 PM</h1>
      <p className={styles.coming_soon}>Coming soon!</p>
    </section>
  )
}