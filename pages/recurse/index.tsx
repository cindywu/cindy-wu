import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className={"p-4 dark:bg-zinc-800 h-screen"}>
      <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/">Cindy Wu</Link> › Recurse</div>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/minimal-linkedin"><div>minimal linkedin</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/uses-toy"><div>/uses</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/baby-crdt"><div>crdt from scratch v1 - insertions</div></Link>
      <Link className={"no-underline hover:underline"} href="/arrows-2"><div>crdt from scratch v2 - document array of chars </div></Link>
      <Link className={"no-underline hover:underline"} href="/arrows"><div>arrows</div></Link>
      <Link className={"no-underline hover:underline"} href="/tailwind-desktop"><div>tailwindcss desktop app - mac/windows/linux</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/baby-crdt/pull/14"><div>crdt from scratch v3 - tombstoning some chars to heaven</div></Link>
      <div>spin and stop and bounce<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
      <Link className={"no-underline hover:underline"} href="https://play-mahjong.vercel.app"><div>mahjong with video chat to 練習中文</div></Link>
      <div>offline-first are.na backed by estuary<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
      <div>artisanal redis<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
      <div>artisanal sqlite<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
    </div>
  )
}


