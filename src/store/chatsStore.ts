import { create } from 'zustand';

interface ChatData {
  chat: string;
  type: 'user' | 'bot';
}
interface ChatsData {
  isChat: boolean;
  data: Array<ChatData>;
}
interface ChatsDataInfo extends ChatsData {
  addChatData: (chat: ChatData) => void;
  setIsChat: (value: boolean) => void;
}

export const chatsStore = create<ChatsDataInfo>((set) => ({
  isChat: false,
  data: [],
  addChatData: (chat) => set((state) => ({ data: [...state.data, chat] })),
  setIsChat: (value) => set({ isChat: value }),
}));
