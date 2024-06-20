import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import moment from 'moment';
import React from 'react';
import CancelAppointment from './CancelAppointment';

function BookingList({ bookingList, expired }) {
  const onDeleteBooking = async (appointmentId) => {
    try {
      const res = await fetch(`http://154.38.186.138:5000/api/Appointments/delete?appointment_id=${appointmentId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error(`Error deleting appointment: ${res.statusText}`);
      window.location.reload(); // Refresh the page to reflect changes
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div>
      {bookingList && bookingList.map((item, index) => (
        <div key={index} className='flex gap-4 items-center border p-3 m-3 rounded-lg'>
          <div className='flex flex-col gap-2 w-full'>
            <h2>{item.doctor.name || 'Doctor Name'} {!expired && <CancelAppointment onContinueClick={() => onDeleteBooking(item.id)} />}</h2>
            <h2><MapPin /> {item.doctor.address || 'Doctor Address'}</h2>
            <h2><Calendar /> Appointment On {moment(item.date).format('DD/MMM/YYYY')}</h2>
            <h2><Clock /> At Time: {item.time}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingList;
