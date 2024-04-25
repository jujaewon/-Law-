// ModalsContext.tsx
import { createContext } from 'react';

import { TestModal } from '@components/Modal/Modal';

export type ModalType = 'test';

export const MODAL_COMPONENTS = {
  test: TestModal,
};
export interface Modals {
  type: ModalType;
  props?: any;
  isOpen?: boolean;
}
export interface ModalProps {
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  message?: string;
  btnText?: string;
}

// 현재 열린 모달 상태를 관리하는 Context
export const ModalsStateContext = createContext<Modals[]>([]);

type ModalsDispatch = {
  open: ({ type, props, isOpen }: Modals) => void;
  close: (type: ModalType) => void;
};

// 모달을 열고 닫는 함수를 관리하는 Context
export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => {},
  close: () => {},
});
