import React from 'react'
import Link from 'next/link'

export default function softdrinks() {
  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
      <div className={"p-4 max-w-lg"}>
        <div className={"pb-2"}>
          <h1 className={"text-2xl font-medium"}><Link href="/" className={"no-underline"}>Cindy Wu</Link> <span className={"text-zinc-500"}>› IRL Founder Interviews Series</span></h1>
          <div className={"text-zinc-400 dark:text-zinc-500"}>{`University of Hawai'i - PACE`}</div>
        </div>
        <Video
          title="Cindy Wu - Experiment | Jelly"
          url="https://www.youtube.com/watch?v=O2YcBI-FBZU"
          date="Feb 2020"
        />
        <Video
          title="David Hirijida - Simple | Acorns"
          url="https://www.youtube.com/watch?v=Vkh2VAjnxTM"
          date="Feb 2022"
        />
        <Video
          title="Jonathan Kim - Appcues | Terraformation"
          url="https://www.youtube.com/watch?v=Xhi0wOgeJoE"
          date="Mar 2022"
        />
        <Video
          title="Brian Lam - Wirecutter | Gizmodo"
          url="https://www.youtube.com/watch?v=bMPHn-tvBVI"
          date="May 2022"
        />
        <Video
          title="Dawoon Kang - Coffee Meets Bagel"
          url="https://www.youtube.com/watch?v=AXtimirzgUk"
          date="Jun 2022"
        />
        <Video
          title="Yishan Wong - Reddit | Terraformation"
          url="https://www.youtube.com/watch?v=nHR5RviqOeA"
          date="Jul 2022"
        />
        <Video
          title="Richard Matsui - kWh Analytics"
          url="https://www.youtube.com/watch?v=vptJ6tqu8hw"
          date="Dec 2022"
        />
      </div>
    </div>
  )
}

function Video({ title, url, date } : { title: string, url: string, date: string} ) {
  return (
    <div className={"py-1"}>
      <span className={"font-mono pr-2 text-sm text-zinc-400 dark:text-zinc-500"}>{date}</span>
      <Link className={"no-underline hover:underline"} href={url}>
        <span>{title}</span>
      </Link>
    </div>
  )
}