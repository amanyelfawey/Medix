// store/useAuth.js
import create from "zustand";
import Cookies from "js-cookie";

export const useAuth = create((set) => ({
  user: null,

  initialize: () => {
    const userId = Cookies.get("id");
    const userProfile = Cookies.get("profile");

    if (userId && userProfile) {
      const profile = JSON.parse(userProfile);

      set({ user: profile });
    }
  },

  setUser: (user) => set({ user }),

  logout: () => {
    set({ user: null });
    Cookies.remove("id");
    Cookies.remove("profile");
  },
}));
