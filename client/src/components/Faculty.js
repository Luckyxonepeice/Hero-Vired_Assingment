import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

export default function FacultyDropdown({ formData, handleChange }) {
  const facultyOptions = ['Faculty A', 'Faculty B', 'Faculty C', 'Faculty D', 'Faculty some'];

  function OnSelect(selectedList, selectedItem) {
    console.log(selectedItem, selectedList);
  }

  function OnRemove(selectedList, selectedItem) {
    console.log(selectedItem, selectedList);
  }

  return (
    <div className='faculty-dropbox'>
  <div className='faculty-row'>
    <label>Faculty</label>
    <Multiselect
      isObject={false}
      onRemove={OnRemove}
      onSelect={OnSelect}
      onSearch={function noRefCheck(){}}
      options={facultyOptions}
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
