
"use client";
import React, { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CircleFadingPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

export default function DoctorAppointments() {
  const router = useRouter();
  const { id, user, initialize } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (id) {
      fetchAppointments(id);
    }
  }, [id]);

  const fetchAppointments = async (doctorId) => {
    try {
      const res = await fetch(
        `http://154.38.186.138:5000/api/Appointments/doctor?doctor_id=${doctorId}`
      );
      if (!res.ok) throw new Error(`Error fetching appointments: ${res.statusText}`);
      const data = await res.json();
      setAppointments(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold mt-10 text-4xl text-primary">My Appointments</h2>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {appointments.map((appointment) => (
          <div
            key={appointment.appointment_id}
            className="border-[1px] p-5 rounded-lg flex flex-col md:flex-row justify-between"
          >
            <div className="flex flex-col md:flex-row gap-5">
              {appointment.patient_image && (
                <img
                  src={appointment.patient_image}
                  alt="Patient"
                  className="rounded-lg w-[150px] h-full object-cover"
                />
              )}
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-2xl text-primary">
                  Patient: {appointment.patient_name || "Unknown"}
                </h2>
                <h2 className="flex gap-2 text-xl text-secondary">
                  <User />
                  <span className="text-gray-700">{appointment.patient_name || "Unknown"}</span>
                </h2>
                <h2 className="flex gap-2 text-xl text-secondary">
                  <Phone />
                  <span className="text-gray-700">{appointment.patient_phone || "Unknown"}</span>
                </h2>
                <h2 className="flex gap-2 text-xl text-secondary">
                  <Mail />
                  <span className="text-gray-700">{appointment.patient_email || "Unknown"}</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <h2 className="flex gap-2 text-xl text-secondary">
                <Calendar />
                <span className="text-gray-700">{appointment.date || "Unknown"}</span>
              </h2>
              <h2 className="flex gap-2 text-xl text-secondary">
                <Clock />
                <span className="text-gray-700">{appointment.time || "Unknown"}</span>
              </h2>
            </div>
          </div>
        ))}
        {!appointments.length && (
          <div className="flex flex-col gap-4 justify-center items-center min-h-[50vh]">
            <CircleFadingPlus className="w-20 h-20 text-primary" />
            <p>
              You have no appointments scheduled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

