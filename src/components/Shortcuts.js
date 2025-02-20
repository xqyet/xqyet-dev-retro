import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@react95/core';
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

// Icon styling
const StyledIcon = styled(Icon)`
    cursor: pointer;
`;

// Text label styling (independent positioning)
const ShortcutText = styled.div`
    position: absolute;
    left: ${({ textLeft }) => textLeft || "0px"};
    top: ${({ textTop }) => textTop || "0px"};
    font-size: 14px;
`;

function Shortcuts({ openExplorer }) {
    const [mp4Open, setMp4Open] = useState(false);

    return (
        <ShortcutsContainer>
            {/* Explorer Icon & Text */}
            <ShortcutWrapper left="10px" top="10px">  {/* Adjust position */}
                <StyledIcon
                    name="windows_explorer"
                    onClick={() => openExplorer()}
                />
                <ShortcutText textLeft="-6px" textTop="35px">Explorer</ShortcutText>
            </ShortcutWrapper>

            {/* Music Icon & Text */}
            <ShortcutWrapper left="10px" top="80px">  {/* Adjust position */}
                <StyledIcon
                    name="media_cd"
                    onClick={() => startWebamp()}
                />
                <ShortcutText textLeft="1px" textTop="37px">Music</ShortcutText>
            </ShortcutWrapper>

            {/* Video Icon & Text */}
            <ShortcutWrapper left="60px" top="-3px">  {/* Adjust position */}
                <img
                    src="/mp4.png"
                    alt="MP4"
                    width="67"
                    height="60"
                    className="pointer"
                    onClick={() => setMp4Open(true)}
                />
                <ShortcutText textLeft="16px" textTop="49px">Video</ShortcutText>
            </ShortcutWrapper>

            {/* Video Player Modal */}
            {mp4Open && <Mp4Player closePlayer={() => setMp4Open(false)} />}
        </ShortcutsContainer>
    );
}

export default Shortcuts;
