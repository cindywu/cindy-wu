import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useStatuses } from '../datamodel/subscriptions'
import { Reflect } from "@rocicorp/reflect";

export default function Home() {
  const [showLastUpdated, setShowLastUpdated] = useState<boolean>(false)

  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"flex flex-col pb-4"}>
        <div className={"text-2xl font-medium"}>Cindy Wu</div>
        <ReflectDependentThing

        />
      </div>
      <div className={"flex-row font-light"}>
        <div className={"pt-3"}>I am <Link href="/what-i-am-looking-for">looking to build software full-time</Link> for someone else.</div>
        {/* <div className={"pt-3"}>In a past life I did science hatching sea-monkeys to feed to zebrafish for tuberculosis research, camped under the stars in the Eastern Washington sagebrush steppe counting insect galls, built DNA logic gates to silence genes, designed an anthrax therapeutic for the U.S. Army, and programmed immune cells for a universal vaccine.</div> */}
        <div className={"pt-3"}>A long time ago, I made an anthrax therapeutic for the U.S. Army and programmed immune cells for a universal vaccine.</div>
        <div className={"pt-3"}>For a decade I poured the entirety of my labor towards breathing life into <Link href="http://experiment.com">Experiment</Link> with my best friend Denny.
        </div>
        <div className={"pt-3"}>Until the end of 2022 I was building at <Link href="http://jellypbc.com">Jelly</Link> a local-first multiplayer reference manager as a foundation for a decentralized social network for science.</div>
        <div className={"pt-3"}>In 2023, I spent all my hours <Link href="/recurse">programming programs</Link> for the joy of programming at <Link href="https://recurse.com">The Recurse Center</Link>.</div>
        <div className={"pt-3"}>I was born in Seattle and grew up in Bellevue. My family immigrated to America from the island of Taiwan.</div>
        <div className={"pt-3"}>San Francisco and New York City are places I have called home. Today, the Kingdom of Haiwaiʻi is home.</div>
        <div className={"pt-3"}>I ride a {`9'2"`} Takayama DT-2 and a {`9'11"`} Byzak. You can find me at first light half a mile offshore of Waikīkī.</div>
        <div className={"pt-3"}>Currently I am training for a 2.8 mile open water swim.</div>

      </div>
      <div className={"flex font-light pt-4"}>
        <Thing
          text={"CV"}
          link={"https://read.cv/cindywu"}
        />
        <div className={"px-2"}>|</div>
        <Thing
          text={"Github"}
          link={"https://github.com/cindywu"}
        />
        <div className={"px-2"}>|</div>
        <Thing
          text={"Uses"}
          link={"/uses"}
        />
        <div className={"px-2"}>|</div>
        <Thing
          text={"Notes"}
          link={"/notes"}
        />
      </div>
    </div>
    </div>
  )
}

function Thing({text, link}: {text: string, link: string}) {
  return (
    <div>
      <Link
        // className={"no-underline hover:underline"}
        href={link}
      >
        {text}
      </Link>
    </div>
  )
}

import { M, clientMutators } from "../datamodel/mutators";
import { workerWsURI } from "../util/host";
import { randUserInfo } from "../datamodel/client-state";

function ReflectDependentThing(){

  const [reflect, setReflectClient] = useState<Reflect<M> | null>(null);
  const [, setOnline] = useState(false);

  useEffect(() => {
    const roomID = "cindy-wu-dot-com-notes";

    (async () => {
      const userID = "reflect-user";
      const r = new Reflect<M>({
        socketOrigin: workerWsURI,
        onOnlineChange: setOnline,
        userID,
        roomID,
        auth: JSON.stringify({
          userID,
          roomID,
        }),
        mutators: clientMutators,
      });

      const defaultUserInfo = randUserInfo();
      await r.mutate.initClientState({
        id: await r.clientID,
        defaultUserInfo,
      });

      setReflectClient(r);
    })();
  }, []);

  if (!reflect) {
    return null;
  }

  return(
    <div>
      <OtherThing reflect={reflect}/>
    </div>
  )
}

function OtherThing({reflect}: {reflect:any}){
  const statuses : any = useStatuses(reflect)
  const [showLastUpdated, setShowLastUpdated] = useState<boolean>(false)
  return(
    <div>
      {statuses && statuses[0] && statuses[0][1] &&
        <div className={"text-sm font-normal pt-1 text-zinc-500"}>
          <span
            className={"cursor-pointer"}
            onMouseOver={() => {setShowLastUpdated(true)}}
            onMouseLeave={() => {setShowLastUpdated(false)}}
          >is {statuses[0][1].content}.</span>
          { showLastUpdated && <span className={'pl-2'}>(last seen {
            parseInt((((new Date() as any) - (new Date(statuses[0][1].date) as any)) as any)/1000/60 as unknown as any)
          } min ago)</span>}
        </div>
      }
    </div>
  )
}

