import React from 'react'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      Welcome to my web presence.
      <Thing
        text={"CV"}
        link={"https://read.cv/cindywu"}
      />
      <Thing
        text={"Github"}
        link={"https://github.com/cindywu"}
      />
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