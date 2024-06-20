

"use client"

import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const CancelAppointment = ({ appointmentId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://154.38.186.138:5000/api/Appointments/delete?appointment_id=${appointmentId}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(`Error deleting appointment: ${res.statusText}`);
      }
      // Handle success, e.g., close dialog, update state, etc.
      setIsOpen(false); // Close the dialog after successful deletion
      alert('Appointment deleted successfully!'); // Example: Show an alert
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert(`Error deleting appointment: ${error.message}`); // Example: Show an alert with error message
    }
  };

  return (
    <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className=" bg-red-600 text-white">
          Cancel Appointment
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
           Are you sure you want to cancel this appointment?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            No
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} autoFocus>
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelAppointment;

