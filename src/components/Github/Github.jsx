import React from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div>
      <img className='mx-auto my-4' src={data.avatar_url} alt="Github Avatar" />
      <h1 className='text-center'>Github Followers: {`${data.followers} Consider Giving a Follow :)`}</h1>
      <div className='mx-auto text-center'>
        <a href={data.html_url} target="_blank" rel="noreferrer">Github URL</a>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/aryan08b6')
  return response.json()
}
