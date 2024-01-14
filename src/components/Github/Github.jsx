import React from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div>Github Followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/aryan08b6')
  return response.json()
}
