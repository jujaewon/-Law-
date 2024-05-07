import { create } from 'zustand';

interface ChatBotData {
  suggestion: string;
  precedent: {
    precedentId: number;
    lawType: string;
    precedentSummary: string;
    category: string;
  };
  relatedLaws: Array<string>;
}

interface UserChatData {
  chat: string;
  type: 'user';
}

interface BotChatData {
  chat: ChatBotData;
  type: 'bot';
}
type ChatData = UserChatData | BotChatData;

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
