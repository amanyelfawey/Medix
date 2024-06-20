"use client";

import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";
import { useState } from "react";
import { EditProfilePage } from "./_components/edit-profile-form";

export default function UserProfilePage() {
  const { user } = useAuth();
  const [profileType, setProfileType] = useState(user?.profileType?.toLowerCase());

  useEffect(() => {
    if (!user) {
      return;
    }
    setProfileType(user.profileType.toLowerCase());
  }, [user]);

  return (
    <>
      <div className="min-h-[85vh]">
        {user && profileType && <EditProfilePage user={user} profileType={profileType} />}
      </div>
    </>
  );
}
