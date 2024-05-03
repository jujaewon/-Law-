import React, { useState } from 'react';

function TextEdit() {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('Converted into text');
  
    // 텍스트 클릭 시 편집 모드로 전환
    const handleTextClick = () => {
      setIsEditing(true);
    };
  
    const handleInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setIsEditing(false);
        // event.target을 HTMLInputElement로 형변환하여 value 속성에 접근
        setText((event.target as HTMLInputElement).value);
      }
    };  
  
    return (
      <div>
        {!isEditing ? (
          <div onClick={handleTextClick}>{text}</div>
        ) : (
          <input
            type="text"
            defaultValue={text}
            onKeyPress={handleInputEnter}
            autoFocus
          />
        )}
      </div>
    );
}

export default TextEdit;
  