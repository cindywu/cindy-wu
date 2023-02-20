import React, { useEffect, useState } from 'react'

export default function ReadingSupply() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/rs')
      .then((res) => res.json())
      .then((data) => {
        const result = []
        for (var i in data.posts) {
          result.push([i, data[i]])
        }
        setData(result)
        setLoading(false)
      })
  }, [])

  console.log({data})
  console.log('typeof.data', typeof data)

  return (
    loading ? <div>Loading...</div> :
    <div>
      {data && data.map((post :any) => {
        return (
          <div key={post[0]}>
            <div>{post[0]}</div>
            <div>{post.url}</div>
          </div>
        )
      })}
    </div>
  )
}
