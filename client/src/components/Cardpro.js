import React from 'react'
import ProgramList from './Programlist'
import SearchBar from './SearchBar'
export default function Cardpro() {
  return (
    <div className="program-items">
        <SearchBar/>
        <ProgramList/>
    </div>
  )
}
