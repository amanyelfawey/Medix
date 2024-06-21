import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";

export const useAuth = create((set) => ({
  user: null,
  id: null,

  initialize: async () => {
    const userId = Cookies.get("id");
    const userProfile = Cookies.get("profile");

    if (userId && userProfile) {
      try {
        const profile = JSON.parse(userProfile);
        const profileType = profile.profileType;
        const { data } = await axios.get(
          `http://154.38.186.138:5000/api/${profileType}s/${userId}`
        );

        const profileCompleted =
          profileType === "Doctor" ? data.doctor_phone !== null : data.patient_phone !== null;

        const user = {
          ...data,
          profileType,
          profileCompleted,
        };

        set({ user, id: userId });

        Cookies.set("id", userId);
        Cookies.set("profile", JSON.stringify(user));
      } catch (error) {
        console.error("Error initializing auth:", error);
        set({ user: null, id: null });
        Cookies.remove("id");
        Cookies.remove("profile");
      }
    }
  },

  setUser: (user) => {
    const profileCompleted =
      user.profileType === "Doctor" ? user.doctor_phone !== null : user.patient_phone !== null;

    set({
      user: { ...user, profileCompleted },
      id: user.id,
    });

    Cookies.set("id", user.id);
    Cookies.set("profile", JSON.stringify(user));
  },

  logout: () => {
    set({ user: null, id: null });
    Cookies.remove("id");
    Cookies.remove("profile");
  },
}));
