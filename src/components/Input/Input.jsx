import { useState } from "react"
import "./Input.css"

export const Input = (props) => {
 
  return (
    <input {...props} type="search" className="weather-search-input" placeholder="Search for cities"/>
  )
}