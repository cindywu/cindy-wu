import React from 'react'
import Link from 'next/link'

export default function RecurseDesktop() {
  return (
    <div>
      <div className={"p-4 dark:bg-zinc-800 h-screen"}>
        <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/home">Cindy Wu</Link> › Recurse Center Desktop Ap - recurse.com</div>
        <div>
        <Link href={"https://gateway.estuary.tech/gw/ipfs/bafkreidsob5fmusl6xcm637slrbqioe22idkuljoyodfegc2xrkb6pkbwq"}>Mac</Link>
        </div>
        <div>
          <Link href="https://gateway.estuary.tech/gw/ipfs/bafybeiexts6emh353hm2z2akvkqpc6h6xoaieaoxgtd5ilzjaeap6arzyq">Windows</Link>
        </div>
        <div>
          <Link href={"https://gateway.estuary.tech/gw/ipfs/bafybeibq72pklcuphql6lzi2aexoworbsgham2g2vqf3c2s3lvvsoa5nam"}>Linux</Link>
        </div>
      </div>
    </div>
  )
}
