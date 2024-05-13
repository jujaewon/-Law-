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
interface OptionsType {
  category: string | null;
  victim: string | null;
  question: string;
}
interface UserChatData {
  chat: string;
  data: OptionsType;
  type: 'user';
}

interface BotChatData {
  chat: ChatBotData;
  type: 'bot';
}
type ChatData = UserChatData | BotChatData;

interface ChatsData {
  isChat: boolean;
  isBoatLoading: boolean;
  data: Array<ChatData>;
}
interface ChatsDataInfo extends ChatsData {
  actions: {
    addChatData: (chat: ChatData) => void;
    setIsChat: (value: boolean) => void;
    setIsBoatLoading: (value: boolean) => void;
  };
}

export const chatsStore = create<ChatsDataInfo>((set) => ({
  isChat: false,
  isBoatLoading: false,
  data: [],
  actions: {
    addChatData: (chat) => set((state) => ({ data: [...state.data, chat] })),
    setIsChat: (value) => set({ isChat: value }),
    setIsBoatLoading: (value) => set({ isBoatLoading: value }),
  },
}));

export const useTodoActions = () => chatsStore((state) => state.actions);
