import styles from './Team.module.css'

export function Team() {
  
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>The Team</h1>
      <p>Coming Soon!</p>
      <p className={styles.description}>
      <b>LancerHacks</b> is organized by sfhacks, the <a href="https://sfhs.com">SFHS</a> Programming Club, run by a team of enthusiastic, motivated, and dedicated students.
      </p>
    </section>
  )
}