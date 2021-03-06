import styles from './Team.module.css'

export function Team() {

  let team_members = [
    ["ruhi", "Ruhi Yusuf", "Ruhi is a sophmore at Saint Francis. She's interested in computer science, robotics, and music.", "https://github.com/ruhiyusuf"],
    ["avi", "Avi Rakholia", "Avi is a senior at Saint Francis.", "https://github.com/Avi-Rakholia"],
    ["ayush", "Ayush Raj", "Ayush is a junior at Saint Francis. In his spare time he enjoys coding and watches the Warriors.", "https://github.com/rajayush143"],
    ["lino", "Lino Le Van", "Lino is a senior at Saint Francis. He loves programming and wants to share his passion with the world through hackathons like these.", "https://linolevan.com"],
    ["surya", "Surya Jasper", "Surya is a senior at Saint Francis.", "https://github.com/suryajasper"],
    ["medha", "Medha Mahanta", "Medha is a sophmore at Saint Francis. She participates in programming club, math team, table tennis.", "https://github.com/MedhaMahanta"],
    ["nina", "Nina Le Van", "Nina is a freshman at Saint Francis. She partipates in 3D Printing club, 1001 stories, and color guard."],
    ["molly", "Molly Sullivan", "Molly is a Senior at Saint Francis interested in studying product design. She enjoys photography, digital UX/UI design, and collecting design inspiration on the Behance app. LancerHacks was Molly’s first hackathon last year and she is excited to onboard and inspire more beginners in computer science as an organizer this year."],
    ["nitish", "Nitish Gourishetty", "Nitish Gourishetty is a junior at Saint Francis High School. Currently he loves immersing himself into the world of technology. In his free time he loves doing things like robotics and building cool machines, as well as other things things like reading, playing the guitar. Nitish hopes to spread his passion of technology.", "https://github.com/NitishGourishetty"],
    ["pranav", "Pranav Amarnath", "Pranav is a junior at Saint Francis. He likes programming, CADing, and robotics.", "https://github.com/PranavAmarnath"],
    ["rithvik", "Rithvik Chavali ", "Rithvik is a sophmore at Saint Francis. He likes React JS and hopes to work in the industry at some point."],
    ["shlok", "Shlok Shah", "Shlok is a senior at Saint Francis. He is an innovative programmer, who is a section leader in band and a part of the programming club.", "https://github.com/shlinky"],
    ["swastik", "Swastik Purathepparambil", "Swastik is a sophmore at Saint Francis. He is very passionate about marketing and plays basketball.", "https://github.com/SwastikPurathepparambil"],
    ["angela", "Angela Xiao", "Angela is a senior at Saint Francis. Interested in computer science, rhythm games, and draws occasionally(?).", "https://www.youtube.com/channel/UCQ1zGxHrfEmmW4CPpBx9-qw"],
  ]
  
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>The Team</h1>
      <div className={styles.team_container}>
        {
          team_members.map((member)=>(
            <div className={styles.member} key={member[0]}>
              <a href={member[3]} target="_blank" rel="noreferrer" className={styles.image} style={{backgroundImage: `url(/team/${member[0]}.jpg`}}/>
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