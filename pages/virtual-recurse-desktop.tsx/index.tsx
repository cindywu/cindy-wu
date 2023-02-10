import React from 'react'
import Link from 'next/link'

export default function VirtualRecurseDesktop() {
  return (
    <div>
      <div className={"p-4 dark:bg-zinc-800 h-screen"}>
        <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/home">Cindy Wu</Link> › Virtual Recurse Desktop App - recurse.rctogether.com/online</div>
        <div>
        <Link href={"https://gateway.estuary.tech/gw/ipfs/bafkreig6hfy4d23xxcclb2obvap6v6xoagte64iqkitxlt2owu3qliwthm"}>Mac</Link>
        </div>
        <div>
          <Link href="https://gateway.estuary.tech/gw/ipfs/bafybeichkdyqm5qtsl2lr2cr6qjmaub7flfwdkwgg7vnct5n4uzdo7ep4i">Windows</Link>
        </div>
        <div>
          <Link href={"https://gateway.estuary.tech/gw/ipfs/bafybeiavaivexkiw5jqlnxmpirnu6vandmejls6yq2rbzggxkuxatre6aa"}>Linux</Link>
        </div>
      </div>
    </div>
  )
}
