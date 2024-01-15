import React from 'react'
import Faculty from './Faculty'

export default function Thirdrow({formData,handleChange,faculty,setFaculty_id}) {
  
  return (
    <div>
      {/* Row 3: Image URL, University Name */}
      <div className="form-row">
          <label>
            University Name:
            <input
              type="text"
              name="university_name"
              value={formData.university_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Certificate/Diploma:
            <select
              name="certificate_diploma"
              value={formData.certificate_diploma}
              onChange={handleChange}
            >
              <option value="Certificate">Certificate</option>
              <option value="Diploma">Diploma</option>
              {/* Add more options as needed */}
            </select>
          </label>

          <Faculty faculty={faculty} setFaculty_id={setFaculty_id} />
        </div>
    </div>
  )
}
