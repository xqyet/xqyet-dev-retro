import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const WindowWrapper = styled.div`
  position: fixed;
  background: #000;
  width: 650px;
  height: 700px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border: 2px solid #444;
  border-radius: 6px;
  overflow: hidden;
  z-index: 999;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
`;

const Header = styled.div`
  background: #222;
  color: white;
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  cursor: move;
  user-select: none;
`;

const CloseButton = styled.button`
  background: red;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 2px 8px;
  cursor: pointer;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: calc(100% - 32px);
  border: none;
`;

const WikipediaWindow = ({ close }) => {
    const windowRef = useRef(null);
    const offset = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ top: 100, left: 100 });

    useEffect(() => {
        // center the window once on first render
        const width = 800;
        const height = 500;
        setPosition({
            top: window.innerHeight / 2 - height / 2,
            left: window.innerWidth / 2 - width / 2
        });
    }, []);

    const handleMouseDown = (e) => {
        offset.current = {
            x: e.clientX - position.left,
            y: e.clientY - position.top,
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        setPosition({
            top: e.clientY - offset.current.y,
            left: e.clientX - offset.current.x,
        });
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <WindowWrapper ref={windowRef} top={position.top} left={position.left}>
            <Header onMouseDown={handleMouseDown}>
                Cowboy Bebop - Wikipedia
                <CloseButton onClick={close}>X</CloseButton>
            </Header>
            <Iframe
                src="https://en.wikipedia.org/wiki/Cowboy_Bebop"
                title="Cowboy Bebop Wikipedia"
            />
        </WindowWrapper>
    );
};

export default WikipediaWindow;
