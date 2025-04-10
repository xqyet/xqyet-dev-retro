import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    background-color: black;
  }
  to {
    opacity: 1;
    background-color: transparent;
  }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Wrapper = styled.div`
  background: url('/dark_vista.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Segoe UI", sans-serif;
`;

const UserGrid = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const PromptBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  margin-left: 20px;
`;

const Input = styled.input`
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  width: 180px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;

  &::placeholder {
    font-size: 12px;
    color: #ccc;
  }
`;

const InputWrapper = styled.div`
  width: 180px; /* You can tweak this for visual alignment */
  display: flex;
  justify-content: center;
`;


const Button = styled.button`
  padding: 4.5px 10px;
  font-size: 14px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(3px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  }
`;

const HintBox = styled.div`
  position: absolute;
  bottom: 40px;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  font-size: 13px;
  max-width: 240px;
  text-align: center;
  backdrop-filter: blur(3px);
  color: #ccc;
  opacity: ${({ fading }) => (fading ? 0 : 1)};
  transition: opacity 0.4s ease;
  pointer-events: none;
`;


const HintButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 30px;
  width: 100%;
  margin-top: 8px;

  &:hover button {
    opacity: 0.3;
  }
`;

const HintButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(3px);
  position: relative;
  pointer-events: auto;
`;


function SignIn({ onSignIn, errorRef }) {
    const [mode, setMode] = useState('select');
    const [password, setPassword] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [hintFading, setHintFading] = useState(false);

    React.useEffect(() => {
        if (showHint) {
            setHintFading(false); 
            const fadeTimer = setTimeout(() => setHintFading(true), 1800);
            const hideTimer = setTimeout(() => setShowHint(false), 2000);

            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [showHint]);



    let lastErrorSoundTime = 0;
    const handleAdminLogin = () => {
        const now = Date.now();

        if (password === 'zerotwo') {
            window.location.href = 'https://www.youtube.com/watch?v=25fsQofab9c&list=LL&index=27&ab_channel=MagicalNight';
        } else {
            if (errorRef?.current && now - lastErrorSoundTime > 1000) {
                lastErrorSoundTime = now;
                errorRef.current.currentTime = 0;
                errorRef.current.play().catch((e) =>
                    console.warn('Error playing error.mp3:', e)
                );
            }
        }
    };

    return (
        <Wrapper>
            {mode === 'select' ? (
                <>
                    <UserGrid>
                        <UserCard onClick={() => onSignIn('guest')}>
                            <Avatar src="/guest.jpeg" />
                            <div>Guest</div>
                        </UserCard>

                        <UserCard onClick={() => setMode('admin')}>
                            <Avatar src="/admin.jpeg" />
                            <div>Administrator</div>
                        </UserCard>
                    </UserGrid>
                </>
            ) : (
                <PromptBox>
                    <Avatar src="/admin.jpeg" />
                    <div style={{ marginTop: 10 }}>Administrator</div>

                    <InputRow>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={handleAdminLogin}>→</Button>
                    </InputRow>

                    <Button style={{ marginTop: 10 }} onClick={() => setMode('select')}>
                        Switch User
                        </Button>
                        <HintButtonWrapper>
                            <HintButton onClick={() => setShowHint(true)}>Hint</HintButton>
                        </HintButtonWrapper>


                        {showHint && (
                            <HintBox fading={hintFading}>
                                The password is located on this page. Dig down.
                            </HintBox>
                        )}


                </PromptBox>
            )}

        </Wrapper>
    );
}


export default SignIn;
