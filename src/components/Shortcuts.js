import React, { useState } from 'react';
import styled from 'styled-components';
import { startWebamp } from '../utils/startWebamp';
import Mp4Player from './Mp4Player';

// Container for all shortcuts
const ShortcutsContainer = styled.div`
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
`;

// Individual shortcut container (allows precise positioning)
const ShortcutWrapper = styled.div`
    position: absolute;
    left: ${({ left }) => left || "0px"};   /* Custom X position */
    top: ${({ top }) => top || "0px"};     /* Custom Y position */
`;

// Text label styling (independent positioning)
const ShortcutText = styled.div`
    position: absolute;
    left: ${({ textLeft }) => textLeft || "0px"};
    top: ${({ textTop }) => textTop || "0px"};
    font-size: 14px;
    text-align: center;
`;

// Custom icon object to handle public folder assets
const customIcons = {
    
    explorer: { src: "/explorer.gif", width: 90, height: 90, iconTop: "-20px", textTop: "-34px" },
    music: { src: "/music.png", width: 47, height: 47, iconTop: "80px", textTop: "146px" },
    video: { src: "/mp4.png", width: 50, height: 47, iconTop: "-1px", textTop: "46px" }
};

function Shortcuts({ openExplorer }) {
    const [mp4Open, setMp4Open] = useState(false);

    return (
        <ShortcutsContainer>
            {/* Explorer Icon & Text */}
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

            {/* Music Icon & Text */}
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

            {/* Video Icon & Text */}
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

            {/* Video Player Modal */}
            {mp4Open && <Mp4Player closePlayer={() => setMp4Open(false)} />}
        </ShortcutsContainer>
    );
}

export default Shortcuts;
