import { useContext } from 'react';
import { createPortal } from 'react-dom';

import useModal from '@hooks/useModal';

import { MODAL_COMPONENTS, ModalsStateContext } from './ModalsContext';

function CreatePortal() {
  const openedModals = useContext(ModalsStateContext);
  const { closeModal } = useModal();
  const modalElement = document.getElementById('root-modal');

  // openedModals state를 map으로 순회하면서
  // 렌더링할 모달컴포넌트를 리턴하고, createPortal에 전달한다.
  const renderModal = openedModals.map((modal, index) => {
    const { type, props, isOpen } = modal;
    const ModalComponent = type && MODAL_COMPONENTS[type];
    const { onSubmit, onClose, ...rest } = props;
    if (!isOpen || !props) return null;

    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
    };
    const handleClick = () => {
      onClose && onClose();
      closeModal(type);
    };

    // 각 모달 컴포넌트에 필요한 props 전달
    return <ModalComponent key={index} isOpen={isOpen} onClose={handleClick} onSubmit={handleSubmit} {...rest} />;
  });

  // 모든 모달들을 포털을 통해 'root-modal' 요소로 렌더링
  return modalElement ? createPortal(renderModal, modalElement) : null;
}

export default CreatePortal;
