import React,{useEffect,useState} from 'react'
import ProgramList from './Programlist'
import SearchBar from './SearchBar'

export default function Cardpro({handleProgramClick}) {

//  console.log(handleProgramClick)
  function handleChange(program){
    handleProgramClick(program)
  }
  return (
    <div className="program-items">
        <SearchBar handleChange={handleChange}/>
        <ProgramList />
    </div>
  )
}
