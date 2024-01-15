import React, { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';


export default function FacultyDropdown({ faculty_id,faculty, setFaculty_id}) {

  
  const data  = faculty.map((ele)=>{
    return {id:ele.faculty_id,name:ele.name};
  })
  let selectedData=[]
  if (faculty_id.length) {
    selectedData = data.map((ele) => {

      return faculty_id.includes(ele.id)
    })
  }

  function OnSelect(selectedList, selectedItem) {
    const list = selectedList.map((ele)=>{
      return ele.id;
    })
    setFaculty_id(list)
  }

  function OnRemove(selectedList, selectedItem) {
    const list = selectedList.map((ele)=>{
      return ele.id;
    })
    setFaculty_id(list)
    
  }

  return (
    <div className='faculty-dropbox'>
  <div className='faculty-row'>
    <label>Faculty</label>
    <Multiselect
      displayValue='name'
      onRemove={OnRemove}
      onSelect={OnSelect}
      onSearch={function noRefCheck(){}}
      options={data}
      style={{
        multiselectContainer: {
          width: '350px', // Adjust the width as needed
          height: '35px', // Adjust the height as needed
          fontSize: '14px',
          border: '1px solid #000000',
          borderRadius:'3px'
        },
        searchBox: {
          border: 'none',
          borderBottom: '1px solid #aaa',
          height: '35px',
        },
      }}
    />
  </div>
</div>

  );
}
