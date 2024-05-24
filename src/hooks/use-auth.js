// store/useAuth.js
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

      // Determine if the profile is completed based on profile type
      const profileCompleted =
        profile.profileType === "Doctor"
          ? profile.doctor_phone !== null
          : profile.patient_phone !== null;

      set({ user: { ...profile, profileCompleted } });
    }
  },

  setUser: (user) => {
    const profileCompleted =
      user.type === "patient" ? user.patient_phone !== null : user.doctor_phone !== null;

    set({ user: { ...user, profileCompleted } });
    set({ id: user.type === "patient" ? user.patient_id : user.doctor_id });
  },

  logout: () => {
    set({ user: null });
    Cookies.remove("id");
    Cookies.remove("profile");
  },
}));
