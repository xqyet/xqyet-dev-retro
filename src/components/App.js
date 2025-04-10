import React, { useState, useRef } from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import BootScreen from './BootScreen';
import SignIn from './SignIn';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const App = () => {
  const [openApps, setOpenApps] = useState({});
  const [bootDone, setBootDone] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
    const audioRef = useRef(null);
    const bellRef = useRef(null);
    const errorRef = useRef(null);


    const handleBootComplete = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch(err => console.warn("Autoplay blocked:", err));
        }
        if (bellRef.current) {
            bellRef.current.play().catch(err => console.warn("Bell blocked:", err));
        }
        setBootDone(true);
    };

    const handleSignIn = (user) => {
        if (user === 'guest') {
            if (bellRef.current) {
                bellRef.current.play();
            }
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
        setSignedIn(true);
    };

  return (
    <DataContext.Provider value={dataService}>
      <ThemeProvider>
        <GlobalStyle />
        <BodyFontSizeOverride />

        {!bootDone && <BootScreen onComplete={handleBootComplete} />}
              {bootDone && !signedIn && <SignIn onSignIn={handleSignIn} errorRef={errorRef} />}

        {bootDone && signedIn && (
          <>
            <Desktop openApps={openApps} setOpenApps={setOpenApps} />
            <Taskbar openApps={openApps} setOpenApps={setOpenApps} />
          </>
        )}

        {/*Keep the audio always mounted here */}
              <audio ref={audioRef} src="/windows_ambience.mp3" loop />
              <audio ref={bellRef} src="/bell.mp3" />
              <audio ref={errorRef} src="/error.mp3" />
      </ThemeProvider>
    </DataContext.Provider>
  );
};

export default App;
