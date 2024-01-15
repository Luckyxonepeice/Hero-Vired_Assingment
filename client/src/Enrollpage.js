import React, { useState } from 'react';
import Form from './components/Form';
import Cardpro from './components/Cardpro';
import { CiCirclePlus } from "react-icons/ci";
import Button from '@mui/material/Button';
import { MdDrafts } from "react-icons/md";

const default_data = {
  program_id: null,
  name: '',
  price: 50000,
  domain: 'Data Analytics',
  program_type: '',
  registrations_status: 'open',
  description: '',
  placement_assurance: false,
  image_url: '',
  university_name: '',
  learning_hours: 0,
  duration: '',
  certificate_diploma: 'Certificate',
  eligibility_criteria: '',
};

export default function Enroll_page() {
  const [editMode, setEditMode] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState({ ...default_data });
  const [show,setShow]=useState(false);
  const [showDraft, setShowDraft] = useState(false);

  const handleProgramClick = (program) => {
    program.price = Number(program.price);
    setSelectedProgram(program);
    setEditMode(false);
    setShow(true);
    
  };

  const handleCreateClick = () => {
    setSelectedProgram({ ...default_data });
    setEditMode(true);
    setShow(true)
  };
  const handleDraftToggle = () => {
    setShowDraft(!showDraft); // Toggle the showDraft state
  };

  return (
    <div>
      
      <CiCirclePlus onClick={handleCreateClick}
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '50px', // Increase the size as needed
        color: 'blue',
        cursor: 'pointer'
      }} 
      />
      <Cardpro handleProgramClick={handleProgramClick} showDraft={showDraft}/>
      <Button onClick={handleDraftToggle} 
      style={{
        position: 'absolute',
        top: '18px',
        right: '90rem', // Adjust the right position to your preference
        padding: '8px',
        backgroundColor:'white',
        color: showDraft ? 'grey' : 'green',
        border: 'solid',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}>
          {showDraft?'Draft':'Program'}<MdDrafts />
      </Button>
      {show && (
        <Form
          input={selectedProgram}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
    </div>
  );
}