import React, { useEffect, useState, useContext } from 'react'
import DataContext from '../../contexts/dataContext'
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'

function ContentFactory({ id, isMobile }) {
    const data = useContext(DataContext);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const file = data.getItem(id);

        // Only update the "About" section, leave others unchanged
        if (file && file.id === "about") {
            file.content = {
                paragraphs: [
                    "I'm a recent economics graduate in Atlanta pursuing an MS in Data Science and Analytics! I also love coding and working with C#, Python, JS, ASP.NET, & SQL. Check out my work on GitHub.",
                    "", // Space before the next paragraph
                    "I like to build models for Excel, such as for dataset mapping or report building. I've been known to reinvent the wheel on multiple occasions.",
                    "Projects that I enjoy working on the most in my free time are game development, music production in FL Studio, and my motorcycle."
                ]
            };
        }

        setItem(file);
    }, [id, data]);


    if (item === null) {
        return (<div></div>);
    }

    switch (item.id) {
        case 'about':
            return <About content={item.content} />
        case 'resume':
            return <Resume content={item.content} />
        case 'skills':
            return <Skills content={item.content} isMobile={isMobile} />
        case 'contact':
            return <Contact content={item.content} />
        case 'projects':
            return <Projects content={item.content} />
        default:
            return (<div></div>);
    }
}

export default ContentFactory;
