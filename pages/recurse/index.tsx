import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className={"p-4 dark:bg-zinc-800 h-screen overflow-auto"}>
      <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/">Cindy Wu</Link> › Recurse</div>
      <div className={"text-zinc-500"}>programming projects</div>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/minimal-linkedin"><div>minimal linkedin</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/uses-toy"><div>/uses</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/baby-crdt"><div>crdt from scratch v1 - insertions</div></Link>
      <Link className={"no-underline hover:underline"} href="/arrows-2"><div>crdt from scratch v2 - document array of chars </div></Link>
      <Link className={"no-underline hover:underline"} href="/arrows"><div>arrows</div></Link>
      <Link className={"no-underline hover:underline"} href="/tailwind-desktop"><div>tailwindcss desktop executable</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/baby-crdt/pull/14"><div>crdt from scratch v3 - tombstoning some chars to heaven</div></Link>
      <div className={"line-through"}><Link className={"no-underline hover:underline"} href="https://github.com/zackrdavis/custom-video-daily-react-hooks">spin and stop and bounce</Link><span className={""}></span></div>
      <Link className={"no-underline hover:underline"} href="https://play-mahjong.vercel.app"><div>mahjong with video chat to 練習中文</div></Link>
      <div>drawers<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
      <div>artisanal redis<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
      <div>artisanal sqlite<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
      <div className={"line-through"}><Link className={"no-underline hover:underline"} href="https://github.com/cindywu/satsuma">satsuma - bookface for everyone else design system</Link><span className={""}></span></div>
      <div><span className={'line-through'}>faunadex</span> <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/faunadex-offline">floradex - offline-first pokedex for hawaiian plants</Link></div>
      <div><Link href="https://github.com/cindywu/troglog" className={"no-underline hover:underline"}>troglog.com - cave exploration log</Link></div>
      <div><Link className={"no-underline hover:underline"} href="https://sharkbait.cindy-wu.com">sharkbait - oahu surf report and jelly report</Link></div>
      <div>cave api<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>
      <div>jammy<span className={"text-yellow-400"}>{` - coming soon!`}</span></div>

      <div className={"pt-4 text-zinc-500"}>desktop apps</div>
      <Link className={"no-underline hover:underline"} href="/tailwind-desktop"><div>tailwindcss</div></Link>
      <Link className={"no-underline hover:underline"} href="recurse-desktop"><div>recurse</div></Link>
      <Link className={"no-underline hover:underline"} href="/virtual-recurse-desktop"><div>virtual recurse</div></Link>
      <Link className={"no-underline hover:underline"} href="/recurse-calendar-desktop"><div>recurse calendar</div></Link>

      <div className={"pt-4 text-zinc-500"}>non-technical talks</div>
      <div>how this way of tying shoelaces is better than other ways</div>
      <div>money will come when you are doing the right thing</div>
      <div>on being a maker in a manager&#39;s world</div>
      <div>how to prepare for any talk in five minutes</div>

      <div className={"pt-4 text-zinc-500"}>technical talks</div>
      <div>declutter twitter and linkedin with tiny chrome extension</div>
      <div>/uses and the joy of vercel preview comments</div>
      <div>crdt-whatever</div>
      <div>drawing arrows</div>
      <div>crdt tombstoning, all deleted characters go to heaven</div>
      <div>multiplayer mahjong to 練習中文</div>
      <div>floradex, offline-first pokedex for hawaiin plants</div>
      <div>troglog, sharkbait, and adventures in API-ing</div>
    </div>
  )
}



