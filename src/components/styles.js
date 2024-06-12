import styled, { keyframes } from 'styled-components';

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

/* NewsLine */
// Define keyframes for scrolling animation
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Styled component for the news line container
export const NewsLineContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: black;
  color: green;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  box-shadow: 0 0 10px green;
  padding-top: 50px;
`;

// Styled component for the scrolling text with the updated animation duration and padding
export const ScrollingText = styled.div`
  display: inline-block;
  padding-left: 100%; /* Adjust based on the width of the container */
  animation: ${scroll} 10s linear infinite; /* Adjust animation duration as needed */
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  justify-content: space-around;
  height: 100vh;
  color: white;
  font-family: 'Courier New', Courier, monospace;
`;
