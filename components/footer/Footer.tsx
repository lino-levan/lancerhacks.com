import { useEffect, useState } from "react";

import styles from './Footer.module.css'

export function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.links}>
        <a className={styles.instagram} href="https://www.instagram.com/lancerhacks/"/>
        <a className={styles.github} href="https://github.com/sfhacks"/>
        <a className={styles.email} href="hello@lancerhacks.com"/>
        <a className={styles.twitter} href="https://www.twitter.com/SFHSLancerHacks"/>
      </div>
      <p className={styles.copyright}>© 2022 sfhacks. All Rights Reserved.</p>
    </section>
  )
}