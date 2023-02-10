import React from 'react'
import Link from 'next/link'

export default function RecurseCalendar() {
  return (
    <div>
      <div className={"p-4 dark:bg-zinc-800 h-screen"}>
        <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/home">Cindy Wu</Link> › Recurse Calendar Desktop App - recurse.com/calendar</div>
        <div>
        <Link href={"https://gateway.estuary.tech/gw/ipfs/bafkreibcfgcr2f56hmxyneytjlmawmzxjtolthbxckot4wsbohfugtngg4"}>Mac</Link>
        </div>
        <div>
          <Link href="https://gateway.estuary.tech/gw/ipfs/bafybeifvakvfvdxzgwzvhwcm3t4xoihyq625khpre7cjef2bywq2lkd63i">Windows</Link>
        </div>
        <div>
          <Link href={"https://gateway.estuary.tech/gw/ipfs/bafybeicgyzp7eh4rat5xavnajm5djzyqu4ehkkgb3qei7vzm3kk76z53kq"}>Linux</Link>
        </div>
      </div>
    </div>
  )
}
