

import React from 'react'
import axios from 'axios';

export default async function page() {

    const response = await axios.get('http://154.38.186.138:5000/api/Doctors');
  const doctors = response.data;
  console.log(doctors);

  
  return (
    <div>
      <h1>Doctor List</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
        
       </ul>  
    </div>
  )
}
