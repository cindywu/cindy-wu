import { useState, useEffect } from 'react'
import { Reflect } from "@rocicorp/reflect";
import { M, clientMutators } from "../datamodel/mutators";
import Home from '../components/home'
import { randUserInfo } from "../datamodel/client-state";
import { workerWsURI } from "../util/host";

export default function Index() {
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

  return (
    <Home reflect={reflect}/>
  )
}
