import React, { useState } from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const App = () => {
    // Global state to track open applications
    const [openApps, setOpenApps] = useState({});

    return (
        <DataContext.Provider value={dataService}>
            <ThemeProvider>
                <GlobalStyle />
                <BodyFontSizeOverride />

                {/* Pass openApps state to Desktop and Taskbar */}
                <Desktop openApps={openApps} setOpenApps={setOpenApps} />
                <Taskbar openApps={openApps} setOpenApps={setOpenApps} />
            </ThemeProvider>
        </DataContext.Provider>
    );
};

export default App;
