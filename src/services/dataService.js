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
                id: 'projects',
                name: 'Projects.txt',
                icon: 'notepad_2',
                content: {
                    projects: [
                        {
                            title: 'CSV Reporting Model',
                            description: 'Reporting model that maps CPT codes based on ORD Procedures - includes interactive GUI and framework for API integration.',
                            repoLink: 'https://github.com/xqyet/NSH_ReportBuilder'
                        },
                        {
                            title: 'Price Sensitivity Model',
                            description: 'This project simulates a community of consumers, each with unique Price Sensitivity (PS) that affects their consumption behavior, wealth accumulation, and transaction volume.',
                            repoLink: 'https://github.com/xqyet/macroeconomic-PSModel'
                        },
                        {
                            title: 'Invoice Parser',
                            description: 'Streamlines the process of extracting invoice data such as invoice numbers, customer details, billing addresses, line items, and totals from PDF invoices.',
                            repoLink: 'https://github.com/xqyet/Invoice-Parser-Framework'
                        },
                        {
                            title: 'Sales Tax Model',
                            description: 'A real-time model that retrieves sales tax info based on zip-code.',
                            repoLink: 'https://github.com/xqyet/SalesTaxModel'
                        },
                        {
                            title: 'Infinite Seed-Phrase Randomizer',
                            description: 'Loops through a near infinite list of seed phrases until the correct one is found.',
                            repoLink: 'https://github.com/xqyet/Infinite-Seed-Phrase-Randomizer_BACKEND'
                        },
                        {
                            title: 'Blockchain Analytics Model',
                            description: 'A WPF application for analyzing wallet transactions using multiple APIs. The application allows users to input a wallet address, fetch transaction history, and view detailed transaction data.',
                            repoLink: 'https://github.com/xqyet/Transaction_Analytics'
                        },
                        {
                            title: 'Transaction Address Spoofer',
                            description: 'A C# WinForms application that generates target wallet addresses based on initial prefix and grabs from Ethereum transaction history.',
                            repoLink: 'https://github.com/xqyet/BlockchainAddressSpoofer'
                        },
                        {
                            title: 'Real-Time Caption Overlay',
                            description: 'A real-time captioning application that captures audio from your system and displays the live transcription as text overlays.',
                            repoLink: 'https://github.com/xqyet/RealTimeCaptionOverlay'
                        },
                        {
                            title: 'Wallet Monitor',
                            description: 'A whitehat blockchain tool designed to monitor compromised wallets for incoming transactions.',
                            repoLink: 'https://github.com/xqyet/WalletMonitor'
                        },

                        {
                            title: 'PathSeeker',
                            description: 'A reimagined and enhanced Minecraft utility mod. - active contributor and developer to PathSeeker, TrouserStreak, Jefff Mod add-ons',
                            repoLink: 'https://faxhack.github.io/PathSeeker/'
                        }


                    ],
                },
            },

            {
                id: 'portfolio',
                name: 'Portfolio.web', // Keeps Portfolio.web intact
                icon: 'flying_through_space_100',
                content: {
                    projects: [
                        {
                            title: 'Coming Soon',
                            description: 'in process.'
                        }
                    ],
                },
            },
            {
                id: 'discord',
                name: 'Discord.web',
                icon: 'progman_11',
                externalLink: 'https://fakecrime.bio/gbucci'
            },
            {
                id: 'contact',
                name: 'Contact.txt',
                icon: 'inetcfg_2301',
                content: {
                    emailText: 'if you want to get in contact with me, you can message me on discord at ',
                    email: 'xqyet',
                    socialText: 'or you can reach out to me through social media if i have it:',
                    social: [
                        {
                            name: 'FaTwitter',
                            link: '',
                        },
                        {
                            name: 'FaInstagram',
                            link: '',
                        },
                        {
                            name: 'FaMedium',
                            link: '',
                        },
                        {
                            name: 'FaGithub',
                            link: 'https://github.com/xqyet',
                        }
                    ],
                },
            }
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
