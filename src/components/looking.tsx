import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function Looking() {
  const description = `For a decade, since YC W13, I've been building startups making something from nothing.

  For the next 4-5 years I am looking to contribute to taking something working and make it lasting.

  The companies I am considering exhibit the following behaviors:

  - seek understanding
  - make your content clear
  - make your delivery memorable

  These behaviors can manifest as existing product market fit, clear and concise external and internal communication, and user interfaces with craftsman-like quality.

  From a personal growth standpoint, I have this intrinsic desire to be a dramatically better programmer. Landing somewhere with a lot of talented and kind programmers is important to me.

  I would like to start in the organization as an IC software engineer. After the first year I am open to engineering management, product, and any roles that are of use to the company's purpose.

  I have an affinity towards building tooling that enables amateurs to surpass in ability and production quality of professionals.

  Not interested in AI, unless witchy. Not interested in web3, unless it involves decentralized file storage or governance for IRL assets. Not interested in science tech or tools for thought; I need a break.

  *ciindy.wu at gmail dot com*
  `

  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"text-2xl pb-4 font-medium"}>
        <Link className={"no-underline"} href="/">Cindy Wu</Link>
        <span className={"text-zinc-500"}> › What I am looking for</span>
      </div>
      <div>
        <Thing
          text={"CV"}
          link={"https://read.cv/cindywu"}
        />
        <Thing
          text={"Github"}
          link={"https://github.com/cindywu"}
        />
        <Thing
          text={"Notes"}
          link={"/notes"}
        />
      </div>
      <div className={"flex-row font-light pt-4"}>
        <ReactMarkdown>{description}</ReactMarkdown>
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