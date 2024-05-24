

'use client'

'ClientPageRoot'

import axios from 'axios';

export default async function DentistsPage() {
  const response = await axios.get('http://154.38.186.138:5000/api/Doctors');
  const doctors = response.data;

  // console.log(doctors); // This will log the data on the server side

  return (
    <div>
       <h1>Doctor List</h1>
      <ul className='text-primary text-2xl '>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul> 
    </div>
  );
}