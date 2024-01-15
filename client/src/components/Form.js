import React, { useEffect, useState } from 'react';
import Firstrow from './Firstrow'
import Secondrow from './Secondrow'
import Thirdrow from './Thirdrow';
import Button from '@mui/material/Button';
import { getFaculty,createFaculty } from '../Api/programs';


const Form = ({input}) => {


  const [formData, setFormData] = useState({...input});

 
  const [faculty,setFaculty] = useState([]);
  const [faculty_id,setFaculty_id]=useState([]);


  async function  facultyList(){
     const result = await getFaculty();
     setFaculty(result);
  }
  useEffect(()=>{
    facultyList();
  },[]);
  useEffect(() => {
    // Update formData whenever the input prop changes
    setFormData({ ...input });
  }, [input]);

 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("!!");
    e.preventDefault();
    const response = await createFaculty(formData, faculty_id);
    console.log(response);
    
  };

  // Generate dropdown options for Price

  return (
    <div className="programs-form-container">
      <form onSubmit={handleSubmit}>
        <Firstrow handleChange={handleChange} formData={formData} />
        <Secondrow handleChange={handleChange} formData={formData} />
        <Thirdrow handleChange={handleChange} formData={formData} 
        faculty={faculty} setFaculty_id={setFaculty_id} />
        {/* Row 4: Learning Hours, Duration, Certificate/Diploma */}
        <div className="form-row">
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </label>
          <label>
            Eligibility Criteria:
            <input
              name="eligibility_criteria"
              value={formData.eligibility_criteria}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Row 5: Eligibility Criteria */}
        <div className="form-row">
          
          <label style={{ display: 'block', width: '150px', marginBottom: '5px' }}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            cols={25}
            style={{ width: '300px', resize: 'none', margin: '5px 0' }}
          />
          </label>
          
        </div>
        {/* <Button variant="outlined">Outlined</Button> */}
        <div className="form-row">
          <Button onSubmit={handleSubmit}
          type="submit" variant="outlined">
            Save
          </Button>
        </div>
        
      </form>
    </div>
  );
};

export default Form;
