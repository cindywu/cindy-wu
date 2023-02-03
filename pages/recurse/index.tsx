import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className={"p-4 dark:bg-zinc-800 h-screen"}>
      <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/">Cindy Wu</Link> › Recurse</div>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/minimal-linkedin"><div>minimal linkedin</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/uses-toy"><div>/uses</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/baby-crdt"><div>baby crdt v1 - insertions</div></Link>
      <Link className={"no-underline hover:underline"} href="/arrows-2"><div>baby crdt v2 - document array of chars </div></Link>
      <Link className={"no-underline hover:underline"} href="/arrows"><div>arrows</div></Link>
      <Link className={"no-underline hover:underline"} href="/tailwind-desktop"><div>tailwindcss desktop app - mac/windows/linux</div></Link>
      <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/baby-crdt/pull/14"><div>baby crdt v3 - tombstoning some chars to heaven</div></Link>
    </div>
  )
}


