
// "use client"
// import Link from 'next/link';
// import { MapPin, Phone, Stethoscope, CircleDollarSign } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export default function FindDoctor() {
//   const [doctors, setDoctors] = useState([]);
//   const [search, setSearch] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [filteredDoctors, setFilteredDoctors] = useState([]);

//   useEffect(() => {
//     async function fetchDoctors() {
//       const res = await fetch('http://154.38.186.138:5000/api/Doctors');
//       const data = await res.json();
//       setDoctors(data);
//       setFilteredDoctors(data);
//     }

//     fetchDoctors();
//   }, []);

//   const handleSearch = async () => {
//     let url = 'http://154.38.186.138:5000/api/Doctors';

//     if (specialization) {
//       url += `/GetDoctor/${specialization}`;
//     } else if (search) {
//       url += `/SearchDoctor/${search}`;
//     }

//     const res = await fetch(url);
//     const data = await res.json();
//     setFilteredDoctors(data);
//   };

//   return (
//     <div className='container'>
//       <h1 className='text-center font-bold text-3xl m-5 text-primary pt-5'>Find The <span className='text-secondary'>Best Doctor</span> </h1>
//       <div className='flex justify-center mb-5'>
//         <input
//           type='text'
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder='Search by name...'
//           className='border p-2 rounded-l-md'
//         />
//         <select
//           value={specialization}
//           onChange={(e) => setSpecialization(e.target.value)}
//           className='border p-2'
//         >
//           <option value=''>All Specializations</option>
//           <option value='Dentist'>Dentistry</option>
//           <option value='Cardiologist'>Cardiology</option>
//           <option value='Physiotherapist'>Physiotherapy</option>
//           <option value='Dermatologist'>Dermatology</option>
//         </select>
//         <button
//           onClick={handleSearch}
//           className='bg-primary text-white p-2 rounded-r-md hover:bg-secondary'
//         >
//           Search
//         </button>
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {filteredDoctors.map((doctor) => (
//           <DoctorCard key={doctor.id} doctor={doctor} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function DoctorCard({ doctor }) {
//   return (
//     <div className='border m-10 px-4 mx-auto transform transition duration-500 hover:scale-110 flex flex-col items-center'>
//       {/* <img src={'/DR.png'} alt={doctor.name} className='mb-3 w-[200px]' /> */}
//       <img src={doctor.image || '/DR.png'} alt={doctor.name} className='mb-3 w-[230px] h-[250px]'/>
//       <h2 className='text-lg font-bold text-primary'>DR. {doctor.name}</h2>
//       <p className='text-md flex gap-2 m-3 text-lg text-gray-600'>
//         <span className='text-secondary'>
//           <Stethoscope />
//         </span>
//         Speciality: {doctor.speciality}
//       </p>
//       <p className='text-md flex gap-2 m-3 text-lg text-gray-700'>
//         <span className='text-secondary'>
//           <CircleDollarSign />
//         </span>
//         Wage: {doctor.wage} EGP
//       </p>
//       <p className='text-md flex gap-2 m-3 text-lg text-gray-600'>
//         <span className='text-secondary'>
//           <MapPin />
//         </span>
//         Address: {doctor.address}
//       </p>
//       <Link href={`/FindDoctors/${doctor.id}`}>
//         <button
//           className='bg-primary rounded-full text-white p-2 hover:bg-secondary mb-3'
//           style={{ marginLeft: 'auto', marginRight: 'auto' }}
//         >
//           Get Appointment
//         </button>
//       </Link>
//     </div>
//   );
// }




"use client";
import Link from 'next/link';
import { MapPin, Phone, Stethoscope, CircleDollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FindDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch('http://154.38.186.138:5000/api/Doctors');
      const data = await res.json();
      setDoctors(data);
      setFilteredDoctors(data);
    }

    fetchDoctors();
  }, []);

  useEffect(() => {
    // Filter doctors based on the search input (case insensitive)
    if (search) {
      const filtered = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [search, doctors]);

  const handleSearch = async () => {
    let url = 'http://154.38.186.138:5000/api/Doctors';

    if (specialization) {
      url += `/GetDoctor/${specialization}`;
    } else if (search) {
      url += `/SearchDoctor/${search}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setFilteredDoctors(data);
  };

  return (
    <div className='container'>
      <h1 className='text-center font-bold text-3xl m-5 text-primary pt-5'>Find The <span className='text-secondary'>Best Doctor</span> </h1>
      <div className='flex justify-center mb-5'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search by name...'
          className='border p-2 rounded-l-md'
        />
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className='border p-2'
        >
          <option value=''>All Specializations</option>
          <option value='Dentist'>Dentistry</option>
          <option value='Cardiologist'>Cardiology</option>
          <option value='Physiotherapist'>Physiotherapy</option>
          <option value='Dermatologist'>Dermatology</option>
        </select>
        <button
          onClick={handleSearch}
          className='bg-primary text-white p-2 rounded-r-md hover:bg-secondary'
        >
          Search
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

function DoctorCard({ doctor }) {
  return (
    <div className='border m-10 px-4 mx-auto transform transition duration-500 hover:scale-110 flex flex-col items-center'>
      <img src={doctor.image || '/DR.png'} alt={doctor.name} className='mb-3 w-[230px] h-[250px]'/>
      <h2 className='text-lg font-bold text-primary'>DR. {doctor.name}</h2>
      <p className='text-md flex gap-2 m-3 text-lg text-gray-600'>
        <span className='text-secondary'>
          <Stethoscope />
        </span>
        Speciality: {doctor.speciality}
      </p>
      <p className='text-md flex gap-2 m-3 text-lg text-gray-700'>
        <span className='text-secondary'>
          <CircleDollarSign />
        </span>
        Wage: {doctor.wage} EGP
      </p>
      <p className='text-md flex gap-2 m-3 text-lg text-gray-600'>
        <span className='text-secondary'>
          <MapPin />
        </span>
        Address: {doctor.address}
      </p>
      <Link href={`/FindDoctors/${doctor.id}`}>
        <button
          className='bg-primary rounded-full text-white p-2 hover:bg-secondary mb-3'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          Get Appointment
        </button>
      </Link>
    </div>
  );
}
