import React from 'react'

function About({ content }) {
    const { paragraphs } = content;
    return (
        <div>
            <h2>About</h2>
            {paragraphs.map((p, i) => (
                <p
                    key={i}
                    style={{
                        marginBottom: i === paragraphs.length - 2 ? "20px" : "5px", // Extra space before second-to-last paragraph
                        lineHeight: "1.2" // Reduce line spacing
                    }}
                >
                    {p}
                </p>
            ))}
        </div>
    );
}

export default About;
