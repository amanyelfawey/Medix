


// "use client";
// import React, { useEffect, useState } from 'react';
// import { MapPin, Stethoscope, CircleDollarSign, Calendar, Clock } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function Appointments({ patientId = 1 }) {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAppointments(patientId);
//   }, [patientId]);

//   const fetchAppointments = async (patientId) => {
//     try {
//       const res = await fetch(`http://154.38.186.138:5000/api/Appointments/patient?patient_id=${patientId}`);
//       if (!res.ok) throw new Error(`Error fetching appointments: ${res.statusText}`);
//       const data = await res.json();

//       // Fetch doctor details for each appointment
//       const appointmentsWithDoctors = await Promise.all(
//         data.map(async (appointment) => {
//           const doctor = await fetchDoctor(appointment.doctor_id);
//           return { ...appointment, doctor };
//         })
//       );

//       setAppointments(appointmentsWithDoctors);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setLoading(false);
//     }
//   };

//   const fetchDoctor = async (doctorId) => {
//     try {
//       const res = await fetch(`http://154.38.186.138:5000/api/Doctors/${doctorId}`);
//       if (!res.ok) throw new Error(`Error fetching doctor details: ${res.statusText}`);
//       const doctor = await res.json();
//       return doctor;
//     } catch (error) {
//       console.error('Error fetching doctor details:', error);
//       return {};
//     }
//   };

//   const cancelAppointment = async (appointmentId) => {
//     try {
//       const res = await fetch(`http://154.38.186.138:5000/api/Appointments/delete?appointment_id=${appointmentId}`, {
//         method: 'DELETE'
//       });
//       if (!res.ok) throw new Error(`Error deleting appointment: ${res.statusText}`);
//       setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
//         <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
//         <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
//       </div>
//     );
//   }

//   return (
//     <div className='p-5 md:px-20'>
//       <h2 className='font-bold mt-10 text-4xl text-primary'>My Appointments</h2>
//       <div className='grid grid-cols-1 gap-5 mt-5'>
//         {appointments.map(appointment => (
//           <div key={appointment.id} className='border-[1px] p-5 rounded-lg flex flex-col md:flex-row justify-between'>
//             <div className='flex flex-col md:flex-row gap-5'>
//               <img src={'/DR.png'} alt="Doctor" className='rounded-lg w-40 h-40 object-cover' />
//               <div className='flex flex-col gap-3'>
//                 <h2 className='font-bold text-2xl text-primary'>
//                   DR. {appointment.doctor?.name || "Unknown"}
//                 </h2>
//                 <h2 className='flex gap-2 text-xl text-secondary'>
//                   <MapPin />
//                   <span className='text-gray-700'>{appointment.doctor?.address || "Unknown"}</span>
//                 </h2>
//                 <h2 className='text-md flex gap-2 text-xl text-secondary'>
//                   <CircleDollarSign />
//                   <span className='text-gray-700'>{appointment.doctor?.wage ? `${appointment.doctor.wage}/Hr` : "N/A"}</span>
//                 </h2>
//                 <h2 className='flex gap-2 text-secondary'>
//                   <Stethoscope />
//                   <span className='text-[15px] bg-secondary px-5 py-1 rounded-full text-gray-800'>{appointment.doctor?.speciality || "Unknown"}</span>
//                 </h2>
//               </div>
//             </div>
//             <div className='flex flex-col gap-3 md:items-end'>
//               <h2 className='flex gap-2 text-xl text-secondary'>
//                 <Calendar />
//                 <span className='text-gray-700'>{appointment.date || "Unknown"}</span>
//               </h2>
//               <h2 className='flex gap-2 text-xl text-secondary'>
//                 <Clock />
//                 <span className='text-gray-700'>{appointment.time || "Unknown"}</span>
//               </h2>
//               <Button 
//                 className="mt-2 bg-red-500 text-white rounded-full"
//                 onClick={() => cancelAppointment(appointment.id)}
//               >
//                 Cancel
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client"
// import React, { useEffect, useState } from 'react'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import BookingList from './_components/BookingList'


// function MyAppointments() {



//     const {user}=user();
//     const [bookingList,SetBookingList]=useState([]);

//     useEffect(() => {
//         user&&getUserBookingList();
//     },[user])
//     const getUserBookingList=()=>{
//         //api
//     }


// const filterUserBooking=(type)=> {
//     const result=bookList.filter(item => 
//         type=='upcoming'? new Date(item.attribute.date)<=new Date()
//     )
//     return result;
// }

//   return (
//     <div className='px-4 sm:px-10 mt-10'>
//       <h2 className='font-bold text-2xl '>My Appointments</h2>
//       <Tabs defaultValue="upcoming" className="w-full">
//   <TabsList className="w-full justify-start mt-5">
//     <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
//     <TabsTrigger value="expired">Expired</TabsTrigger>
//   </TabsList>
//   <TabsContent value="upcoming">
//     <BookingList bookingList={filterUserBooking('upcoming')}/>
//   </TabsContent>
//   <TabsContent value="expired">
//   <BookingList bookingList={filterUserBooking('expired')}/>
//   </TabsContent>
// </Tabs>

//     </div>
//   )
// }

// export default MyAppointments
