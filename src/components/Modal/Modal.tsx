// 사용가능한 모달종류

import { ModalProps } from './manage/ModalsContext';

export const TestModal = ({ onClose, title, message, btnText = '닫기' }: ModalProps) => {
  return (
    <div role="dialog" tabIndex={0}>
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onClose} aria-label={btnText}>
        {btnText}
      </button>
    </div>
  );
};
