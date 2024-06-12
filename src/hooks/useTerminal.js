import { useState } from 'react';

const useTerminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

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

  return {
    input,
    setInput,
    output,
    handleInputChange,
    handleInputSubmit,
  };
};

export default useTerminal;
