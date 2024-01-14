import React from 'react'

export default function Firstrow({formData,handleChange}) {
  const priceOptions = [ 50000, 100000, 150000, 200000, 250000, 300000 ];
  const domainOptions = [
    'Data Analytics',
    'Machine Learning',
    'Artificial Intelligence',
    'Big Data',
    'Data Engineering',
  ];
  return (
    <div>
      {/* Row 1: Program ID, Name, Price, Domain, Program Type */}
      <div className="form-row">
        <label>
          Price:
          <select  name="price" value={formData.price} onChange={handleChange}>
            {priceOptions.map((option) => (
              <option key={option} value={option}>
                {`₹ ${option}`}
              </option>
            ))}
          </select>
        </label>
        <label>
          Domain:
          <select name="domain" value={formData.domain} onChange={handleChange}>
            {domainOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="placement-assurance-label">
          Placement Assurance:
          <input
            type="checkbox"
            name="placement_assurance"
            checked={formData.placement_assurance}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}
