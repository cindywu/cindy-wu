import { useEffect, useState } from "react";
import { Reflect } from "@rocicorp/reflect";
import { M, clientMutators } from "../../datamodel/mutators";
import { randUserInfo } from "../../datamodel/client-state";
import { workerWsURI } from "../../util/host";
import Note from "../../components/note";

export default function Home() {
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
    <Note reflect={reflect} />
  );
}