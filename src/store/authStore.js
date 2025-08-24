import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
    users: [],
    currentUser: null,

    signup: (userData) => 
      set(state => ({
        users: [...state.users, userData],
        currentUser: userData
    })),

    login: (email, password) => {
      const state = useAuthStore.getState();
      const user = state.users.find(user => user.email === email && user.password === password);
      if(user){
        set({ currentUser: user });
        return true; 
      }
      set({ currentUser: null });
      return false;
    },

    logout: () => set({ currentUser: null })
    
  }),
  {
    name: 'auth-storage',
  }
))

export default useAuthStore;