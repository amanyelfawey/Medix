//NEW

import { create } from "zustand";
import Cookies from "js-cookie";

export const useAuth = create((set) => ({
  user: null,
  id: null,

  initialize: () => {
    const userId = Cookies.get("id");
    const userProfile = Cookies.get("profile");

    if (userId && userProfile) {
      const profile = JSON.parse(userProfile);

      const profileCompleted =
        profile.profileType === "Doctor"
          ? profile.doctor_phone !== null
          : profile.patient_phone !== null;

      set({
        user: { ...profile, profileCompleted },
        id: profile.profileType === "Patient" ? profile.patient_id : profile.doctor_id,
      });
    }
  },

  setUser: (user) => {
    const profileCompleted =
      user.profileType === "Patient" ? user.patient_phone !== null : user.doctor_phone !== null;

    set((state) => ({
      ...state,
      user: { ...user, profileCompleted },
      id: user.profileType === "Patient" ? user.patient_id : user.doctor_id,
    }));

    // Save user data to cookies
    Cookies.set("id", user.profileType === "Patient" ? user.patient_id : user.doctor_id);
    Cookies.set("profile", JSON.stringify(user));
  },

  logout: () => {
    set({ user: null, id: null });
    Cookies.remove("id");
    Cookies.remove("profile");
  },
}));



