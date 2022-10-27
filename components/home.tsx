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
        <p>I am looking to build software full-time for someone new.</p>
        <p>In a past life I did science hatching sea-monkeys to feed to zebrafish for tuberculosis research, camped under the stars in the Eastern Washington sagebrush steppe counting insect galls, built logic gates to silence genes using DNA, designed an anthrax therapeutic for the U.S. Army, and programmed immune cells for a universal vaccine.</p>
        <p>The work produced currency in the form of peer-reviewed papers.</p>
        <p>Then, for a decade I poured the entirety of my labor towards breathing life into <Link href="http://experiment.com">Experiment</Link> with my best friend Denny.
        </p>
        <p>The work landed us prestigious financial support and fancy awards. Some famous people and some respected news sources published very nice words.</p>
        <p>Until the end of 2022 we were building a local-first instant-ui multiplayer reference manager as a foundation for a decentralized social network for science.</p>
        <p>I was born in Seattle. My family immigrated to American from the island of Taiwan.</p>
        <p>San Francisco and New York City are places I have called home. Today, the Kingdom of Hawaiʻi is home.</p>
        <p>I ride a {`9'2"`} Takayama DT-2 and a {`9'11"`} Byzak. You can find me at first light half a mile offshore of Waikīkī.</p>
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