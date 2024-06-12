import styled from 'styled-components';

export const TerminalContainer = styled.div`
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

export const TerminalOutput = styled.div`
  white-space: pre-wrap;
`;

export const TerminalInputContainer = styled.div`
  display: flex;
`;

export const TerminalPrompt = styled.span`
  color: #00FF00;
  margin-right: 10px;
`;

export const TerminalInput = styled.input`
  background: none;
  border: none;
  color: green;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  flex-grow: 1;
`;
