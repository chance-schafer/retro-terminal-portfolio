import React, { useState } from 'react';
import styled from 'styled-components';

const TerminalWrapper = styled.div`
  background: #000;
  border: 2px solid #0f0;
  padding: 20px;
  width: 600px;
  height: 400px;
  overflow-y: auto;
`;

const TerminalInput = styled.input`
  background: none;
  border: none;
  color: #0f0;
  font-size: 16px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      setOutput([...output, input]);
      setInput('');
    }
  };

  return (
    <TerminalWrapper>
      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <TerminalInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleInput}
      />
    </TerminalWrapper>
  );
};

export default Terminal;
