


"use client";
import Image from 'next/image';
import { MapPin, Phone, Stethoscope, CircleDollarSign, BookAIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BookAppointment from '../_component/BookAppointment';

export default function Details({ params }) {
  const [doctor, setDoctor] = useState(null);
  const [suggestedDoctors, setSuggestedDoctors] = useState([]);
  const { recordId } = params;

  useEffect(() => {
    if (!recordId) return;
    getDoctorById(recordId);
    getSuggestedDoctors();
  }, [recordId]);

  const getDoctorById = async (id) => {
    try {
      const res = await fetch(`http://154.38.186.138:5000/api/Doctors/${id}`);
      if (!res.ok) throw new Error(`Error fetching doctor details: ${res.statusText}`);
      const data = await res.json();
      setDoctor(data);
    } catch (error) {
      console.error('Error fetching doctor details:', error);
    }
  };

  const getSuggestedDoctors = async () => {
    try {
      const res = await fetch('http://154.38.186.138:5000/api/Doctors');
      if (!res.ok) throw new Error(`Error fetching suggested doctors: ${res.statusText}`);
      const data = await res.json();
      setSuggestedDoctors(data);
    } catch (error) {
      console.error('Error fetching suggested doctors:', error);
    }
  };

  if (!doctor) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold mt-10 text-4xl text-primary'>Doctor Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='col-span-3'>
          <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
            <div>
              <img src={doctor.image || '/DR.png'} alt={doctor.name} className='rounded-lg w-80 h-full object-cover' />
            </div>
            <div className='col-span-2 mt-6 flex flex-col gap-3 md:px-10 items-baseline'>
              <h2 className='font-bold text-2xl text-primary'>DR. {doctor.name}</h2>
              <h2 className='flex gap-2 text-2xl text-secondary'>
                <MapPin />
                <span className='text-gray-700'>{doctor.address}</span>
              </h2>
              <h2 className='text-md flex gap-2 text-xl text-secondary'>
                <Phone />
                <span className='text-gray-700'>{doctor.phone}</span>
              </h2>
              <h2 className='text-md flex gap-2 text-xl text-secondary'>
                <CircleDollarSign />
                <span className='text-gray-700'>{doctor.wage}/Hr</span>
              </h2>
              <h2 className='flex gap-2 text-secondary'>
                <Stethoscope />
                <span className='text-[15px] bg-secondary px-5 py-1 rounded-full text-gray-800'>{doctor.speciality}</span>
              </h2>
              
              <BookAppointment/>
            </div>
          </div>
          <div className='p-3 border-[1px] rounded-lg mt-5'>
            <h2 className='font-bold text-[20px] text-primary'>About Me</h2>
            <p>{doctor.bio || "No bio available."}</p>
          </div>
        </div>
        <div className='col-span-1 pl-5'>
          <h2 className='font-bold text-[25px] mb-5 text-secondary'>Suggested Doctors</h2>
          <div className='suggested-doctors-container overflow-y-auto max-h-[80vh]'>
            {suggestedDoctors.map((suggestedDoctor) => (
              <div key={suggestedDoctor.id} className='border-[1px] p-3 rounded-lg'>
                <img src={suggestedDoctor.image || '/DR.png'} alt={suggestedDoctor.name} className='rounded-lg w-60 h-full object-cover' />
                <h3 className='font-bold text-xl pt-2 text-primary'>DR. {suggestedDoctor.name}</h3>
                <h2 className='flex gap-2 text-secondary py-1'>
                  <Stethoscope />
                  <span className='text-[18px] px-2 text-gray-800'>{suggestedDoctor.speciality}</span>
                </h2>
                <h2 className='flex gap-2 text-secondary py-1'>
                  <MapPin />
                  <span className='text-[18px] px-2 text-gray-800'>{suggestedDoctor.address}</span>
                </h2>
                <Link href={`/FindDoctors/${suggestedDoctor.id}`}>
                  <Button className="mt-2 rounded-full text-white">View Profile</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




