import React,{useState} from 'react'
import Form from './components/Form'
import Cardpro from './components/Cardpro'


export default function Enroll_page() {

  const [selectedProgram, setSelectedProgram] = useState({
    program_id: null,
    name: "",
    price: 50000,
    domain: "Data Analytics",
    program_type: "",
    registrations_status: "open",
    description: "",
    placement_assurance: false,
    image_url: "",
    university_name: "",
    learning_hours: 0,
    duration: "",
    certificate_diploma: "Certificate",
    eligibility_criteria: "",
  });

  const handleProgramClick = (program) => {
    program.price=Number(program.price);
    //console.log(program);
    setSelectedProgram(program);
  };


  return (
    <div>
      <Cardpro handleProgramClick={handleProgramClick}/>
      <Form input={selectedProgram}/>
    </div>
  )
}
