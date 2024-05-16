import { useEffect } from 'react';
import { useState } from 'react';

import styled from '@emotion/styled';
import { IoClose } from 'react-icons/io5';

import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';
import useModal from '@hooks/useModal';

import { ModalProps } from './manage/ModalsContext';
import GuideDefault from '@components/GuideBox/GuideDefault';

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(217, 225, 232, 0.5);
  display: grid;
  place-items: center;
  z-index: 1;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  animation: ${({ $isOpen }) => ($isOpen ? 'overlay-in 1s both' : 'none')};
  display: block;
  @keyframes overlay-in {
    0% {
      transform: scale(0.004);
    }
    33% {
      transform: scale(1, 0.004);
    }
    66%,
    100% {
      transform: scale(1);
    }
  }
`;
export const ModalContainer = styled.div<{ $type?: string }>`
  z-index: 2;
  width: 430px;
  min-height: 200px;
  top: 50%;
  left: 50%;
  background: #ffffff;
  border-radius: 12px;
  padding: 0 40px 30px;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 30px rgb(0 0 0 / 24%);
  position: fixed;
  animation: modal-in 1s;
  opacity: 1;

  @keyframes modal-in {
    0%,
    66% {
      opacity: 0;
      visibility: hidden;
      transform: translate(-50%, -60%);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%);
    }
  }
`;
const ModalHeader = styled.div`
  font-family: YJ_Obang_TTF;
  background: linear-gradient(90deg, #0080ff, #80ccff);
  margin: -85px -20px 30px;
  border-radius: 12px;
  height: 140px;
  display: flex;
  font-size: 40px;
  font-weight: 600;
  color: white;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 16px 30px rgb(0 0 0 / 12%);
`;

const CustomButton = styled(Button)`
  font-weight: 600;
  width: 100%;
  margin-top: 1.5rem;
`;
const KakaoLoginButtonImg = styled.div`
  svg {
    padding-top: 2px;
  }
`;

const InfoTitleWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  min-height: 30px;
  padding: 10px 0;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 20px;
`;
const InfoMessageWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  min-height: 30px;
  font-weight: 500;
  font-size: 15px;
`;
const CloseButton = styled.div`
  color: ${(props) => props.theme.gray1};
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -30px;

  :hover {
    background-color: ${(props) => props.theme.gray2};
  }
`;

export const TestModal = ({ onClose, isOpen }: ModalProps) => {
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <div>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export const InfoModal = ({ onClose, isOpen, title, message }: ModalProps) => {
  return (
    <ModalOverlay $isOpen={isOpen!}>
      <ModalContainer $type={'info'}>
        <InfoTitleWrapper>
          {title}
          <CloseButton onClick={onClose}>
            <IoClose />
          </CloseButton>
        </InfoTitleWrapper>
        <InfoMessageWrapper>{message}</InfoMessageWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export const LogoModal = ({ onClose, isOpen, type }: ModalProps) => {
  const { openModal, closeModal } = useModal();
  const [showGuide, setShowGuide] = useState(false);

  const goLogin = () => {
    openModal({
      type: 'logo',
      props: {
        type: 'login',
      },
    });
  };

  const goVisit = () => {
    openModal({
      type: 'logo',
      props: {
        type: 'visit',
      },
    });
  };

  const moveKaKaoLogin = () => {
    closeModal('logo');
    window.location.href = '/login/kakao';
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const closeGuide = () => {
    onClose();
  };

  return (
    <ModalOverlay $isOpen={isOpen!}>
      <ModalContainer>
        <ModalHeader>헬로(Law)</ModalHeader>
        {type === 'first' && (
          <>
            <CustomButton
              type="button"
              color="gray"
              size="medium_small"
              onClick={() => {
                onClose();
                goLogin();
              }}
            >
              처음 오셨나요?
            </CustomButton>
            <CustomButton type="button" color="primary" size="medium_small" onClick={() => {
              onClose();
              goVisit();
            }}>
              방문 해보셨나요?
            </CustomButton>
          </>
        )}
        {type === 'visit' && (
          <>
            <CustomButton type="button" size="medium_small" color="primary" onClick={() => {
              setShowGuide(true);
            }}>
              헬로에 대해서
            </CustomButton>
            <CustomButton type="button" size="medium_small" color="gray" onClick={onClose}>
              건너뛰기
            </CustomButton>
          </>
        )}
        {showGuide && <GuideDefault onClose={closeGuide} />}
        {type === 'login' && (
          <>
            <CustomButton type="button" size="medium_small" color="kakao" onClick={moveKaKaoLogin}>
              <KakaoLoginButtonImg>
                <Icon icon="kakao" />
              </KakaoLoginButtonImg>
              카카오로그인
            </CustomButton>
          </>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};


