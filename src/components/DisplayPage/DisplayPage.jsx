import React from 'react'
import {useParams} from "react-router-dom"

function DisplayPage() {
  console.log("This Runs")
  const {rId} = useParams()
  return (
    <div>{rId}</div>
  )
}

export default DisplayPage