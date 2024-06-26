import React from 'react'
import Link from 'next/link'
import { desktopSoftware } from '../datamodel/desktop-software'
import { devTools } from '../datamodel/dev-tools'
import { programmingLanguages } from '../datamodel/programming-languages'
import { vscodeExtensions } from '../datamodel/vscode-extensions'

export default function Uses() {
  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"text-2xl pb-4 font-medium"}>
        <Link className={"no-underline"} href="/">Cindy Wu</Link>
        <span className={"text-zinc-500"}> › Uses</span>
      </div>
      <div className={"flex-row font-light"}>
          <Category
            categoryName={"Desktop Software"}
            data={desktopSoftware}
          />
          <Category
            categoryName={"Dev Tools"}
            data={devTools}
          />
          <Category
            categoryName={"Programming Languages"}
            data={programmingLanguages}
          />
          <Category
            categoryName={"VSCode Extensions"}
            data={vscodeExtensions}
          />

          <Category
            categoryName={"Chrome Extensions"}
            data={null}
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
            data={null}
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
            data={null}
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
            data={null}
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
          <Tool
            toolName={"Wikipedia"}
          />
          <Tool
            toolName={"GitHub"}
          />
          <Tool
            toolName={"Rest Notes"}
          />
          <Tool
            toolName={"Twitter"}
          />

          <Tool
            toolName={"Reddit"}
          />
          <Tool
            toolName={"Twitch"}
          />

          <Category
            categoryName={"Hardware"}
            data={null}
          />
          <Tool
            toolName={"1980 H.T. Huang Toucan Lamp - Blue/Pink"}
          />
          <Tool
            toolName={"Blue Yeti Microphone - Blackout"}
          />
          <Tool
            toolName={"Brother HL-L2370DW series"}
          />
          <Tool
            toolName={"Olivetti Lettera 35"}
          />
          <Tool
            toolName={"Merchant and Mills Rapid Repair Kit"}
          />
          <Tool
            toolName={"Macbook Pro 13-inch, 2020"}
          />
          <Tool
            toolName={"Airpods 2nd Generation "}
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
            toolName={"Maruman M.memo DMP-A7 Grid Notepad"}
          />
          <Tool
            toolName={"Post-It 3 x 3 inch"}
            description={"washed denim, fresh mint, limeade, lucky green, sunnyside, vital orange"}
          />
          <Tool
            toolName={"Brother HL-L2370DW series"}
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
            toolName={`1999 Subaru Legacy Outback - White`}
            description={"a to b and back on time"}
          />
          <Tool
            toolName={`1998 Toyota Camry - Gold`}
            description={"betsy aka gzort - SOLD "}
            strikethrough={true}
          />
          <Tool
            toolName={"1983 Honda XL200R"}
            forSale={true}
          />
          <Tool
            toolName={"2009 Yahama Zuma - Blue"}
            description={"trusty steed"}
          />
          <Tool
            toolName={"1980 Versailles Peugeot 12-speed - Teal"}
            description={"world traveler"}
          />
          <Tool
            toolName={"Patagonia Arbor Pack 26L - Emerald Green"}
          />
          <Tool
            toolName={"02 帽子 JAMSTECロゴ ネイビー - M"}
          />
          <Category
            categoryName={"Surf Hardware"}
            data={null}
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
            description={"ed"}
            forSale={true}
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
            data={null}
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
            data={null}
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
            data={null}
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
            data={null}
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
            data={null}
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
          <Tool
            toolName={"Chiquilín Bittersweet Paprika"}
          />
          <Tool
            toolName={"Tatung Multi-functional Cooker - Green"}
            description={"大同6人份不鏽鋼電鍋 -綠色"}
            wanted={true}
          />

        </div>
      </div>
    </div>
  )
}

function Category({categoryName, data}: {categoryName: string, data:any}) {
  return (
    <>
    <div className={"font-bold pt-4"}>
      {categoryName}

    </div>
      {data && data.map((tool : any) => {
        const { toolName, description, strikethrough, forSale, wanted } = tool
        return (
          <Tool
            key={toolName}
            toolName={toolName}
            description={description ? description : null}
            strikethrough={strikethrough ? strikethrough : null}
            forSale={forSale ? forSale : null}
            wanted={wanted ? wanted : null}
          />
        )

      })}
    </>
  )
  }

function Tool({toolName, description, strikethrough, forSale, wanted}: {toolName: string, description?: string, strikethrough?: boolean, forSale?: boolean, wanted?: boolean}) {
  return (
    <div className={strikethrough === true ? `line-through` : ''}>
      {toolName}
      {description && <span className={"text-zinc-500"}> {description}</span>}
      {forSale && <span className={"text-red-500"}>{` - FOR SALE`}</span>}
      {wanted && <span className={"text-green-500"}>{` - WANTED`}</span>}
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