import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const DraggableWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  cursor: move;
`;

const ChatWrapper = styled.div`
  width: 300px;
  height: 400px;
  background: black;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const Message = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
`;

const Time = styled.span`
  font-size: 10px;
  color: #aaa;
  margin-left: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 6px;
  border: none;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  &::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const dragRef = useRef(null);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        const el = dragRef.current;
        offset.current = {
            x: e.clientX - el.offsetLeft,
            y: e.clientY - el.offsetTop,
        };
        document.body.style.userSelect = 'none';
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const el = dragRef.current;
        el.style.left = `${e.clientX - offset.current.x}px`;
        el.style.top = `${e.clientY - offset.current.y}px`;
    };

    const handleMouseUp = () => {
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const sendMessage = () => {
        if (input.trim()) {
            const msg = {
                user: 'unknown',
                text: input,
                time: new Date().toLocaleTimeString(),
            };
            setMessages((prev) => [...prev, msg]);
            setInput('');
        }
    };

    return (
        <DraggableWrapper ref={dragRef} onMouseDown={handleMouseDown}>
            <ChatWrapper>
                <MessageList>
                    {messages.map((msg, idx) => (
                        <Message key={idx}>
                            <strong>{msg.user}</strong>: {msg.text}
                            <Time>{msg.time}</Time>
                        </Message>
                    ))}
                </MessageList>
                <InputWrapper>
                    <Input
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <Button onClick={sendMessage}>Send</Button>
                </InputWrapper>
            </ChatWrapper>
        </DraggableWrapper>
    );
};

export default ChatApp;
