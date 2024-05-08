import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface TypingTextProps {
  text: string;
  speed?: number;
}

const StyledTextDiv = styled.div`
  margin-left: 10px;
  width: 100%;
  padding-right: 30px;
  white-space: pre-line;
`;
const TypingText = ({ text, speed = 100 }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [speed]);

  return <StyledTextDiv>{displayedText}</StyledTextDiv>;
};

export default TypingText;
