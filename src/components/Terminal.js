import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  background-color: black;
  color: green;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  width: 600px;
  height: 400px;
  overflow-y: auto;
  border: 3px solid green;
  box-shadow: 0 0 10px green;
  display: flex;
  flex-direction: column;
`;

const TerminalOutput = styled.div`
  white-space: pre-wrap;
`;

const TerminalInputContainer = styled.div`
  display: flex;
`;

const TerminalPrompt = styled.span`
  color: #00FF00;
  margin-right: 10px;
`;

const TerminalInput = styled.input`
  background: none;
  border: none;
  color: green;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  flex-grow: 1;
`;

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      if (input.toLowerCase() === 'clear') {
        setOutput([]);
      } else {
        setOutput((prevOutput) => [
          ...prevOutput,
          `> ${input}`,
          processCommand(input),
        ]);
      }
      setInput('');
      scrollToBottom();
    }
  };

  const processCommand = (command) => {
    switch (command.toLowerCase()) {
      case 'help':
        return 'Available commands: help, about, projects, contact, clear';
      case 'about':
        return (
          `About Me:\n` +
          `-----------\n` +
          `Hello! I'm [Your Name], a passionate software developer with experience in building web applications.\n` +
          `I love coding, learning new technologies, and solving challenging problems.\n`
        );
      case 'projects':
        return (
          `Projects:\n` +
          `---------\n` +
          `1. Project One - A web application that does amazing things.\n` +
          `   GitHub: https://github.com/yourusername/project-one\n` +
          `2. Project Two - Another web application with cool features.\n` +
          `   GitHub: https://github.com/yourusername/project-two\n`
        );
      case 'contact':
        return (
          `Contact Me:\n` +
          `-----------\n` +
          `Email: your.email@example.com\n` +
          `LinkedIn: https://linkedin.com/in/yourusername\n` +
          `GitHub: https://github.com/yourusername\n`
        );
      case 'clear':
        return '';
      default:
        return `Command not found: ${command}`;
    }
  };

  const scrollToBottom = () => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <TerminalContainer onClick={handleClick}>
      <TerminalOutput ref={outputRef}>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </TerminalOutput>
      <TerminalInputContainer>
        <TerminalPrompt>PS C:\users\chance  </TerminalPrompt>
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
