import React from 'react'
import useSWR from 'swr'

const fetcher = () => fetch('/api/rs').then((res) => res.json())

export default function ReadingSupply() {

  const { data, error, isLoading } = useSWR('/api/rs', fetcher)

  return (
    <div className={"bg-stone-800 p-4 min-h-screen"}>
      {isLoading ?
      <div>loading</div>
      :
      <Post
        data={data.posts}
      />
      }
    </div>
  )
}

function Post({data}: {data: any}) {
  const items : any[] = []
  for (var i in data) {
    items.push([i, data[i]])
  }
  return (
    <div className={"max-w-lg bg-stone-800"}>
      <div className={"py-4 text-2xl"}>{items[1][1].data.title}</div>
      <div className={"whitespace-pre-line"}>{items[1][1].content}</div>
    </div>
  )
}
