import React from 'react';
import { Modal, Frame } from '@react95/core';

function Mp4Player({ closePlayer, isMobile }) {
    return (
        <Modal
            icon="media_video"
            title="MP4 Player - test.mp4"
            closeModal={closePlayer}
            buttons={[{ value: "Close", onClick: closePlayer }]}
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
                <video controls width="100%">
                    <source src="/Video/test.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Frame>
        </Modal>
    );
}

export default Mp4Player;
