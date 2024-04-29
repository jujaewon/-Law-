import { create } from 'zustand';

interface ChatData {
  chat: string;
}
interface ChatsData {
  isChat: boolean;
  data: Array<ChatData>;
}
interface ChatsDataInfo extends ChatsData {
  setChatsData: (data: Array<ChatData>) => void;
  setIsChat: (value: boolean) => void;
}

export const chatsStore = create<ChatsDataInfo>((set) => ({
  isChat: false,
  data: [],
  setChatsData: (data) => set({ data }),
  setIsChat: (value) => set({ isChat: value }),
}));
