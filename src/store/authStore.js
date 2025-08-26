import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
    users: [],
    currentUser: null,
    isLoading: false,

    signup: (userData) => {
      const state = get();

      const existingUser = state.users.find(user => user.email === userData.email);
      if(existingUser){
        return { success: false, message: "User already exists with this email" }
      }

      const newUser = {
        ...userData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      }

      set(state => ({
        users: [...state.users, newUser],
        currentUser: newUser
      }))

      return { success: true, message: "Account created successfully!"};
    },

    login: (email, password) => {
      set({ isLoading: true })

      const state = get();
      const user = state.users.find(user => user.email === email && user.password === password);

      if(user){
        set({ currentUser: user, isLoading: false })
      } else {
        set({ currentUser: null, isLoading: false })
      }
    
      return user ? { success: true, message: "Login successfull!"} : { success: false , message: 'Invalid credentials.'}
    },

    logout: () => set({ currentUser: null })
    
  }),
  {
    name: 'auth-storage',
    partialize: (state) => ({ 
        users: state.users, 
        currentUser: state.currentUser 
    }),
  }
))

export default useAuthStore;