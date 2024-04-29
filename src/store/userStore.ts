import { create } from 'zustand';

type User = {
  nickname: string;
};

interface Store {
  nickname: string | null;
  setUser: (user: User) => void;
}

export const userStore = create<Store>((set) => ({
  nickname: 'TestUSer',
  setUser: (user) => set({ nickname: user.nickname }),
}));
