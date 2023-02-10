import React from 'react'
import Link from 'next/link'

export default function VirtualRecurseDesktop() {
  return (
    <div>
      <div className={"p-4 dark:bg-zinc-800 h-screen"}>
        <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/home">Cindy Wu</Link> › Virtual Recurse Desktop App - recurse.rctogether.com/online</div>
        <div>
        <Link href={"https://gateway.estuary.tech/gw/ipfs/bafkreifvby2ynquk2v3ismjkhv4tdlbphgaqkhf3f2ibqtyhpfxe64ajzi"}>Mac</Link>
        </div>
        <div>
          <Link href="https://gateway.estuary.tech/gw/ipfs/bafybeidge43lxzegwvfbae7eek6mzoriopskl5bgemk4lpsyr7ad4u42uu">Windows</Link>
        </div>
        <div>
          <Link href={"https://gateway.estuary.tech/gw/ipfs/bafybeicgyzp7eh4rat5xavnajm5djzyqu4ehkkgb3qei7vzm3kk76z53kq"}>Linux</Link>
        </div>
      </div>
    </div>
  )
}
