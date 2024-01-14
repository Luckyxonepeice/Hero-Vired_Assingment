import React, { useState } from 'react';
import Firstrow from './Firstrow'
import Secondrow from './Secondrow'
import Thirdrow from './Thirdrow';
import Button from '@mui/material/Button';
const Form = () => {
  const [formData, setFormData] = useState({
    program_id: '',
    name: '',
    price: '',
    domain: '',
    program_type: '',
    registrations_status: 'Open',
    description: '',
    placement_assurance: false,
    image_url: '',
    university_name: '',
    learning_hours: '',
    duration: '',
    certificate_diploma: '',
    eligibility_criteria: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., API call to save data)
    console.log('Form submitted:', formData);
  };

  // Generate dropdown options for Price

  return (
    <div className="programs-form-container">
      <form onSubmit={handleSubmit}>
        <Firstrow handleChange={handleChange} formData={formData} />
        <Secondrow handleChange={handleChange} formData={formData} />
        <Thirdrow handleChange={handleChange} formData={formData} />
        {/* Row 4: Learning Hours, Duration, Certificate/Diploma */}
        <div className="form-row">
          <label>
            Learning Hours:
            <input
              type="text"
              name="learning_hours"
              value={formData.learning_hours}
              onChange={handleChange}
            />
          </label>
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
        </div>

        {/* Row 5: Eligibility Criteria */}
        <div className="form-row">
          <label>
            Eligibility Criteria:
            <input
              name="eligibility_criteria"
              value={formData.eligibility_criteria}
              onChange={handleChange}
            />
          </label>
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
        <Button variant="outlined">Outlined</Button>
        
      </form>
    </div>
  );
};

export default Form;
