import styles from './FAQ.module.css'

export function FAQ() {
  
  return (
    <section className={styles.container} id="faq">
      <h1 className={styles.header}>FAQ</h1>
      <div className={styles.question_container}>
        <div className={styles.question}>
          <h3 className={styles.question_header}>What is a hackathon?</h3>
          <p className={styles.answer}>A hackathon is an event at which programmers of all skill levels can come together and create. They are perfect opportunities to experiment and learn.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Do I need any prior experience in computer science?</h3>
          <p className={styles.answer}>Nope! Hackathons are a great place to learn and gain experience; we have plenty of workshops and mentors.</p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.question_header}>Who can attend?</h3>
          <p className={styles.answer}>Anyone currently in high school or 8th grade.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Will there be prizes?</h3>
          <p className={styles.answer}>Yes, there will be prizes!</p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.question_header}>How big are the teams?</h3>
          <p className={styles.answer}>Up to four people.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Do I need a team?</h3>
          <p className={styles.answer}>No, but we strongly encourage collaboration, so if you don’t have a team, let us know on the RSVP form and we’ll help you find one.</p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.question_header}>Is it free?</h3>
          <p className={styles.answer}>Yes! Admission, swag, workshops -- everything is free.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Do I have to stay for the whole event?</h3>
          <p className={styles.answer}>No. We understand that everyone has busy schedules and may not be able to stay for the entire event. Contact us to make arrangements.</p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.question_header}>When/where is it?</h3>
          <p className={styles.answer}>Please check the schedule for the most up-to-date information, but for now it is taking place on Saturday, March 5, 2022, 7:30 am - 10:00 pm at the Saint Francis Campus. All attendees will be sent an invitation to join.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>More questions?</h3>
          <p className={styles.answer}>Email us at <a href="mailto:hello@lancerhacks.com">hello@lancerhacks.com</a> with any questions you have.</p>
        </div>
      </div>
    </section>
  )
}