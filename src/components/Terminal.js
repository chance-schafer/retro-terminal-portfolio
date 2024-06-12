import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { 
  TerminalContainer, 
  TerminalOutput, 
  TerminalInputContainer, 
  TerminalPrompt, 
  TerminalInput 
} from './styles';
import useTerminal from '../hooks/useTerminal';

const Terminal = () => {
  const { input, output, handleInputChange, handleInputSubmit } = useTerminal();
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useLayoutEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <TerminalContainer onClick={handleClick}>
      <TerminalOutput ref={outputRef}>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </TerminalOutput>
      <TerminalInputContainer>
        <TerminalPrompt>PC C:\users\chance  </TerminalPrompt>
        <TerminalInput
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          ref={inputRef}
        />
      </TerminalInputContainer>
    </TerminalContainer>
  );
};

export default Terminal;
