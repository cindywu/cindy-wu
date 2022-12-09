import React from 'react'
import Link from 'next/link'

export default function Uses() {
  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"text-2xl pb-4 font-medium"}>
        <Link className={"no-underline"} href="/">Cindy Wu</Link>
        <span className={"text-zinc-500"}> › Uses</span>
      </div>
      {/* <div>
        <Thing
          text={"CV"}
          link={"https://read.cv/cindywu"}
        />
        <Thing
          text={"Github"}
          link={"https://github.com/cindywu"}
        />
      </div> */}
      <div className={"flex-row font-light"}>
          <Tool
            toolName={"Secretlab TITAN Evo 2022 Series"}
            description={"chair"}
          />
          <Tool
            toolName={"IKEA BEKANT"}
          />
          <Tool
            toolName={"Texts"}
          />
          <Tool
            toolName={"Cron"}
          />
          <Tool
            toolName={"Figma"}
          />
          <Tool
            toolName={"CleanShot X"}
          />
          <Tool
            toolName={"VSCode"}
          />
          <Tool
            toolName={"Spotify"}
          />
          <Tool
            toolName={"Google Chrome"}
          />
          <Tool
            toolName={"iTerm2"}
          />
          <Tool
            toolName={"1Password"}
          />
          <Tool
            toolName={"Copilot"}
          />
          <Tool
            toolName={"Linear"}
          />
          <Tool
            toolName={"TablePlus"}
          />
          <Tool
            toolName={"Trunk"}
          />
          <Tool
            toolName={"Supabase"}
          />
          <Tool
            toolName={"Cloudflare Workers"}
          />
          <Tool
            toolName={"Actual"}
            description={"track pennies"}
          />
          <Tool
            toolName={"Hawaiian Telcom"}
          />
          <Tool
            toolName={"Mathpix"}
          />
          <Tool
            toolName={"Github"}
          />
          <Tool
            toolName={"Replicache"}
          />
          <Tool
            toolName={"ProseMirror"}
          />
          <Tool
            toolName={"Logseq"}
          />
          <Tool
            toolName={"Hawaii State Public Library"}
          />

          <Tool
            toolName={"Next.js"}
            description={"Magic"}
          />
          <Tool
            toolName={"TypeScript"}
          />
          <Tool
            toolName={"DNSimple"}
            description={"Domain Management"}
          />
          <Tool
            toolName={"Post-It 3 x 3 inch"}
            description={"washed denim, fresh mint, limeade, lucky green, sunnyside, vital orange"}
          />
          <Tool
            toolName={"Keycastr"}
          />
          <Tool
            toolName={"Mac Preview"}
            description={"look at PDFs"}
          />
          <Tool
            toolName={"Mimestream"}
            description={"native email client"}
          />
          <Tool
            toolName={"Macbook Pro 13-inch, 2020"}
          />
          <Tool
            toolName={"Typora"}
          />
          <Tool
            toolName={"Locals"}
            description={'daily shoes'}
          />
          <Tool
            toolName={"Matunas"}
            description={"surf wax"}
          />
          <Tool
            toolName={"Copic Multi Liner SP 0.5"}
          />
          <Tool
            toolName={"Hasami Brown Mug Medium"}
            description={"hot beverage container"}
          />
          <Tool
            toolName={"Spash White Orange Chips Mug"}
            description={"hot beverage container"}
          />
          <Tool
            toolName={"iPhone 13 Mini"}
          />
          <Tool
            toolName={"Skin Salvation Safeguard SPF 40"}
            description={"sunscreen"}
          />
          <Tool
            toolName={"Minimal Twitter"}
            description={"Chrome extension for sanity"}
          />
          <Tool
            toolName={"Momentum Dash"}
          />
          <Tool
            toolName={"One"}
            description={"personal bank RIP Simple"}
          />
          <Tool
            toolName={"BECU"}
            description={"business and personal bank"}
          />
          <Tool
            toolName={"Sun Bleached"}
          />
          <Tool
            toolName={"Casio F-19W"}
          />
          <Tool
            toolName={"Apple Watch SE 2022"}
          />
          <Tool
            toolName={"Strava"}
          />
          <Tool
            toolName={"Dawn Patrol"}
            description={"looking for replacement"}
          />
          <Tool
            toolName={"Levels"}
            description={"treat myself like a tamagotchi"}
          />
          <Tool
            toolName={"Dexcom G6"}
            description={"continuous glucose monitor"}
          />
          <Tool
            toolName={"Happy Bob"}
            description={"glucose buddy"}
          />
          <Tool
            toolName={`9'2" DT-2`}
            description={"junior"}
          />
          <Tool
            toolName={`9'10" Byzak Pure Fun`}
            description={"long spoon"}
          />
          <Tool
            toolName={`1999 Subaru Legacy Outback`}
            description={"a to b and back on time"}
          />
          <Tool
            toolName={"1983 Honda XL200R"}
            description={"for sale to good home"}
          />
        </div>
      </div>
    </div>
  )
}

function Tool({toolName, description}: {toolName: string, description?: string}) {
  return (
    <div>
      {toolName}
      {description && <span className={"text-zinc-500"}> {description}</span>}
    </div>
  )
}

function Thing({text, link}: {text: string, link: string}) {
  return (
    <div>
      <Link href={link}>
        {text}
      </Link>
    </div>
  )
}