import React from 'react'
import styles from './home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Cindy Wu</h2>
      <div>
        <Thing
          text={"CV"}
          link={"https://read.cv/cindywu"}
        />
        <Thing
          text={"Github"}
          link={"https://github.com/cindywu"}
        />
      </div>
      <div>
        <p>Welcome to my web presence.</p>
        <p>I live in Kaimukī on the island of Oʻahu in the Kingdom of Hawaiʻi.</p>
        <p>I was born in Seattle. I grew up in Bellevue. My family is from the island of Taiwan.</p>
        <p>San Francisco and New York City are cities I have called home.</p>
        <p>In a past life I did science hatching sea-monkeys to feed to zebrafish for tuberculosis research, camped under the stars in the eastern washington sagebrush steppe counting insect galls, built logic gates to silence genes using DNA, designed an anthrax therapeutic for the U.S. Army, and programmed immune cells for a universal vaccine.</p>
        <p>This time spent produced currency in the form of peer-reviewed papers.</p>
        <p>For a decade I poured the entirety of my labor towards breathing life into <Link href="http://experiment.com">Experiment</Link> with my best friend Denny.
        </p>
        <p>The work landed us prestigious financial support and fancy awards. Some famous people and respected publications published some very nice words.</p>
        <p>Until the end of 2022 we attempted building a local-first instant-ui multiplayer reference manager as a foundation for a decentralized social network for science.</p>
        <p>I am now looking to build software for someone else.</p>
      </div>
    </div>
  )
}

function Thing({text, link}: {text?: string, link?: string}) {
  return (
    <div className={styles.cv}>
      <a href={link}>
        {text}
      </a>
    </div>
  )
}