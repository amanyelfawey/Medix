"use client";

import { useAuth } from "@/hooks/use-auth";
import { useEffect, useState } from "react";
import { EditProfilePage } from "./_components/edit-profile-form";

export default function UserProfilePage() {
  const { user, id } = useAuth();
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    } else {
      setIsDoctor(user.profileType == "Doctor" ? true : false);
    }
  }, [user]);

  return (
    <>
      <div className="min-h-[85vh]">
        {user && id && <EditProfilePage user={user} id={id} isDoctor={isDoctor} />}
      </div>
    </>
  );
}
