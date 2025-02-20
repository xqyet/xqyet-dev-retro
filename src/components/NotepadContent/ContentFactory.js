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
                    "welcome to my website! i love coding and working with C#, Python, JS, ASP.NET, & SQL. Check out my work on GitHub.",
                    "", // Space before the next paragraph
                    "i sometimes like to build worlds for vrchat ;p i also like developing visual novels and random apps. i've been known to reinvent the wheel on multiple occasions.",
                    "projects that i enjoy working on the most in my free time are web-scrapers, lame websites, & music production in fl studio"
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
        case 'projects':
            return <Resume content={item.content} />
        case 'skills':
            return <Skills content={item.content} isMobile={isMobile} />
        case 'contact':
            return <Contact content={item.content} />
        case 'portfolio':
            return <Projects content={item.content} />
        default:
            return (<div></div>);
    }
}

export default ContentFactory;
