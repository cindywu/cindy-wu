import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function VercelDesktop() {
  const myLoader = ({ src, width, quality }: any) => {
    return `https://elasticbeanstalk-us-east-2-989071256297.s3.us-east-2.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div>
      <div className={"p-4 dark:bg-zinc-800 h-screen"}>
        <div className={"pb-4 text-2xl"}><Link className={"no-underline hover:underline"} href="/">Cindy Wu</Link> › Vercel Desktop App - vercel.com</div>
        <div className="py-4">Vercel dot com as a Mac desktop app.</div>
        <Image
          loader={myLoader}
          src="CleanShot+2023-04-15+at+05.59.22.gif"
          alt="Vercel Desktop App Demo"
          width={446}
          height={495}
        />
        <div className={"py-2"}>
        <Link href={"https://elasticbeanstalk-us-east-2-989071256297.s3.us-east-2.amazonaws.com/Vercel+Mac+Installer.zip"}>Download</Link>
        </div>
      </div>
    </div>
  )
}
