export default class DataService {
  _data = {
    projectRepo: 'https://github.com/InsafKhamzin/portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! I am a Software Developer based in Toronto. For the last several years I've been working as a Full Stack developer in big FinTech companies.",
            "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and database design, I think I would be a valuable asset to your project.",
            'The main technology I have been using is C# .NET. But a few years ago I fell in love with Node.js and I use it for most of my side projects. Moreover, I am in a good relationship with React (this website runs on React btw) and fascinated by Big Data and Blockchain.',
            'When I am not in front of the computer, I usually do yoga, drink a specialty coffee and go on hikes (lake Yoho in Alberta is my favorite trail so far).',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
            resumeLink: '/Resume_GiovanniBucci.pdf', // Local PDF file in public/

          workExperience: [
            {
              jobTitle: 'Room Control',
              company: 'Northside Hospital',
              location: 'Atlanta',
              period: 'APRIL 2022 – PRESENT',
              accomplishments: [
                'Designed and implemented a custom reporting model in C# to streamline report generation',
                'Developed custom CPT mapping using dynamic reference files to improve billing accuracy ',
                'Utilize Excel to build CMS regulatory reports and outpatient surgery schedule ',
                'Ensure completion of all CMS regulatory documents for Medicare patients', 
              ],
            },
            {
              jobTitle: 'Data Analyst Intern',
              company: 'Gain Servicing',
              location: 'Atlanta',
              period: 'AUG 2021 – DEC 2021',
              accomplishments: [
                'Create and modify validation rules, conditional statements, and payoff formulas within our Salesforce dev and prod environments',
                'Perform QA work in our Dev/Staging portal to help push software updates. Involved regression testing in Excel with the developers to ensure that our portal software functioned as intended with code changes, updates, and improvements',
                'utilize Jira software for bug treacking and project management for assignments in Salesforce and our portal software.',
                'Participated in daily Scum meetings with the technology team',
                'Technologies used: C#, ASP.NET Core, SQL Server,',
              ],
            },
            {
              jobTitle: 'Research Group Analyst - Bagwell Center for the Study of Markets and Economic Opportunity',
              company: 'Academic',
              location: 'Kennesaw State University',
              period: 'MAY 2016 – MAR 2017',
              accomplishments: [
                'Created a price sensitivity model using C# to predict consumer behavior in response to price changes',
                'Applied quantitative methods to assess market trends and provide actionable insights on pricing strategies for various products and services',
                'Delivered data-driven recommendations to our TAs, enhancing our understanding of consumer price sensitivity and improving decision making in specified pricing policies',
              ],
            },
          ],
          education: [
            {
              credit: 'Master of Science - Data Science and Analytics',
              place: 'Kennesaw State University',
              gpa: ' - /4.0 GPA',
              period: 'AUG 2025 – DEC 2026',
            },
            {
              credit: 'Bachelor in Economics',
              place: 'Kennesaw State University',
              gpa: '3.2/4.0 GPA',
              period: 'AUG 2020 – MAY 2025',
            },
          ],
        },
      },
        {
            id: 'projects', // Changed from 'projects'
            name: 'Portfolio.web', // Changed from 'Projects.txt'
            icon: 'flying_through_space_100',
            content: {
                projects: [
                    {
                        title: 'Coming Soon!',
                        description: 'Stay tuned.'
                    }
                ],
            },
        },


        {
            id: 'discord', // Renamed from 'skills'
            name: 'Discord.web', // Updated name
            icon: 'progman_11', // Keeping the same icon (change if desired)
            externalLink: 'https://fakecrime.bio/gbucci' // Added external link
        },

      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to get in contact with me, just email me at ',
          email: 'giovannib776@gmail.com',
          socialText: 'Or you can reach out to me through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/insaf-khamzin-915237129/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/InsafKhamzin',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/insafikus/',
            },
            {
              name: 'FaTwitter',
              link: 'https://twitter.com/InsafKhamzin',
            },
            {
              name: 'FaMedium',
              link: 'https://medium.com/@hamzin730insaf',
            },
          ],
        },
      },
    ],
  };

    getItems() {
        return this._data.items.map(({ id, name, icon, externalLink }) => ({ id, name, icon, externalLink }));
    }


  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
