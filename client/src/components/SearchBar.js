import React, { useState } from "react";
import ProgramList from "./Programlist";
import Draftdata from './Draftdata';
function SearchBar({handleChange,data,draftData,showDraft}) {
  // console.log(handleProgramClick)

  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    // Convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const searchStyle = {
    display: "inline-block",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const inputStyle = {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "24px",
    outline: "none",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "#4285F4",
    marginRight: "10px",
  };

  return (
    <div style={{marginLeft:'0px'}}className="main">
      <h1 style={{marginLeft:"20px",marginBottom:"0px"}}className="search-h1">Search</h1>
      <div style={searchStyle}>
        <i style={iconStyle} className="fab fa-google"></i>
        <input
          id="outlined-basic"
          style={inputStyle}
          onChange={inputHandler}
          placeholder="Search Program"
        />
      </div>
      <h2 style={{marginBottom:'0px'}}>List of Programs</h2>
      
      {showDraft?
      <Draftdata input={inputText} handleChange={handleChange} draftData={draftData}/>:
      <ProgramList input={inputText} handleChange={handleChange} data={data}/>}
    </div>
  );
}

export default SearchBar;
