import React from 'react'

export default function Firstrow({formData,handleChange}) {
  return (
    <div>
              {/* Row 2: Registrations Status, Description, Placement Assurance */}
              <div className="form-row">
            <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label className="program-type-label">
          Program Type:
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="program_type"
                value="FT"
                checked={formData.program_type === 'FT'}
                onChange={handleChange}
              />
              FT
            </label>
            <label>
              <input
                type="radio"
                name="program_type"
                value="PT"
                checked={formData.program_type === 'PT'}
                onChange={handleChange}
              />
              PT
            </label>
          </div>
        </label>
          <label>
            Registrations Status:
            <select  name="registrations_status" value={formData.registrations_status} onChange={handleChange}>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </label>
        </div>
    </div>
  );
}
