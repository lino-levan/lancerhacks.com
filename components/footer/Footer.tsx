import { useEffect, useState } from "react";

import styles from './Footer.module.css'

export function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.links}>
        <a className={styles.instagram} />
        <a className={styles.github} />
        <a className={styles.email} />
        <a className={styles.twitter} />
      </div>
      <p className={styles.copyright}>© 2022 sfhacks. All Rights Reserved.</p>
    </section>
  )
}