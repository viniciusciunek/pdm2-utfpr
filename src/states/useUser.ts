import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// types
import User from "../types/User";

type State = {
  user: User | null;
};

type Actions = {
  setUser: (user: User | null) => void;
};

const useUser = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
    }),
    {
      name: "async-users-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUser;
