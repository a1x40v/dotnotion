import { create } from 'zustand';
import { AuthSlice, createAuthSlice } from './slices/authSlice';
import { devtools, persist } from 'zustand/middleware';

export const useBoundStore = create<AuthSlice>()(
  persist(
    devtools((...a) => ({
      ...createAuthSlice(...a),
    })),
    {
      name: 'DotnotionAppStore',
      partialize: ({ userId, jwtToken }) => ({ userId, jwtToken }),
    }
  )
);
