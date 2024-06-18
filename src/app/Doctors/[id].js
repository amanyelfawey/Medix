"use client"

// pages/doctor/[id].js

import { useRouter } from 'next/navigation';

export default function DoctorProfile({ doctor }) {
  const router = useRouter();
  const { id } = router.query;

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{doctor.name}</h1>
      <img src={doctor.image} alt={doctor.name} />
      <p>Speciality: {doctor.speciality}</p>
      <p>Wage: {doctor.wage} EGP</p>
      <p>Address: {doctor.address}</p>
      <p>Phone: {doctor.phone}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://154.38.186.138:5000/api/Doctors/GetDoctor/specilization/${id}`);
  const doctor = await res.json();

  return {
    props: {
      doctor,
    },
  };
}
