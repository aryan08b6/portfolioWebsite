import React from 'react'
import {useParams} from "react-router-dom"
import { useLocation } from 'react-router-dom';

function DisplayPage() {
  const location = useLocation();
  const { resourceData } = location.state || {};
  const {title, content, type, img, tags, worthIt, rating, links=[{}]} = resourceData
  console.log("This Runs")
  const {rId} = useParams()
  return (
    <div>
      <h1 className='text-3xl my-4 bg-teal-400 w-3/4 mx-auto text-center'>{title}</h1>
      <div className="h-8 overflow-auto my-2">
          {tags.map((tag, index) => (
            <span
              key={index} // Important for React's reconciliation
              className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
            >
              {tag}
            </span>
          ))}
        </div>
      <img className='rounded-xl mx-auto my-4' src={img} alt="thumbnail" />
      <p className='w-7/8'>{content}</p>
      <h1><span className='font-bold'>Rating: </span> {rating} </h1>
      <br />
      <h1><span className='font-bold'>Worth Watching: </span>  {worthIt ? "Yes" : "No"}</h1>
      <hr className='w-1/2 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700'/>
      <h1 className='mt-6 font-bold text-3xl'>Resources </h1>
      {
        links.map((item, index) => (
          <div className='flex flex-row'>
            <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayPage