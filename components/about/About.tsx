import { useEffect, useState } from 'react'
import styles from './About.module.css'

interface IDate {
  days: string;
  hours: string;
  minutes: string;
  seconds: string
}

const lancerhacksDate = new Date(2022, 2, 5)

export function About() {
  const [time, setTime] = useState<IDate>({days: "100", hours: "10", minutes: "05", seconds: "03"})

  useEffect(() => {
    const interval = setInterval(() => {
      let t: any = {}

      let difference = Math.round((lancerhacksDate.getTime() - new Date().getTime())/1000)

      t.days = Math.floor(difference / 86400);
      difference -= t.days * 86400;

      t.hours = Math.floor(difference / 3600) % 24;
      difference -= t.hours * 3600;

      t.minutes = Math.floor(difference / 60) % 60;
      difference -= t.minutes * 60;

      t.seconds = difference % 60

      for(let [key, value] of Object.entries(t)) {
        let val = value as number
        t[key] = (val < 10 ? "0" : "") + val.toString()
      }

      setTime(t)
    }, 500)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className={styles.container} id="about">
      <div className={styles.information}>
        <div>
          <h1 className={styles.header}>What is LancerHacks?</h1>
          <p className={styles.about}>
          <b>LancerHacks</b> V is the fifth annual twelve-hour hackathon organized by sfhacks, the student-led programming club at Saint Francis High School. In partnership with the school, LancerHacks will take place in person on <b>Saturday, March 5, 2022</b>, and will host approximately 200 students from local high schools.<br /><br />
    
          Drawing from the strength of our school’s mission to “educate hearts and minds to serve the world,” the theme of LancerHacks V is <b>“Doodle The Future.”</b> We encourage attendees to draw inspiration from the primary nature of scientific and technological development. Feel free to interpret the prompt however you want — get creative!<br /><br />
            
          Supplementing the main project-development element of the hackathon through a variety of challenges and events, LancerHacks will continue to emphasize collaboration among attendees, mentorship by peers and industry experts, attendance at speaker sessions and workshops, and expanding the traditional understanding of computer science and its various daily-life applications.<br /><br />
            
          We encourage interested students with <b>all levels of expertise</b> to attend the event to experience how the power of computer science can be leveraged in numerous fields and how this potential is enhanced when one applies a creative and personal touch. The underlying message of LancerHacks is that computer science is for everyone: it is not just for one type of person; it requires a variety of perspectives, an ability to think outside of the box, and a level of social awareness to identify communities that have the potential to improve in the field of computer science.
          </p>
        </div>
        <div>
          <div>
            <div className={styles.timer}>
              <p className={styles.timer_time}>{time.days}</p>
              <p className={styles.timer_time}>:</p>
              <p className={styles.timer_time}>{time.hours}</p>
              <p className={styles.timer_time}>:</p>
              <p className={styles.timer_time}>{time.minutes}</p>
              <p className={styles.timer_time}>:</p>
              <p className={styles.timer_time}>{time.seconds}</p>
              <p className={styles.timer_label}>Days</p>
              <p className={styles.timer_label}></p>
              <p className={styles.timer_label}>Hours</p>
              <p className={styles.timer_label}></p>
              <p className={styles.timer_label}>Mins</p>
              <p className={styles.timer_label}></p>
              <p className={styles.timer_label}>Secs</p>
            </div>
            <h1 className={styles.before}>
              Before Lancerhacks
            </h1>
          </div>
          <div className={styles.map_container}>
            <iframe title="Map to Saint Francis" className={styles.map} width="100%" height="100%" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.855732314151!2d-122.08853048421886!3d37.36959037983529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb12c54f0dc7d%3A0x1f75f9c2ea008396!2sSt.+Francis+High+School!5e0!3m2!1sen!2sus!4v1502246381985" allow="fullscreen"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}