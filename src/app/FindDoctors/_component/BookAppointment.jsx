"use client"




import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import { Clock3 } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDays } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import axios from 'axios';

function BookAppointment() {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [doctorId] = useState(1); // replace with actual doctor ID
    const [patientId] = useState(1); // replace with actual patient ID
    const [showDialog, setShowDialog] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    useEffect(() => {
        getTime();
    }, []);

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push(`${i}:00 AM`);
            timeList.push(`${i}:30 AM`);
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push(`${i}:00 PM`);
            timeList.push(`${i}:30 PM`);
        }
        setTimeSlot(timeList);
    };

    const handleSubmit = async () => {
        if (!date || !selectedTime) {
            setAlert({ show: true, type: 'error', message: 'Please select a date and time.' });
            setShowDialog(false);
            return;
        }

        const [time, period] = selectedTime.split(' ');
        let [hour, minute] = time.split(':').map(Number);
        if (period === 'PM' && hour !== 12) hour += 12;
        if (period === 'AM' && hour === 12) hour = 0;

        const appointmentData = {
            DoctorId: doctorId,
            PatientId: patientId,
            Year: date.getFullYear(),
            Month: date.getMonth() + 1,
            Day: date.getDate(),
            Hour: hour,
            Minute: minute,
        };

        try {
            const response = await axios.post('http://154.38.186.138:5000/api/Appointments', appointmentData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                setAlert({ show: true, type: 'success', message: 'Appointment booked successfully!' });
                setShowDialog(false); // Close the dialog
            } else {
                setAlert({ show: true, type: 'error', message: 'Failed to book appointment.' });
                setShowDialog(false);
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setAlert({ show: true, type: 'error', message: 'Error booking appointment.' });
        }
    };

    return (
        <div>
            <Dialog open={showDialog} onOpenChange={setShowDialog} className="bg-white">
                <DialogTrigger>
                    <Button onClick={() => setShowDialog(true)} className="mt-3  rounded-full text-white">
                        Book Appointment
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-white max-w-lg md:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-primary text-center text-xl py-5">Book Appointment</DialogTitle>
                        <DialogDescription>
                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    {/* Calendar */}
                                    <div className='flex flex-col items-baseline gap-3'>
                                        <h2 className='flex text-secondary'>
                                            <CalendarDays />
                                            <span className='text-gray-700 px-2 text-lg'> Select Date</span>
                                        </h2>
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            className="rounded-md border"
                                        />
                                    </div>

                                    {/* Time slot */}
                                    <div className='flex flex-col items-baseline gap-3'>
                                        <div className='flex'>

                                        <h2 className='text-secondary text-lg mb-2 flex'> <Clock3 />
                                        <span className='text-gray-700 px-2 text-lg'>Select Time </span></h2>
                                        </div>
                                        
                                        <div className='flex flex-wrap gap-2'>
                                            {timeSlot.map((slot, index) => (
                                                <Button
                                                    key={index}
                                                    onClick={() => setSelectedTime(slot)}
                                                    className={`text-sm ${selectedTime === slot ? 'bg-primary text-white' : 'bg-gray-200'}`}
                                                >
                                                    {slot}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 flex justify-end'>
                                    <Button onClick={handleSubmit} className='bg-secondary rounded-full text-white'>Submit</Button>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            {alert.show && (
                <Alert className={`mt-4 ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    <AlertTitle>{alert.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
                    <AlertDescription>{alert.message}</AlertDescription>
                </Alert>
            )}
        </div>
    );
}

export default BookAppointment;




// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Calendar } from "@/components/ui/calendar";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { CalendarDays } from 'lucide-react';
// import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
// import axios from 'axios';

// function BookAppointment({ doctorId }) {
//     const [date, setDate] = useState(new Date());
//     const [timeSlot, setTimeSlot] = useState([]);
//     const [selectedTime, setSelectedTime] = useState(null);
//     const [patientId] = useState(1); // replace with actual patient ID
//     const [showDialog, setShowDialog] = useState(false);
//     const [alert, setAlert] = useState({ show: false, type: '', message: '' });

//     useEffect(() => {
//         getTime();
//     }, []);

//     const getTime = () => {
//         const timeList = [];
//         for (let i = 10; i <= 12; i++) {
//             timeList.push(`${i}:00 AM`);
//             timeList.push(`${i}:30 AM`);
//         }
//         for (let i = 1; i <= 6; i++) {
//             timeList.push(`${i}:00 PM`);
//             timeList.push(`${i}:30 PM`);
//         }
//         setTimeSlot(timeList);
//     };

//     const checkAvailability = async (year, month, day, hour, minute) => {
//         try {
//             const response = await axios.get('http://154.38.186.138:5000/api/Appointments/doctor', {
//                 params: { doctor_id: doctorId }
//             });
//             const appointments = response.data;

//             return !appointments.some(appointment => {
//                 const [appointmentDate, appointmentTime] = appointment.time.split('T');
//                 const [appointmentYear, appointmentMonth, appointmentDay] = appointmentDate.split('-').map(Number);
//                 const [appointmentHour, appointmentMinute] = appointmentTime.split(':').map(Number);

//                 return (
//                     appointmentYear === year &&
//                     appointmentMonth === month &&
//                     appointmentDay === day &&
//                     appointmentHour === hour &&
//                     appointmentMinute === minute
//                 );
//             });
//         } catch (error) {
//             console.error('Error checking availability:', error);
//             return false;
//         }
//     };

//     const handleSubmit = async () => {
//         if (!date || !selectedTime) {
//             setAlert({ show: true, type: 'error', message: 'Please select a date and time.' });
//             return;
//         }

//         const [time, period] = selectedTime.split(' ');
//         let [hour, minute] = time.split(':').map(Number);
//         if (period === 'PM' && hour !== 12) hour += 12;
//         if (period === 'AM' && hour === 12) hour = 0;

//         const year = date.getFullYear();
//         const month = date.getMonth() + 1;
//         const day = date.getDate();

//         const isAvailable = await checkAvailability(year, month, day, hour, minute);

//         if (!isAvailable) {
//             setAlert({ show: true, type: 'error', message: 'Selected date and time are not available.' });
//             return;
//         }

//         const appointmentData = {
//             DoctorId: doctorId,
//             PatientId: patientId,
//             Year: year,
//             Month: month,
//             Day: day,
//             Hour: hour,
//             Minute: minute,
//         };

//         try {
//             const response = await axios.post('http://154.38.186.138:5000/api/Appointments', appointmentData);
//             if (response.status === 200) {
//                 setAlert({ show: true, type: 'success', message: 'Appointment booked successfully.' });
//                 setShowDialog(false); // Close the dialog
//             } else {
//                 setAlert({ show: true, type: 'error', message: 'Failed to book appointment.' });
//             }
//         } catch (error) {
//             console.error('Error booking appointment:', error);
//             setAlert({ show: true, type: 'error', message: 'Error booking appointment.' });
//         }
//     };

//     return (
//         <div>
//             <Dialog open={showDialog} onOpenChange={setShowDialog}>
//                 <DialogTrigger asChild>
//                     <Button className="mt-3 rounded-full text-white">
//                         Book Appointment
//                     </Button>
//                 </DialogTrigger>
//                 <DialogContent className="bg-white max-w-lg md:max-w-2xl">
//                     <DialogHeader>
//                         <DialogTitle className="text-primary text-center text-xl">Book Appointment</DialogTitle>
//                         <DialogDescription>
//                             <div>
//                                 <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                                     {/* Calendar */}
//                                     <div className='flex flex-col items-baseline gap-3'>
//                                         <h2 className='flex text-secondary'>
//                                             <CalendarDays />
//                                             <span className='text-gray-700 px-2 text-lg'> Select Date</span>
//                                         </h2>
//                                         <Calendar
//                                             mode="single"
//                                             selected={date}
//                                             onSelect={setDate}
//                                             className="rounded-md border"
//                                         />
//                                     </div>

//                                     {/* Time slot */}
//                                     <div>
//                                         <h2 className='text-secondary text-lg mb-2'>Select Time Slot</h2>
//                                         <div className='grid grid-cols-3 gap-2'>
//                                             {timeSlot.map((slot, index) => (
//                                                 <Button
//                                                     key={index}
//                                                     onClick={() => setSelectedTime(slot)}
//                                                     className={`text-sm ${selectedTime === slot ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                                                 >
//                                                     {slot}
//                                                 </Button>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='mt-4 flex justify-end'>
//                                     <Button onClick={handleSubmit} className='bg-blue-500 text-white'>Submit</Button>
//                                 </div>
//                             </div>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//             {alert.show && (
//                 <Alert className={`mt-4 ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
//                     <AlertTitle>{alert.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
//                     <AlertDescription>{alert.message}</AlertDescription>
//                 </Alert>
//             )}
//         </div>
//     );
// }

// export default BookAppointment;

