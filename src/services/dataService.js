
export default class DataService {
    _data = {
        projectRepo: 'https://github.com/xqyet/xqyet-dev-retro',
        react95Repo: 'https://github.com/React95/React95',
        items: [
            {
                id: 'about',
                name: 'About.txt',
                icon: 'info_bubble',
                content: {
                    paragraphs: [
                        "I'm looking for a password do you know where I can find it..?",
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
                            description: 'a reporting model that maps CPT codes based on ORD Procedures - includes interactive GUI and framework for API integration.',
                            repoLink: 'https://github.com/xqyet/NSH_ReportBuilder'
                        },
                        {
                            title: 'Price Sensitivity Model',
                            description: 'this project simulates a community of consumers, each with unique Price Sensitivity (PS) that affects their consumption behavior, wealth accumulation, and transaction volume.',
                            repoLink: 'https://github.com/xqyet/macroeconomic-PSModel'
                        }, 
                        {
                            title: 'Infinite Seed-Phrase Randomizer',
                            description: 'loops through a near infinite list of seed phrases until the correct one is found.',
                            repoLink: 'https://github.com/xqyet/Infinite-Seed-Phrase-Randomizer_BACKEND'
                        },
                        {
                            title: 'All-In-One HWID Spoofer',
                            description: 'a C# application that allows you to change various system identifiers like HWID, PC GUID, computer name, product ID, and MAC address.',
                            repoLink: 'http://xqspoof.me'
                        },
                        {
                            title: 'Blockchain Analytics Model',
                            description: 'a WPF application for analyzing wallet transactions using multiple APIs. The application allows users to input a wallet address, fetch transaction history, and view detailed transaction data.',
                            repoLink: 'https://github.com/xqyet/Transaction_Analytics'
                        },
                        {
                            title: 'Transaction Address Spoofer',
                            description: 'a C# WinForms application that generates target wallet addresses based on initial prefix and grabs from Ethereum transaction history.',
                            repoLink: 'https://github.com/xqyet/BlockchainAddressSpoofer'
                        },
                        {
                            title: 'Real-Time Caption Overlay',
                            description: 'a real-time captioning application that captures audio from your system and displays the live transcription as text overlays.',
                            repoLink: 'https://github.com/xqyet/RealTimeCaptionOverlay'
                        },
                        {
                            title: 'Wallet Monitor',
                            description: 'a whitehat blockchain tool designed to monitor compromised wallets for incoming transactions.',
                            repoLink: 'https://github.com/xqyet/WalletMonitor'
                        },
                        {
                            title: 'Sales Tax Model',
                            description: 'a real-time model that retrieves sales tax info based on zip-code.',
                            repoLink: 'https://github.com/xqyet/SalesTaxModel'
                        },
                        {
                            title: 'PathSeeker',
                            description: 'a reimagined and enhanced Minecraft utility mod. - active contributor and developer to PathSeeker, TrouserStreak, Jefff Mod add-ons',
                            repoLink: 'https://github.com/FaxHack/PathSeeker'
                        },
                        {
                            title: 'Invoice Parser',
                            description: 'streamlines the process of extracting invoice data such as invoice numbers, customer details, billing addresses, line items, and totals from PDF invoices.',
                            repoLink: 'https://github.com/xqyet/Invoice-Parser-Framework'
                        },
                        {
                            title: 'NullTrace Utility Add-On',
                            description: 'a 6b6t focused meteor add-on created primarily for basehunting modules and automating trail following in the Overworld, Nether, and End dimensions. ',
                            repoLink: 'https://github.com/xqyet/NullTrace/'
                        }


                    ],
                },
            },

            {
                id: 'portfolio',
                name: 'Terminal.web', 
                icon: 'flying_through_space_100',
                content: {
                    projects: [
                        {
                            title: 'Coming Soon',
                            description: 'building a terminal.'
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
