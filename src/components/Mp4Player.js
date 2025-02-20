import React, { useRef, useState, useEffect } from 'react';
import { Modal, Frame, Button } from '@react95/core';
import styled from 'styled-components';

// Hardcoded list of MP4 filenames (inside public/Video/)
const videoFiles = [
    "/Video/test.mp4",
    "/Video/test2.mp4",
    "/Video/test3.mp4",
    
];

// Styled Components for Retro Controls
const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #c0c0c0;
    padding-bottom: 5px;
`;

const ProgressBar = styled.div`
    width: ${({ progress }) => progress}%;
    height: 5px;
    background: red;
    transition: width 0.3s ease-in-out;
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    padding: 5px;
    background: #222;
    color: white;
    font-size: 12px;
`;

const NextButton = styled(Button)`
    margin-right: 10px;
    min-width: 60px;
`;

const VolumeSlider = styled.input`
    width: 100px;
    margin-left: 10px;
`;

function Mp4Player({ closePlayer, isMobile }) {
    const videoRef = useRef(null);
    const [currentVideo, setCurrentVideo] = useState(videoFiles[0]); // Default to first video
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.2); // Default volume 50%

    // Function to get a new random video file
    const getRandomVideo = () => {
        let newVideo;
        do {
            newVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
        } while (newVideo === currentVideo); // Ensures a different video is played
        return newVideo;
    };

    // Start playing a random video when the player opens
    useEffect(() => {
        const randomVideo = getRandomVideo();
        setCurrentVideo(randomVideo);
    }, []);

    // Play video when source updates
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.src = currentVideo;
            videoRef.current.play();
        }
    }, [currentVideo]);

    // Play the next random video
    const playNext = () => {
        setCurrentVideo(getRandomVideo());
    };

    // Update progress bar as video plays
    const updateProgress = () => {
        if (videoRef.current) {
            const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(percentage);
        }
    };

    // Update volume when slider changes
    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (videoRef.current) videoRef.current.volume = newVolume;
    };

    return (
        <Modal
            icon="media_video"
            title="YouTube Player - Random MP4"
            closeModal={closePlayer}
            
            style={{
                left: isMobile ? '5%' : '50%',
                top: isMobile ? '3%' : '15%',
                width: isMobile ? '90%' : 500,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Playback', list: [] },
                { name: 'Help', list: [] }
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={10}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                {/* Old-School YouTube Video Container */}
                <VideoContainer>
                    <video
                        ref={videoRef}
                        onTimeUpdate={updateProgress}
                        width="100%"
                        height="280px"
                        loop  // Loops automatically
                        autoPlay  // Plays automatically when opened
                    >
                        <source src={currentVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Fake Old-School Progress Bar */}
                    <ProgressBar progress={progress} />

                    {/* Old-School YouTube Controls */}
                    <ControlsContainer>
                        <NextButton onClick={playNext}>
                            Abort
                        </NextButton>
                        
                        <VolumeSlider
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={changeVolume}
                        />
                    </ControlsContainer>
                </VideoContainer>

            </Frame>
        </Modal>
    );
}

export default Mp4Player;
