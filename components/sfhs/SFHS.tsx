import { imageConfigDefault } from 'next/dist/server/image-config'
import styles from './SFHS.module.css'

export function SFHS() {
  
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <div>
          <h1 className={styles.header}>About Saint Francis High School</h1>
          <p className={styles.description}>
          Founded in 1955 by the Brothers of Holy Cross at the invitation of the Archbishop of San Francisco, Saint Francis High School is a leading coeducational, diverse, Catholic, college preparatory school focused on educating the whole person. With a proven reputation for excellence in academics, athletics, activities and the arts, over 100 faculty members prepare approximately 1700 Saint Francis students for the rigors of college and the challenges of global citizenship in the enduring Holy Cross tradition. Graduating students attend the finest colleges and universities in the nation with 97% of the 2017 graduates admitted to a four-year university and 100% attending college. Saint Francis High School is located in Mountain View, Calif., approximately 35 miles south of San Francisco. For more information, visit <a href="http://www.sfhs.com">http://www.sfhs.com</a>.<br /><br />
          <i>Saint Francis High School, sponsored by the Brothers of Holy Cross, admits students of any race, color and national or ethnic origin. The school does not discriminate based on disability if the student is otherwise qualified and can, with reasonable accommodations, meet the graduation requirements of the school.</i>
          </p>
        </div>
        <div>
          <img src="/sfhs.png" alt="saint francis logo" className={styles.logo} width={800} height={390}/>
        </div>
      </div>
    </section>
  )
}