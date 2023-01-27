import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className={"p-4 dark:bg-zinc-800 h-screen overflow-auto"}>
      <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/home">Cindy Wu</Link> › <Link className={"no-underline hover:underline"} href="/recurse">Recurse</Link> › Arrows</div>
      <div>
        <Link className={"no-underline hover:underline"} href="http://arrows-alpha.vercel.app"><div>https://arrows-alpha.vercel.app</div></Link>
        <Link className={"no-underline hover:underline"} href="https://github.com/cindywu/arrows"><div className={"pb-4"}>github.com/cindywu/arrows</div></Link>
        <div className={"text-2xl pb-2"}>motivation</div>
        <div>
          - crdts are hard to explain to non-crdtians
        </div>
        <div>
        - leave a crdt literature paper trail for future recurse crdtians
        </div>
        <div>
        - public community-generated crdt library
        </div>
        <div>
        - wayback machine for anything anyone cares about preserving
        </div>
        <div>
        - it took me four years to build the reference manager of my dreams
        </div>
        <div>- can i build what i built in 4 years in 4 days?</div>
        <div className={"text-2xl pb-2 pt-8"}>/uses</div>
        <div>
        next.js 13
        </div>
        <div>
        vercel
        </div>
        <div>typescript</div>
        <div>replicache / reflect</div>
        <div>cloudflare workers</div>
        <div>cloudflare durable objects</div>
        <div>tailwindcss</div>
        <div>openai gpt-3</div>
        <div>mathpix</div>
        <div>arc</div>
        <div>copilot</div>
        <div>vscode</div>
        <div className={"text-2xl pb-2 pt-8"}>todo</div>
        <div>
        - keyboard-first navigation / cmd+k

        </div>
        <div>
        - full-text search

        </div>
        <div>
        - pdf display

        </div>
        <div>
        - collaborative rich text editor

        </div>
        <div>- local-first-ify: move db from indexedDB to on disk postgresql or sqlite
        </div>
        <div>- one click tldr: summarize for a 2nd grader</div>
        <div className={"text-2xl pb-2 pt-8"}>needs help</div>
        <div>front-end tests</div>
        <div>tests in general</div>
        <div>pdf to svg (any file to svg)</div>
      </div>
    </div>
  )
}



