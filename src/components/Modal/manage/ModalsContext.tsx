// ModalsContext.tsx
import { createContext } from 'react';

import { TestModal, LogoModal, InfoModal } from '@components/Modal/Modal';

export type ModalType = 'test' | 'logo' | 'info';

export const MODAL_COMPONENTS = {
  test: TestModal,
  logo: LogoModal,
  info: InfoModal,
};
export interface Modals {
  type: ModalType;
  props?: any;
  isOpen?: boolean;
}
export interface ModalProps {
  onClose?: () => void;
  onSubmit?: () => void;
  isOpen?: boolean;
  type?: string;
  title?: string;
  message?: string;
  btnText?: string;
}

// 현재 열린 모달 상태를 관리하는 Context
export const ModalsStateContext = createContext<Modals[]>([]);

type ModalsDispatch = {
  open: ({ type, props }: Modals) => void;
  close: (type: ModalType) => void;
};

// 모달을 열고 닫는 함수를 관리하는 Context
export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => {},
  close: () => {},
});
