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
          <Category
            categoryName={"Desktop Software"}
          />
          <Tool
            toolName={"Texts"}
          />
          <Tool
            toolName={"Figma"}
          />
          <Tool
            toolName={"CleanShot X"}
          />
          <Tool
            toolName={"Actual"}
            description={"track pennies"}
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
            toolName={"Mac Preview"}
            description={"look at PDFs"}
          />
          <Tool
            toolName={"Mimestream"}
            description={"native email client"}
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
            toolName={"Typora"}
          />
          <Tool
            toolName={"Logseq"}
          />
          <Tool
            toolName={"Mathpix"}
          />
          <Tool
            toolName={"Github Desktop"}
          />
          <Tool
            toolName={"Cron"}
          />
          <Tool
            toolName={"Sunrise"}
            description={"RIP"}
            strikethrough={true}
          />
          <Category
            categoryName={"Dev Tools"}
          />
          <Tool
            toolName={"Replicache"}
          />
          <Tool
            toolName={"ProseMirror"}
          />
          <Tool
            toolName={"Next.js"}
            description={""}
          />
          <Tool
            toolName={"Tauri"}
          />
          <Tool
            toolName={"TailwindCSS"}
          />
          <Category
            categoryName={"Programming Languages"}
          />
          <Tool
            toolName={"TypeScript"}
          />
          <Tool
            toolName={"JavaScript"}
          />
          <Tool
            toolName={"Rust"}
          />
          <Tool
            toolName={"Ruby"}
          />
          <Tool
            toolName={"Python"}
          />
          <Tool
            toolName={"Scheme"}
          />
          <Tool
            toolName={"Clojure"}
          />
          <Tool
            toolName={"Go"}
          />
          <Tool
            toolName={"Java"}
          />
          <Category
            categoryName={"VSCode Extensions"}
          />
          <Tool
            toolName={"Copilot"}
          />

          <Category
            categoryName={"Chrome Extensions"}
          />
          <Tool
            toolName={"Minimal Twitter"}
            description={""}
          />
          <Tool
            toolName={"Minimal Bookface"}
          />
          <Tool
            toolName={"Momentum Dash"}
          />
          <Tool
            toolName={"AdblockPlus"}
          />
          <Tool
            toolName={"uBlock Origin"}
          />

          <Category
            categoryName={"Mobile Applications"}
          />
          <Tool
            toolName={"Strava"}
          />
          <Tool
            toolName={"Levels"}
            description={"treat myself like a tamagotchi"}
          />

          <Category
            categoryName={"Apple Watch Complications"}
          />
          <Tool
            toolName={"Dawn Patrol"}
          />
          <Tool
            toolName={"Happy Bob"}
            description={"glucose buddy"}
          />
          <Category
            categoryName={"Web Services"}
          />
          <Tool
            toolName={"GitHub"}
          />
          <Tool
            toolName={"Craigslist"}
          />
          <Tool
            toolName={"Vercel"}
          />
          <Tool
            toolName={"Supabase"}
          />
          <Tool
            toolName={"Cloudflare"}
          />
          <Tool
            toolName={"Hawaiian Telcom"}
          />
          <Tool
            toolName={"DNSimple"}
            description={""}
          />
          <Tool
            toolName={"Google Cloud"}
          />
          <Tool
            toolName={"ToDesktop"}
          />
          <Tool
            toolName={"Reading Supply"}
            description={"writing is thinking"}
          />
          <Tool
            toolName={"Bold"}
            description={"RIP"}
            strikethrough={true}
          />
          <Category
            categoryName={"Hardware"}
          />
          <Tool
            toolName={"Olivetti Lettera 35"}
          />
          <Tool
            toolName={"Macbook Pro 13-inch, 2020"}
          />
          <Tool
            toolName={"IKEA BEKANT"}
          />
          <Tool
            toolName={"Secretlab TITAN Evo 2022 Series"}
            description={""}
          />
          <Tool
            toolName={"Copic Multi Liner SP 0.5"}
          />
          <Tool
            toolName={"Post-It 3 x 3 inch"}
            description={"washed denim, fresh mint, limeade, lucky green, sunnyside, vital orange"}
          />
          <Tool
            toolName={"Hasami Brown Mug Medium"}
            description={""}
          />
          <Tool
            toolName={"Splash White Orange Chips Mug"}
            description={""}
          />
          <Tool
            toolName={"iPhone 13 Mini, 2021"}
          />
          <Tool
            toolName={"Casio F-19W"}
          />
          <Tool
            toolName={"Apple Watch SE 2022"}
          />
          <Tool
            toolName={"Nomad Rugged Band 40mm/41mm Black/Black"}
          />
          <Tool
            toolName={"Dexcom G6"}
            description={"continuous glucose monitor"}
          />
          <Tool
            toolName={`1999 Subaru Legacy Outback`}
            description={"a to b and back on time"}
          />
          <Tool
            toolName={"1983 Honda XL200R"}
            description={"- FOR SALE"}
          />
          <Tool
            toolName={"Patagonia Arbor Pack 26L - Emerald Green"}
          />
          <Category
            categoryName={"Surf Hardware"}
          />
          <Tool
            toolName={`9'2" DT-2`}
            description={"jr"}
          />
          <Tool
            toolName={`9'11" Byzak`}
            description={"ls"}
          />
          <Tool
            toolName={`9'0" DT-1`}
            description={"ed - FOR SALE"}
          />
          <Tool
            toolName={`9'2"`}
            description={"lu"}
          />
          <Tool
            toolName={`9'6" Juneil Calzo`}
            description={"al - SOLD"}
            strikethrough={true}
          />
          <Tool
            toolName={`9'4" Hawaiian Rush`}
            description={"el - SOLD"}
            strikethrough={true}
          />
          <Tool
            toolName={`9'6" Toots`}
            description={"bb - SOLD"}
            strikethrough={true}
          />
          <Tool
            toolName={`6'8" Tristan Emmons`}
            description={"SOLD"}
            strikethrough={true}
          />
          <Tool
            toolName={"Dakine Longboard Calf 10' Leash"}
          />
          <Tool
            toolName={"Sun Bleached"}
          />
          <Tool
            toolName={"Matunas"}
            description={"surf wax"}
          />
          <Tool
            toolName={"Locals"}
            description={'daily shoes'}
          />
          <Tool
            toolName={"Skin Salvation Safeguard SPF 40"}
            description={""}
          />
          <Tool
            toolName={"Imperial Motion Luxxe Classic 2mm"}
          />
          <Category
            categoryName={"Caving Hardware"}
          />
          <Tool
            toolName={"Fenix HL60R"}
          />
          <Tool
            toolName={"ZebraLight H600c Mk"}
          />
          <Tool
            toolName={"Curtec Daren Drum"}
          />
          <Tool
            toolName={"Filson Traditional Crew Socks"}
          />
          <Tool
            toolName={`Xtratuf 15" Legacy Boot`}
          />
          <Tool
            toolName={"Dr Martens 1460"}
          />
          <Category
            categoryName={"Camping Hardware"}
          />
          <Tool
            toolName={"Feathered Friends Egret UL 20/30"}
          />
          <Tool
            toolName={"Feathered Friends Eos Down Jacket"}
          />
          <Tool
            toolName={"Therm-a-Rest NeoAir XLite Sleeping Pad"}
          />
          <Category
            categoryName={"Bank"}
          />
          <Tool
            toolName={"Simple"}
            description={"RIP"}
            strikethrough={true}
          />
          <Tool
            toolName={"One"}
            description={"personal bank"}
          />
          <Tool
            toolName={"BECU"}
            description={"business and personal bank"}
          />
          <Category
            categoryName={"Library Memberships"}
          />
          <Tool
            toolName={"Hawaii State Public Library"}
          />
          <Tool
            toolName={"King County Public Library"}
          />
          <Tool
            toolName={"Seattle Public Library"}
          />
          <Tool
            toolName={"San Francisco Public Library"}
          />
          <Tool
            toolName={"New York Public Library"}
          />
          <Tool
            toolName={"Brooklyn Public Library"}
          />
          <Tool
            toolName={"Los Angeles Public Library"}
          />
          <Category
            categoryName={"Cooking"}
          />
          <Tool
            toolName={"Kerrygold Salted Butter"}
          />
          <Tool
            toolName={"Chosen Foods 100% Pure Avocado Oil"}
          />
          <Tool
            toolName={"Kirkland Signature Toscano Extra Virgin Olive Oil"}
          />
          <Tool
            toolName={"Kirkland Signature California Extra Virgin Olive Oil"}
          />
          <Tool
            toolName={"Diamond Crystal Kosher Salt"}
          />
          <Tool
            toolName={"Maldon Sea Salt"}
          />
          <Tool
            toolName={"Field Company No.8 Cast Iron Skillet"}
          />
          <Tool
            toolName={"Kewpie"}
            description={"mayo"}
          />

        </div>
      </div>
    </div>
  )
}

function Category({categoryName}: {categoryName: string}) {
  return (
    <div className={"font-bold"}>
      {categoryName}
    </div>
  )
  }

function Tool({toolName, description, strikethrough}: {toolName: string, description?: string, strikethrough?: boolean}) {
  return (
    <div className={strikethrough === true ? `line-through` : ''}>
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