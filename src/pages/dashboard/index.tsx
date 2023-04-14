import React, { useState, useEffect } from 'react'

// ready, error, queued, build, cancelled

const data = [
  {
    id: 1,
    name: "name",
    url: "https://url.com",
    status: "ready",
    time: "2 days ago"
  },
  {
    id: 2,
    name: "name2",
    url: "https://thing.com",
    status: "error",
    time: "3 days ago"
  }
]

// set of named values
const filterType : any = {
  ready: {
    name: "ready",
    displayName: "Ready",
    count: 1,
    color: "green"
  },
  error: {
    name: "error",
    displayName: "Error",
    count: 1,
    color: "red"
  },
  all: {
    name: "all",
    displayName: "All",
    count: 1,
    color: "grey"
  }
}

type FilterTypeType = {
  name: string,
  displayName: string,
  count: number,
  color: string
}

export default function Dashboard() {
  const [status, setStatus] = useState<FilterTypeType>(filterType.ready)
  const [cardData, setCardData] = useState<any[]>(data)

  useEffect(() => {
    if (status.name === "all") {
      setCardData(data)
    } else {
      const filteredCardData = data.filter(data => data.status === status.name)
      setCardData(filteredCardData)
    }
  }, [status])

  return (
    <div>
      <Nav
        handleSetStatus={setStatus}
      />
      <DeploymentCardList deploymentCardData={cardData}/>
    </div>
  )
}

function Nav({handleSetStatus}: any){
  const thing = Object.entries(filterType)

  return(
    <div className={"m-4 flex justify-between"}>
      <div className={"text-2xl"}>Preview Deployments</div>
      <div>
        {Object.keys(filterType).map((key) => (
          <div key={key}>
            {filterType[key] ? filterType[key].name : 'nothing'}

          </div>
        ))}

        {/* {{
          return (
          for (type in filterType) {
            return (
              <div>hi</div>
            )
          })
        }} */}
        {/* <div onClick={() => handleSetStatus(filterType.all)}>all</div>
        <div onClick={() => handleSetStatus(filterType.ready)}>ready</div>
        <div onClick={() => handleSetStatus(filterType.error)}
        >error</div> */}
      </div>

    </div>
  )
}

function DeploymentCardList({deploymentCardData}: any) {
  return (
    <>
      {deploymentCardData.map((data : any) => {
        return (
          <DeploymentCard
            key={data.id}
            name={data.name}
            url={data.url}
            status={data.status}
            time={data.time}
          />
        )
      })}
    </>
  )

}

function DeploymentCard({name, url, status, time}: any) {
  return (
    <div className="border-2 p-2 m-4">
      <div className="flex">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">URL: {url}</p>
        <p className="card-text">Status: {status}</p>
        <p className="card-text">Time: {time}</p>
      </div>
    </div>
  );

}

