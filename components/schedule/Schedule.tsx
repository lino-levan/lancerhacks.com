import styles from './Schedule.module.css'

export function Schedule() {

  let startTime = {
    hour: 7,
    minutes: 30
  }

  let endTime = {
    hour: 22,
    minutes: 15
  }

  let events = [
    {
      time: {
        hour: 7,
        minutes: 30
      },
      length: 2,
      title: "Check In",
      type: "hackathon"
    },
    {
      time: {
        hour: 8,
        minutes: 0
      },
      length: 3,
      title: "Opening Ceremony",
      type: "hackathon"
    },
    {
      time: {
        hour: 8,
        minutes: 45
      },
      length: 13,
      title: "Hacking",
      type: "hackathon"
    },
    {
      time: {
        hour: 12,
        minutes: 0
      },
      length: 3,
      title: "Lunch",
      type: "hackathon"
    },
    {
      time: {
        hour: 12,
        minutes: 45
      },
      length: 19,
      title: "Hacking",
      type: "hackathon"
    },
    {
      time: {
        hour: 17,
        minutes: 30
      },
      length: 3,
      title: "Dinner",
      type: "hackathon"
    },
    {
      time: {
        hour: 18,
        minutes: 15
      },
      length: 5,
      title: "Final Code Rush",
      type: "hackathon"
    },
    {
      time: {
        hour: 19,
        minutes: 30
      },
      length: 1,
      title: "Code Freeze",
      type: "hackathon"
    },
    {
      time: {
        hour: 19,
        minutes: 45
      },
      length: 4,
      title: "Presenting",
      type: "hackathon"
    },
    {
      time: {
        hour: 20,
        minutes: 45
      },
      length: 4,
      title: "Judging",
      type: "hackathon"
    },
    {
      time: {
        hour: 21,
        minutes: 45
      },
      length: 2,
      title: "Closing Ceremony",
      type: "hackathon"
    },
    {
      time: {
        hour: 8,
        minutes: 30
      },
      length: 3,
      title: "Brainstorming Workshop",
      type: "workshop"
    },
    {
      time: {
        hour: 9,
        minutes: 15
      },
      length: 3,
      title: "IOS Workshop",
      type: "workshop"
    },
    {
      time: {
        hour: 10,
        minutes: 0
      },
      length: 5,
      title: "Four Square",
      type: "activity"
    },
    {
      time: {
        hour: 11,
        minutes: 15
      },
      length: 3,
      title: "Speaker: Gary Brown (Intel)",
      type: "speaker"
    },
    {
      time: {
        hour: 12,
        minutes: 0
      },
      length: 1,
      title: "Speaker: Eby Ramakrishnan (Facebook)",
      type: "speaker"
    },
    {
      time: {
        hour: 14,
        minutes: 0
      },
      length: 5,
      title: "Dodgeball",
      type: "activity"
    },
    {
      time: {
        hour: 15,
        minutes: 30
      },
      length: 5,
      title: "Panel Discussion",
      type: "speaker"
    },
    {
      time: {
        hour: 20,
        minutes: 45
      },
      length: 4,
      title: "Jeopardy",
      type: "activity"
    },
    {
      time: {
        hour: 8,
        minutes: 15
      },
      length: 2,
      title: "Speaker: Prasanti (Raspberry Pi)",
      type: "speaker"
    },
    {
      time: {
        hour: 9,
        minutes: 15
      },
      length: 3,
      title: "Web Dev Workshop",
      type: "workshop"
    },
    {
      time: {
        hour: 10,
        minutes: 30
      },
      length: 3,
      title: "Sponsor Workshop",
      type: "workshop"
    },
    {
      time: {
        hour: 13,
        minutes: 30
      },
      length: 9,
      title: "Escape Room",
      type: "activity"
    }
  ]

  let schedule = []

  while(true) {
    if(startTime.minutes === 60) {
      startTime.minutes = 0
      startTime.hour++
    }

    if(startTime.hour === endTime.hour && startTime.minutes === endTime.minutes) {
      break
    }

    let renderedEvents = []

    for(let event of events) {
      if(startTime.hour === event.time.hour && startTime.minutes === event.time.minutes) {
        renderedEvents.push(<td className={styles[event.type]} key={event.title} rowSpan={event.length}>{event.title}</td>)
      }
    }

    schedule.push(
      <tr>
        <td className={styles.times}>{`${startTime.hour}:${startTime.minutes < 10?("0"+startTime.minutes):startTime.minutes}`}</td>
        {
          renderedEvents
        }
      </tr>
    )

    startTime.minutes+=15
  }
  
  return (
    <section className={styles.container} id="schedule">
      <h1 className={styles.header}>Schedule</h1>
      <h1 className={styles.date}>March 5, 2022</h1>
      <h1 className={styles.time}>7:30 AM - 10:00 PM</h1>
      <div className={styles.scrollable}>
        <table style={{border: "1px solid black"}}>
          <tr>
            <td className={styles.title}>Time</td>
            <td className={styles.title}>Main Events</td>
            <td className={styles.title}>Sub Event A</td>
            <td className={styles.title}>Sub Event B</td>
          </tr>
          {
            schedule
          }
        </table>
      </div>
    </section>
  )
}