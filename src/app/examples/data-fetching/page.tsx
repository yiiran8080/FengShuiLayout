
'use client'
import { useEffect, useState } from 'react'

export default function DataFetchingPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data')
      const result = await response.json()
      setData(result)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
