import React, { useState } from "react";
import { Modal, Frame, Button } from "@react95/core";
import styled from "styled-components";

// Styled Components
const WebFrame = styled.iframe`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  border: none;
`;

// FriendsBrowser Component
function FriendsBrowser({ closeBrowser }) {
    const [url] = useState("https://xqyet.net/friends");

    return (
        <Modal
            icon="inetcfg_2301"
            title="Internet Window - Friends"
            closeModal={closeBrowser}
            style={{
                left: "30%",
                top: "10%",
                width: 900,
                height: 600,
            }}
            menu={[
                { name: "File", list: [] },
                { name: "Edit", list: [] },
                { name: "View", list: [] },
                { name: "Favorites", list: [] },
                { name: "Help", list: [] },
            ]}
        >
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={10}
                style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
                <WebFrame src={url} title="Friends Viewer" />
            </Frame>
        </Modal>
    );
}

export default FriendsBrowser;
