import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface TypingTextProps {
  text: string;
  speed?: number;
}

const StyledTextDiv = styled.div`
  width: 100%;
  white-space: pre-line;
`;
const TypingText = ({ text, speed = 100 }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const words = text.split(' ');
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + (index > 0 ? ' ' : '') + words[index]);
      index++;
      if (index === words.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <StyledTextDiv>{displayedText}</StyledTextDiv>;
};

export default TypingText;
