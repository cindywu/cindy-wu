import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"text-2xl pb-4 font-medium"}>Cindy Wu</div>
      <div>
        <Thing
          text={"CV"}
          link={"https://read.cv/cindywu"}
        />
        <Thing
          text={"Github"}
          link={"https://github.com/cindywu"}
        />
        {/* <Thing
          text={"Uses"}
          link={"/uses"}
        /> */}
        <Thing
          text={"Notes"}
          link={"/notes"}
        />
      </div>
      <div className={"flex-row font-light"}>
        <div className={"pt-3"}>I am <Link href="/what-i-am-looking-for">looking to build software full-time</Link> for someone else.</div>
        <div className={"pt-3"}>In a past life I did science hatching sea-monkeys to feed to zebrafish for tuberculosis research, camped under the stars in the Eastern Washington sagebrush steppe counting insect galls, built DNA logic gates to silence genes, designed an anthrax therapeutic for the U.S. Army, and programmed immune cells for a universal vaccine.</div>
        <div className={"pt-3"}>For a decade I poured the entirety of my labor towards breathing life into <Link href="http://experiment.com">Experiment</Link> with my best friend Denny.
        </div>
        <div className={"pt-3"}>Until the end of 2022 I was building at <Link href="http://jellypbc.com">Jelly Public Benefit Corporation</Link> a local-first instant-ui multiplayer reference manager as a foundation for a decentralized social network for science.</div>
        <div className={"pt-3"}>In 2023, I spent all my hours <Link href="/recurse">programming programs</Link> for the joy of programming at <Link href="https://recurse.com">The Recurse Center</Link>.</div>
        <div className={"pt-3"}>I was born in Seattle and grew up in Bellevue. My family immigrated to America from the island of Taiwan.</div>
        <div className={"pt-3"}>San Francisco and New York City are places I have called home. Today, the Kingdom of Haiwaiʻi is home.</div>
        <div className={"pt-3"}>I ride a {`9'2"`} Takayama DT-2 and a {`9'11"`} Byzak. You can find me at first light half a mile offshore of Waikīkī.</div>
      </div>
    </div>
    </div>
  )
}

function Thing({text, link}: {text: string, link: string}) {
  return (
    <div>
      <Link href={link}>
        {text}
      </Link>
    </div>
  )
}