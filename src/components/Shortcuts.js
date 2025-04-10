import React, { useState } from 'react';
import styled from 'styled-components';
import { startWebamp } from '../utils/startWebamp';
import Mp4Player from './Mp4Player';
import IEBrowser from './IEBrowser'; 
import FriendsBrowser from './FriendsBrowser';
import ChatApp from './ChatApp';
import AmongUsWindow from './AmongUs';
import DinoWindow from './Dino';


//# BUILD PROCESS!

// Remove - Item - Recurse - Force node_modules, package - lock.json
// npm install
// npm install webpack @4.42.0 --save - exact
// $env:NODE_OPTIONS="--openssl-legacy-provider"
// npm run build
// http://127.0.0.1:3001/


// container for all shortcuts
const ShortcutsContainer = styled.div`
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
`;

// individual shortcut container
const ShortcutWrapper = styled.div`
    position: absolute;
    left: ${({ left }) => left || "0px"};
    top: ${({ top }) => top || "0px"};
`;

// text label styling
const ShortcutText = styled.div`
  position: absolute;
  left: ${({ textLeft }) => textLeft || "0px"};
  top: ${({ textTop }) => textTop || "0px"};
  font-size: 14px;
  text-align: center;
  color: grey; 
`;


// custom icons
const customIcons = {
    explorer: { src: "/explorer.gif", width: 90, height: 90, iconTop: "-20px", textTop: "-34px" },
    music: { src: "/music.png", width: 47, height: 47, iconTop: "80px", textTop: "146px" },
    video: { src: "/mp4.png", width: 60, height: 47, iconTop: "-1px", textTop: "46px" },
    friends: {
        src: "/friends.png",
        width: 90,
        height: 90,
        iconTop: "57px",
        textTop: "70px",
        iconLeft: "-19px" 
    },
    ie: { src: "/ie.png", width: 50, height: 50, iconTop: "-2px", textTop: "47px" }, // new IE icon
    chat: { src: "/notes.png", width: 85, height: 84, iconTop: "140px", textTop: "65px" },
   amongus: {
        src: "/amongus.png",
        width: 70,
        height: 70,
        iconTop: "795px",
        textTop: "70px",
        iconLeft: "1820px",
        textLeft: "-115sx"
    },
    dino: {
        src: "/dino.png",         
        width: 80,
        height: 90,
        iconTop: "785px",
        textTop: "80px",
        iconLeft: "1715px",
        textLeft: "0px"
    }

};

function Shortcuts({ openExplorer }) {
    const [mp4Open, setMp4Open] = useState(false);
    const [ieOpen, setIeOpen] = useState(false);
    const [friendsOpen, setFriendsOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [amongUsOpen, setAmongUsOpen] = useState(false);
    const [dinoOpen, setDinoOpen] = useState(false);

    


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

            {/* Friends */}
            <ShortcutWrapper left="75px" top={customIcons.friends.iconTop}>
                <img
                    src={customIcons.friends.src}
                    alt="Friends"
                    width={customIcons.friends.width}
                    height={customIcons.friends.height}
                    className="pointer"
                    style={{ marginLeft: customIcons.friends.iconLeft || "0px" }}
                    onClick={() => setFriendsOpen(true)}
                />
                <ShortcutText textLeft="3px" textTop={customIcons.friends.textTop}>Friends</ShortcutText>
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

            {/* Chat */}
            <ShortcutWrapper left="-15px" top={customIcons.chat.iconTop}>
                <img
                    src={customIcons.chat.src}
                    alt="Chat"
                    width={customIcons.chat.width}
                    height={customIcons.chat.height}
                    className="pointer"
                    onClick={() => setChatOpen(true)}
                />
                <ShortcutText textLeft="34px" textTop={customIcons.chat.textTop}>Chat</ShortcutText>
            </ShortcutWrapper>
            {chatOpen && <ChatApp close={() => setChatOpen(false)} />}
            <ShortcutWrapper left={customIcons.amongus.iconLeft} top={customIcons.amongus.iconTop}>
                <img
                    src={customIcons.amongus.src}
                    alt="Among Us"
                    width={customIcons.amongus.width}
                    height={customIcons.amongus.height}
                    className="pointer"
                    onClick={() => setAmongUsOpen(true)}
                />
                <ShortcutText
                    textLeft="84" textop={customIcons.amongus.textLeft}
                    textTop={customIcons.amongus.textTop}
                >
                    Among Us
                </ShortcutText>
            </ShortcutWrapper>
            {amongUsOpen && <AmongUsWindow close={() => setAmongUsOpen(false)} />}
            {dinoOpen && <DinoWindow close={() => setDinoOpen(false)} />}
            <ShortcutWrapper left={customIcons.dino.iconLeft} top={customIcons.dino.iconTop}>
                <img
                    src={customIcons.dino.src}
                    alt="Dino"
                    width={customIcons.dino.width}
                    height={customIcons.dino.height}
                    className="pointer"
                    onClick={() => setDinoOpen(true)}
                />
                <ShortcutText textLeft={customIcons.dino.textLeft} textTop={customIcons.dino.textTop}>
                    Chrome Dino
                </ShortcutText>
            </ShortcutWrapper>




            {/* Video Player Modal */}
            {mp4Open && <Mp4Player closePlayer={() => setMp4Open(false)} />}

            {/* Internet Explorer Window */}
            {ieOpen && <IEBrowser closeBrowser={() => setIeOpen(false)} />}

            {friendsOpen && <FriendsBrowser closeBrowser={() => setFriendsOpen(false)} />}

        </ShortcutsContainer>
    );
}

export default Shortcuts;
