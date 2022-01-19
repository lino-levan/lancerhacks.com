import styles from './Team.module.css'

export function Team() {

  let team_members = [
    ["avi", "Avi Rakholia", "..."],
    ["ayush", "Ayush Raj", "..."],
    ["lino", "Lino Le Van", "..."],
    ["surya", "Surya Jasper", "..."],
    ["medha", "Medha Mahanta", "..."],
    ["molly", "Molly Sullivan", "..."],
    ["nina", "Nina Le Van", "..."],
    ["nitish", "Nitish Gourishetty", "..."],
    ["pranav", "Pranav Amarnath", "..."],
    ["rithvik", "Rithvik Chavali ", "..."],
    ["shlok", "Shlok Shah", "..."],
    ["swastik", "Swastik Purathepparambil", "..."],
  ]
  
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>The Team</h1>
      <div className={styles.team_container}>
        {
          team_members.map((member)=>(
            <div className={styles.member} key={member[0]}>
              <div className={styles.image} style={{backgroundImage: `url(/team/${member[0]}.jpg`}}/>
              <div>
                <h3>{member[1]}</h3>
                <p>{member[2]}</p>
              </div>
            </div>
          ))
        }
      </div>
      <p className={styles.description}>
      <b>LancerHacks</b> is organized by sfhacks, the <a href="https://sfhs.com">SFHS</a> Programming Club, run by a team of enthusiastic, motivated, and dedicated students.
      </p>
    </section>
  )
}