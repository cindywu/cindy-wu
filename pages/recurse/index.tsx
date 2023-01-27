import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className={"p-4 dark:bg-zinc-800 h-screen"}>
      <Link href="/home"><div className={"pb-4 text-2xl "}>Cindy Wu › Recurse</div></Link>
      <Link href="https://github.com/cindywu/minimal-linkedin"><div>minimal linkedin</div></Link>
      <Link href="https://github.com/cindywu/uses-toy"><div>/uses</div></Link>
      <Link href="https://github.com/cindywu/baby-crdt"><div>baby crdt</div></Link>
      <Link href="/arrows"><div>arrows github.com/cindywu/arrows</div></Link>
    </div>
  )
}
