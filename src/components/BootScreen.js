import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const BootScreenWrapper = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: url('/cmd_vista.jpg') no-repeat center center fixed;
  background-size: cover;
  color:white;
  font-family: 'Courier New', Courier, monospace;
  z-index: 9999;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const TerminalText = styled.pre`
  font-size: 16px;
  white-space: pre-wrap;
  text-align: left;
  max-width: 80vw;
  height: 300px;
  overflow: hidden;
  padding: 20px;
  margin-top: -185px;
  margin-left: -645px;
  color: #a1a1a1;
  font-family: 'Consolas', 'Courier New', monospace;

  .cursor {
    display: inline-block;
    animation: blink 1s steps(1) infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`;



function getOperatingSystem() {
  const ua = navigator.userAgent;
  const match = ua.match(/Windows NT ([\d.]+)/);
  if (match) {
    const version = match[1];
    switch (version) {
      case "10.0": return "Windows 10";
      case "6.3": return "Windows 8.1";
      case "6.2": return "Windows 8";
      case "6.1": return "Windows 7";
      default: return "Windows";
    }
  }
  if (/Mac/.test(ua)) return "macOS";
  if (/Linux/.test(ua)) return "Linux";
  if (/Android/.test(ua)) return "Android";
  if (/iPhone|iPad/.test(ua)) return "iOS";
  return "Unknown";
}

function BootScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [output, setOutput] = useState('');

  const linesRef = useRef([
    'User: unknown',
    'IP: Loading...',
    `System: ${getOperatingSystem()}`,
    'Bio Loaded',
    'Press Enter... '
  ]);

  const close = () => {
    setVisible(false);
    onComplete();
  };

  useEffect(() => {
    // Fetch IP
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        linesRef.current[1] = `IP: ${data.ip}`;
        startTyping(linesRef.current);
      })
      .catch(() => {
        linesRef.current[1] = 'IP: Unable to fetch';
        startTyping(linesRef.current);
      });

    // Set up listeners
    const handleEnter = (e) => {
      if (e.key === 'Enter') close();
    };

    document.addEventListener('keydown', handleEnter);
    document.addEventListener('click', close);

    return () => {
      document.removeEventListener('keydown', handleEnter);
      document.removeEventListener('click', close);
    };
  }, []);

    const PROMPT = 'C:\\Users\\xqyet> ';

    const startTyping = (lines) => {
        let lineIndex = 0;
        let charIndex = 0;

        const fullLines = [
            { prefix: PROMPT, content: 'netstat' },
            ...lines.map(line => ({ prefix: '', content: line }))
        ];

        function typeChar() {
            if (lineIndex >= fullLines.length) return;

            const { prefix, content } = fullLines[lineIndex];

            if (charIndex === 0 && prefix) {
                setOutput(prev => prev + prefix);
            }

            if (charIndex < content.length) {
                setOutput(prev => prev + content.charAt(charIndex));
                charIndex++;
                setTimeout(typeChar, 30);
            } else {
                setOutput(prev => prev + '\n');
                lineIndex++;
                charIndex = 0;
                setTimeout(typeChar, 400);
            }
        }

        typeChar();
    };



  return (
    <BootScreenWrapper visible={visible}>
          <TerminalText>
              {output}
              <span className="cursor">_</span>
          </TerminalText>
    </BootScreenWrapper>
  );
}

export default BootScreen;
