import React, { useState, useEffect } from "react";
import { Modal, Frame, Button } from "@react95/core";
import styled from "styled-components";

// Styled Components for Layout
const BrowserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  transform: translateY(-20px);
`;

const AddressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const AddressBar = styled.input`
  flex-grow: 1;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  margin-right: 5px;
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  color: black; /* Always black */
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const WebFrame = styled.iframe`
  flex-grow: 1;
  width: 100%;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

// Footer Section (For tumble.gif & Links)
const Footer = styled.div`
  margin-top: 25px;
  font-size: 12px;
  color: #777;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

const FooterLink = styled.a`
  color: #00c;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const TumbleIcon = styled.img`
  margin-top: 10px;
  width: 110px;
  height: auto;
`;

// Internet Explorer Component
function IEBrowser({ closeBrowser }) {
    const defaultText = "Enter search or URL...";
    const typingText = "https://xqyet.dev/friends"; // Web address

    const [url, setUrl] = useState(""); // Stores the user's input URL
    const [displayUrl, setDisplayUrl] = useState(""); // Address bar content
    const [searchQuery, setSearchQuery] = useState(""); // Default is empty (not restored)
    const [isHome, setIsHome] = useState(true); // Determines if we're on the home screen
    const [typedText, setTypedText] = useState(""); // Stores the animated text
    const [isTyping, setIsTyping] = useState(true); // Controls animation on first open
    const [hasUserCleared, setHasUserCleared] = useState(false); // Tracks if user cleared the text

    // Function to check if input is a URL or search term
    const processInput = (input) => {
        if (input.includes(".") || input.startsWith("http")) {
            return input.startsWith("http") ? input : `https://${input}`;
        } else {
            return `https://www.google.com/search?q=${encodeURIComponent(input)}`;
        }
    };

    // Function to navigate to a URL or search query
    const navigateTo = (destination) => {
        setUrl(destination);
        setIsHome(false);
    };

    // Typing animation effect when window is first opened
    useEffect(() => {
        if (hasUserCleared) return; // Don't retype if user cleared

        let index = 0;
        setTypedText(""); // Reset before typing

        const interval = setInterval(() => {
            if (index < typingText.length) {
                setTypedText((prev) => prev + typingText[index]);
                index++;
            } else {
                clearInterval(interval);
                setIsTyping(false); // Stop animation once fully typed
                setSearchQuery(typingText); // Ensure it stays after typing
            }
        }, 50); // Speed of typing animation

        return () => clearInterval(interval);
    }, [hasUserCleared]); // Only re-run if user hasn't cleared

    return (
        <Modal
            icon="msie1"
            title="Internet Window - Google Search"
            closeModal={closeBrowser}
            style={{
                left: "30%",
                top: "10%",
                width: 1150,
                height: 750,
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
                style={{ display: "flex", flexDirection: "column", position: "relative", flexGrow: 1 }}
            >
                {/* Address Bar */}
                <AddressBarContainer>
                    <AddressBar
                        type="text"
                        value={displayUrl}
                        onChange={(e) => setDisplayUrl(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo(processInput(displayUrl))}
                        placeholder="Enter web address or search..."
                    />

                    <ButtonGroup>
                        {!isHome && (
                            <Button
                                onClick={() => {
                                    setIsHome(true);
                                    setUrl("");
                                    setDisplayUrl("");
                                    setSearchQuery(hasUserCleared ? "" : typingText);
                                    setIsTyping(false);
                                }}
                            >
                                ⬅ Home
                            </Button>
                        )}
                        <Button onClick={() => navigateTo(processInput(displayUrl))}>Go</Button>
                    </ButtonGroup>
                </AddressBarContainer>

                {/* If on Home Page, Show Google UI */}
                {isHome ? (
                    <BrowserContent>
                        <img src="/google.png" alt="Google Logo" width="250" style={{ marginBottom: "40px" }} />

                        {/* Bottom Search Bar with Typing Effect */}
                        <SearchInput
                            type="text"
                            value={isTyping ? typedText : searchQuery}
                            onFocus={() => {
                                if (isTyping) {
                                    setIsTyping(false);
                                }
                            }}
                            onBlur={() => {
                                if (searchQuery.trim() === "" && !hasUserCleared) {
                                    setSearchQuery(typingText);
                                }
                            }}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                if (e.target.value === "") {
                                    setHasUserCleared(true);
                                }
                            }}
                            onKeyDown={(e) => e.key === "Enter" && navigateTo(processInput(searchQuery))}
                            placeholder={searchQuery === "" ? defaultText : ""}
                        />

                        <ButtonContainer>
                            <Button onClick={() => navigateTo(processInput(searchQuery))}>Google Search</Button>
                            <Button onClick={() => navigateTo("https://gbucci.dev")}>I'm Feeling Lucky</Button>
                        </ButtonContainer>

                        {/* Footer with Links & Tumble GIF */}
                        <Footer>
                            <TumbleIcon src="/tumble.gif" alt="Tumble Icon" />
                            <FooterLinks>
                                <FooterLink href="#">Advertising Programs</FooterLink>
                                <FooterLink href="#">Business Solutions</FooterLink>
                                <FooterLink href="#">+Google</FooterLink>
                                <FooterLink href="#">About Google</FooterLink>
                            </FooterLinks>
                            <p>© 2007 - <a href="#" style={{ color: "#00c" }}>Privacy & Terms</a></p>
                        </Footer>
                    </BrowserContent>
                ) : (
                    <WebFrame src={url} title="Web Viewer" />
                )}
            </Frame>
        </Modal>
    );
}

export default IEBrowser;
