import React, { useRef } from 'react';
import styled from 'styled-components';

const WindowWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 1000px;
  height: 600px;
  background: #000;
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

const AmongUsWindow = ({ close }) => {
    const windowRef = useRef(null);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        const el = windowRef.current;
        offset.current = {
            x: e.clientX - el.offsetLeft,
            y: e.clientY - el.offsetTop,
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const el = windowRef.current;
        el.style.left = `${e.clientX - offset.current.x}px`;
        el.style.top = `${e.clientY - offset.current.y}px`;
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <WindowWrapper ref={windowRef}>
            <Header onMouseDown={handleMouseDown}>
                Among Us
                <CloseButton onClick={close}>X</CloseButton>
            </Header>
            <Iframe
                src="https://nb-ga.github.io/games-site/projects/among-us/index.html"
                title="Among Us"
            />
        </WindowWrapper>
    );
};

export default AmongUsWindow;
