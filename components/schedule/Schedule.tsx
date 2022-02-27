import styles from './Schedule.module.css'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import { lancerhacksDate } from '../about/About';

let eventGuid = 0

let dayStr = lancerhacksDate.toISOString().replace(/T.*$/, '')

const EVENTS = [
  {
    id: createEventId(),
    title: 'Check In',
    start: dayStr + 'T07:30:00',
    end: dayStr + 'T08:00:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Opening Ceremony',
    start: dayStr + 'T08:00:00',
    end: dayStr + 'T08:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Hacking',
    start: dayStr + 'T08:30:00',
    end: dayStr + 'T12:00:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Lunch',
    start: dayStr + 'T12:00:00',
    end: dayStr + 'T12:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Hacking',
    start: dayStr + 'T12:30:00',
    end: dayStr + 'T17:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Dinner',
    start: dayStr + 'T17:30:00',
    end: dayStr + 'T18:00:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Final Code Rush',
    start: dayStr + 'T18:00:00',
    end: dayStr + 'T19:15:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Code Freeze',
    start: dayStr + 'T19:15:00',
    end: dayStr + 'T19:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Presenting',
    start: dayStr + 'T19:30:00',
    end: dayStr + 'T20:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Judging',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:15:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Closing Ceremony',
    start: dayStr + 'T21:15:00',
    end: dayStr + 'T21:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Morning Speakers',
    start: dayStr + 'T08:20:00',
    end: dayStr + 'T08:45:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Speaker: Gary Brown (Intel)',
    start: dayStr + 'T11:00:00',
    end: dayStr + 'T12:00:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Speaker: Eby Ramakrishnan (Facebook)',
    start: dayStr + 'T12:00:00',
    end: dayStr + 'T12:15:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Brainstorming Workshop',
    start: dayStr + 'T08:30:00',
    end: dayStr + 'T09:00:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'IOS Development Workshop',
    start: dayStr + 'T09:00:00',
    end: dayStr + 'T10:00:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Web Development Workshop',
    start: dayStr + 'T09:00:00',
    end: dayStr + 'T10:00:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'AI Workshop',
    start: dayStr + 'T09:15:00',
    end: dayStr + 'T09:45:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Vertias AI Workshop',
    start: dayStr + 'T10:30:00',
    end: dayStr + 'T11:00:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Four Square',
    start: dayStr + 'T10:00:00',
    end: dayStr + 'T11:00:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Escape Room',
    start: dayStr + 'T13:30:00',
    end: dayStr + 'T15:30:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Dodgeball',
    start: dayStr + 'T15:30:00',
    end: dayStr + 'T17:00:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Jeopardy',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:15:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
]

function createEventId() {
  return String(eventGuid++)
}


export function Schedule() {
  return (
    <section className={styles.container} id="schedule">
      <h1 className={styles.header}>Schedule</h1>
      <div style={{width: 'min(100vw, 600px)'}}>
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin ]}
          initialView="timeGridDay"
          initialEvents={EVENTS}
          headerToolbar={{
            left: '',
            center: 'title',
            right: ''
          }}
          slotDuration="00:15:00"
          slotLabelInterval={15}
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
          }}
          slotMinTime="07:30:00"
          slotMaxTime="21:45:00"
          height={600}
          initialDate={dayStr}
          allDaySlot={false}
        />
      </div>
    </section>
  )
}