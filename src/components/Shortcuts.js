import React, { useState } from 'react';
import styled from 'styled-components';
import { startWebamp } from '../utils/startWebamp';
import Mp4Player from './Mp4Player';
import IEBrowser from './IEBrowser'; // Import new component

//# BUILD PROCESS!

// Remove - Item - Recurse - Force node_modules, package - lock.json
// npm install
// npm install webpack @4.42.0 --save - exact
// $env:NODE_OPTIONS="--openssl-legacy-provider"
// npm run build
// http://127.0.0.1:3001/


// Container for all shortcuts
const ShortcutsContainer = styled.div`
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
`;

// Individual shortcut container
const ShortcutWrapper = styled.div`
    position: absolute;
    left: ${({ left }) => left || "0px"};
    top: ${({ top }) => top || "0px"};
`;

// Text label styling
const ShortcutText = styled.div`
    position: absolute;
    left: ${({ textLeft }) => textLeft || "0px"};
    top: ${({ textTop }) => textTop || "0px"};
    font-size: 14px;
    text-align: center;
`;

// Custom icons
const customIcons = {
    explorer: { src: "/explorer.gif", width: 90, height: 90, iconTop: "-20px", textTop: "-34px" },
    music: { src: "/music.png", width: 47, height: 47, iconTop: "80px", textTop: "146px" },
    video: { src: "/mp4.png", width: 50, height: 47, iconTop: "-1px", textTop: "46px" },
    ie: { src: "/ie.png", width: 50, height: 50, iconTop: "-2px", textTop: "47px" } // New IE icon
};

function Shortcuts({ openExplorer }) {
    const [mp4Open, setMp4Open] = useState(false);
    const [ieOpen, setIeOpen] = useState(false);

    return (
        <ShortcutsContainer>
            {/* Explorer */}
            <ShortcutWrapper left="-20px" top={customIcons.explorer.iconTop}>
                <img
                    src={customIcons.explorer.src}
                    alt="Explorer"
                    width={customIcons.explorer.width}
                    height={customIcons.explorer.height}
                    className="pointer"
                    onClick={() => openExplorer()}
                />
                <ShortcutText textLeft="35px" textTop={customIcons.music.textTop}>Music</ShortcutText>
            </ShortcutWrapper>

            {/* Music */}
            <ShortcutWrapper left="10px" top={customIcons.music.iconTop}>
                <img
                    src={customIcons.music.src}
                    alt="Music"
                    width={customIcons.music.width}
                    height={customIcons.music.height}
                    className="pointer"
                    onClick={() => startWebamp()}
                />
                <ShortcutText textLeft="-4px" textTop={customIcons.explorer.textTop}>Explorer</ShortcutText>
            </ShortcutWrapper>

            {/* Video */}
            <ShortcutWrapper left="75px" top={customIcons.video.iconTop}>
                <img
                    src={customIcons.video.src}
                    alt="MP4"
                    width={customIcons.video.width}
                    height={customIcons.video.height}
                    className="pointer"
                    onClick={() => setMp4Open(true)}
                />
                <ShortcutText textLeft="3px" textTop={customIcons.video.textTop}>Video</ShortcutText>
            </ShortcutWrapper>

            {/* Internet Explorer */}
            <ShortcutWrapper left="140px" top={customIcons.ie.iconTop}>
                <img
                    src={customIcons.ie.src}
                    alt="IE"
                    width={customIcons.ie.width}
                    height={customIcons.ie.height}
                    className="pointer"
                    onClick={() => setIeOpen(true)}
                />
                <ShortcutText textLeft="3px" textTop={customIcons.ie.textTop}>Internet</ShortcutText>
            </ShortcutWrapper>

            {/* Video Player Modal */}
            {mp4Open && <Mp4Player closePlayer={() => setMp4Open(false)} />}

            {/* Internet Explorer Window */}
            {ieOpen && <IEBrowser closeBrowser={() => setIeOpen(false)} />}
        </ShortcutsContainer>
    );
}

export default Shortcuts;
