import { StateCreator } from 'zustand';

export interface AuthSlice {
  userId: string | null;
  jwtToken: string | null;
  login: (userId: string, jwtToken: string) => void;
  logout: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  userId: null,
  jwtToken: null,
  login: (userId: string, jwtToken: string) => set({ userId, jwtToken }),
  logout: () => set({ userId: null, jwtToken: null }),
});
