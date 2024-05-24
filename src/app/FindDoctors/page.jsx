
"use client"
import Link from 'next/link';
import { MapPin, Phone, Stethoscope,CircleDollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FindDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch('http://154.38.186.138:5000/api/Doctors');
      const data = await res.json();
      setDoctors(data);
    }

    fetchDoctors();
  }, []);

  return (
    <div className='container'>
      <h1 className='text-center font-bold text-3xl m-5 text-primary'>Find The Best Doctor</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

function DoctorCard({ doctor }) {
  return (
    <>
    <div  className='border m-10 px-4  mx-auto transform transition duration-500 hover:scale-110 '> 
      {/* <img src={doctor.image || '/default-image.jpg'} alt={doctor.name} style={imageStyle} /> */}
      <img src={'/DR.png'} alt={doctor.name}  className='mb-3 w-[200px]'/>
      <h2 className='text-lg font-bold text-primary'>DR. {doctor.name}</h2>
      <p className='text-md flex gap-2 m-3 text-lg text-gray-600'><span className='text-secondary'><Stethoscope /></span>Speciality: {doctor.speciality}</p>
      <p className='text-md flex gap-2 m-3 text-lg text-gray-700'> <span className='text-secondary'><CircleDollarSign/></span> Wage: {doctor.wage} EGP</p>
      <p className='text-md flex gap-2 m-3 text-lg text-gray-600'><span className='text-secondary'><MapPin /></span>   Address: {doctor.address}</p>
      <Link href={`/FindDoctors/${doctor.id}`} >
        <button className='bg-primary rounded-full text-white p-2 hover:bg-secondary mb-3 ml-20'  >Get Appointment</button>
      </Link>
      
    </div>
    
    </>
  );
}

// 



// "use client"
// import Link from 'next/link';
// import { MapPin, Phone, Stethoscope, CircleDollarSign } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export default function FindDoctor() {
//   const [doctors, setDoctors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [speciality, setSpeciality] = useState('');
//   const [specialities, setSpecialities] = useState([]);

//   useEffect(() => {
//     async function fetchDoctors() {
//       let url = 'http://154.38.186.138:5000/api/Doctors';
//       if (speciality) {
//         url += `/GetDoctor/specilization?speciality=${speciality}`;
//       }
//       const res = await fetch(url);
//       const data = await res.json();
//       setDoctors(data);
//     }

//     async function fetchSpecialities() {
//       const res = await fetch('http://154.38.186.138:5000/api/Doctors/GetDoctor/specilization');
//       const data = await res.json();
//       setSpecialities(data);
//     }

//     fetchDoctors();
//     fetchSpecialities();
//   }, [speciality]);

//   const handleSearch = async () => {
//     const res = await fetch(`http://154.38.186.138:5000/api/Doctors/SearchDoctor/Name?name=${searchTerm}`);
//     const data = await res.json();
//     setDoctors(data);
//   };

//   const handleFilter = (speciality) => {
//     setSpeciality(speciality);
//   };

//   return (
//     <div className='container'>
//       <h1 className='text-center font-bold text-3xl m-5 text-primary'>Search For a Doctor</h1>
//       <div className='flex justify-center mb-4'>
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className='border p-2 rounded-l-lg'
//         />
//         <button onClick={handleSearch} className='bg-primary text-white p-2 rounded-r-lg'>Search</button>
//       </div>
//       <div className='flex justify-center mb-4'>
//         <select
//           value={speciality}
//           onChange={(e) => handleFilter(e.target.value)}
//           className='border p-2 rounded-lg'
//         >
//           <option value="">Select Speciality</option>
//           <option value="Orthopedics">Orthopedics</option>
//           <option value="Dentistry">Dentistry</option>
//           <option value="Dermatology">Dermatology</option>
//           <option value="Cardiology">Cardiology</option>
//         </select>
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {Array.isArray(doctors) && doctors.map((doctor) => (
//           <DoctorCard key={doctor.id} doctor={doctor} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function DoctorCard({ doctor }) {
//   return (
//     <div className='border m-10 px-4 mx-auto transform transition duration-500 hover:scale-110'>
//       <img src={'/DR.png'} alt={doctor.name} className='mb-3 w-[200px]' />
//       <h2 className='text-lg font-bold text-primary'>DR. {doctor.name}</h2>
//       <p className='text-md flex gap-2 m-3 text-lg text-gray-600'>
//         <span className='text-secondary'><Stethoscope /></span>Speciality: {doctor.speciality}
//       </p>
//       <p className='text-md flex gap-2 m-3 text-lg text-gray-700'>
//         <span className='text-secondary'><CircleDollarSign /></span> Wage: {doctor.wage} EGP
//       </p>
//       <p className='text-md flex gap-2 m-3 text-lg text-gray-600'>
//         <span className='text-secondary'><MapPin /></span>   Address: {doctor.address}
//       </p>
//       <Link href={`/FindDoctors/${doctor.id}`} >
//         <button className='bg-primary rounded-full text-white p-2 hover:bg-secondary mb-3 ml-20'>Get Appointment</button>
//       </Link>
//     </div>
//   );
// }


