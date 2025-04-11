import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const originalTitle = 'xqyet';
let glitchIndex = 0;

const glitchTitle = () => {
    const glitched = originalTitle
        .split('')
        .map((char, i) => {
            if (Math.random() < 0.3 && i === glitchIndex) {
                return String.fromCharCode(33 + Math.floor(Math.random() * 94)); 
            }
            return char;
        })
        .join('');
    document.title = glitched;
    glitchIndex = (glitchIndex + 1) % originalTitle.length;
};

setInterval(glitchTitle, 2); 


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
