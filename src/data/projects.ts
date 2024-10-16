export interface ProjectImage {
    url: string;
    aspectRatio: '16to9' | '2to1' | '1to2';
}

export interface DescriptionItem {
    title: string;
    body: string;
}

export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: DescriptionItem[];
    technologies: string[];
    cardImageUrl: string;
    carouselImages: ProjectImage[];
    githubUrl: string;
    liveUrl?: string;
    colors: string[];
    keyFeatures: string[];
    videoUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Market Law",
        shortDescription: "A React Native city-building card game challenging players with strategic gameplay across various economic sectors, featuring 240 unique cards and daily challenges.",
        longDescription: [
            {
                title: "Game Concept",
                body: "Market Law is an intricate single-player mobile card game born from a collaboration between myself and Marc Kristerson. While Marc spearheaded the game design and balance, I took charge of transforming the concept into a fully-fledged mobile application. The gameplay revolves around strategic card play across various economic sectors (Residential, Industrial, Service, and Public), coupled with diverse game actions aimed at boosting income and completing projects. With a rich deck of 240 unique cards, the game offers dozens of viable strategies, challenging players to adapt their approach as the game unfolds. Initially conceived as a physical card game, Market Law's complex calculations and need for comprehensive stat tracking made it an ideal candidate for digital adaptation."
            },
            {
                title: "Development Process",
                body: "As my first major project, Market Law presented an opportunity to leverage my JavaScript and React expertise, making React Native an optimal choice for development. The process began with the creation of a comprehensive Excel database, later transformed into a JSON file, to house data for all 240 cards. Given the game's intricate stat-tracking requirements and the need to monitor numerous cards and effects, I implemented Redux for robust state management. The app features user authentication and detailed match history, utilizing Firebase to track games across all users. This cloud integration enables players to compete for high scores while providing a global match history for community engagement. Throughout development, I focused on creating a seamless user experience that accurately translated the game's complex mechanics into an intuitive mobile interface."
            }
        ],
        technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Expo"],
        cardImageUrl: "/assets/images/marketlaw1.jpg",
        carouselImages: [
            { url: "/assets/images/marketlaw1.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/marketlaw2.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/marketlaw3.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/marketlaw4.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/marketlaw5.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/marketlaw6.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/marketlaw7.jpg", aspectRatio: "2to1" },

        ],
        githubUrl: "https://github.com/ErikT-Dev/marketlaw",
        colors: ["#dc6a53", "rgba(121, 70, 58, 0.5)", "#67413a"],
        keyFeatures: [
            "Engaging gameplay with a meticulously balanced set of 240 unique cards",
            "Responsive design optimized for various mobile screen sizes",
            "Daily updated bonus challenges to encourage diverse strategic approaches",
            "Firebase integration for global match history tracking and in-app viewing",
            "Complex state management implemented with Redux and Redux Persist",
            "Performance optimization through strategic resource memoization",
            "Clean, intuitive UI design that complements the game's strategic depth",
            "User authentication system for personalized gameplay experiences",
            "Asynchronous state updates for seamless user interactions",
            "Modular architecture allowing for easy feature expansion and maintenance"
        ],
        videoUrl: "iN4lZl062JE"
    },
    {
        id: 2,
        title: "TerrainTD",
        shortDescription: "A Java LibGDX tower defense game for Android that combines strategic terrain manipulation with classic tower defense mechanics, offering a unique tactical experience.",
        longDescription: [
            {
                title: "Game Concept and Innovation",
                body: "TerrainTD reimagines the tower defense genre by introducing a unique terrain manipulation mechanic. Players must not only strategically place towers but also modify the landscape to create optimal defensive configurations. The game's core challenge lies in solving the 'terrain puzzle' - leveraging different terrain types to affect enemy movement and tower effectiveness. This innovative approach transforms a simple tower defense game into a complex strategic experience where terrain management is key to success. The game contains different enemy and tower types, each requiring distinct programming logic, adding layers of strategy and complexity to the gameplay."
            },
            {
                title: "Technical Implementation and Challenges",
                body: "Developed using Java and the LibGDX framework, TerrainTD showcases advanced game development techniques. The most significant challenge was designing and implementing a sophisticated hexagonal grid system, complemented by an A* pathfinding algorithm adapted for varied terrain types. This required intricate mathematical calculations and algorithmic optimizations to ensure smooth gameplay on mobile devices. The game features dynamic map generation that ensures challenging, yet always winnable scenarios. Another major focus was balancing game mechanics, which involved extensive playtesting and iterative refinement of tower abilities, enemy behaviors, and terrain effects. The project utilizes object-oriented programming principles to create a modular and extensible codebase, facilitating easy addition of new features and game elements while optimizing performance for Android devices."
            }
        ],
        technologies: [
            "Java",
            "LibGDX",
            "Android SDK",
            "A* Pathfinding",
            "Object-Oriented Programming",
            "Game State Management",
            "Excel Data Integration"
        ],
        cardImageUrl: "/assets/images/terraintd1.jpg",
        carouselImages: [
            { url: "/assets/images/terraintd2.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/terraintd3.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/terraintd4.jpg", aspectRatio: "2to1" },
            { url: "/assets/images/terraintd5.jpg", aspectRatio: "2to1" },
        ],
        githubUrl: "https://github.com/ErikT-Dev/terraintd",
        colors: ["#6859b6", "rgba(67, 57, 119, 0.5)", "#433d5a"],
        keyFeatures: [
            "Procedurally generated hexagonal terrain with diverse, gameplay-affecting tile types",
            "Advanced A* pathfinding algorithm adapted for hexagonal grids and variable terrain",
            "Multiple tower types with unique abilities and upgrade paths",
            "Diverse enemy units with distinct behaviors and vulnerabilities",
            "Complex resource management system including gold and terrain modification tokens",
            "Dynamic texture assignment system for enhanced visual variety",
            "Challenging gameplay that encourages strategic thinking and multiple playthroughs",
            "Sophisticated state management for game progression and save/load functionality",
            "Performance-optimized rendering and game logic for smooth mobile gameplay",
            "Data-driven design utilizing Excel integration for easy game balancing and content updates"
        ],
        videoUrl: "RkaRLv0SyEI"
    },
    {
        id: 3,
        title: "ScaleFinder",
        shortDescription: "A Kotlin-based Android app for musicians, offering a unique way to explore musical scales, chords, and modes with an intuitive interface and extensive database.",
        longDescription: [
            {
                title: "Project Genesis",
                body: "ScaleFinder emerged from two primary motivations: a desire to immerse myself in cutting-edge Android development techniques and a recognition of an unmet need in existing music theory applications. The core concept of the app capitalizes on the inherent overlap between musical scales, where multiple scales often share common notes. By allowing users to input specific notes, ScaleFinder reveals all scales containing those notes, thus providing an invaluable resource for musicians engaged in composition, improvisation, or music theory studies."
            },
            {
                title: "Development Process",
                body: "The development journey began with the creation of a comprehensive SQLite database, meticulously crafted to house detailed information on a wide array of musical scales. This database was structured to optimize performance for rapid scale matching and retrieval. The user interface was designed using Jetpack Compose, embracing modern declarative UI paradigms. The app's architecture follows the Model-View-ViewModel (MVVM) pattern, ensuring a clear separation of concerns and facilitating maintainability and testability. Throughout the development process, I focused on implementing efficient algorithms for scale matching and exploring various Android development best practices, including reactive programming with Kotlin Flows and coroutines for asynchronous operations."
            }
        ],
        technologies: [
            "Kotlin",
            "Jetpack Compose",
            "SQLite",
            "MVVM Architecture",
            "Android Studio",
            "Kotlin Coroutines",
            "Kotlin Flows"
        ],
        cardImageUrl: "/assets/images/scalefinder1.jpg",
        carouselImages: [
            { url: "/assets/images/scalefinder2.jpg", aspectRatio: "1to2" },
            { url: "/assets/images/scalefinder3.jpg", aspectRatio: "1to2" },
            { url: "/assets/images/scalefinder4.jpg", aspectRatio: "1to2" },
        ],
        githubUrl: "https://github.com/ErikT-Dev/scalefinder",
        colors: ["#a169c3", "rgba(95, 62, 115, 0.5)", "#53435c"],
        keyFeatures: [
            "Extensive database encompassing 636 distinct musical scales",
            "Interactive scale explorer with real-time, dynamically updating match counts",
            "Comprehensive browsing capability for various scale types and modes",
            "Detailed scale information, including visualization of constituent tertian triad chords",
            "Personalized scale management with favorites list functionality",
            "Sophisticated and optimized filtering system for efficient scale matching and retrieval",
            "Intuitive piano interface for note input and scale visualization",
            "Offline functionality for use without an internet connection"
        ],
        videoUrl: "zHH8XVbcNyY"
    },
    {
        id: 4,
        title: "Meta80",
        shortDescription: "A MEAN stack web application for discovering critically acclaimed films with Metacritic scores of 80 or higher, featuring advanced filtering and personalized user lists.",
        longDescription: [
            {
                title: "Project Objective",
                body: "Meta80 was conceived with the dual purpose of creating a practical tool for film enthusiasts and implementing modern web development best practices. The result is a full-stack MEAN (MongoDB, Express.js, Angular, Node.js) application that provides users with a curated platform to discover films that have achieved a Metacritic score of 80 or above. Metacritic, an aggregator of professional film critics' reviews, assigns each film a score from 0 to 100, offering a reliable metric for assessing a film's critical reception. This application focuses on films scoring 80 or higher, which consistently prove to be of high quality and worthy of viewers' attention."
            },
            {
                title: "Development Approach",
                body: "The development process began with the creation of a comprehensive dataset. Utilizing Python, I wrote a script to compile a list of all 1,476 films that have attained a Metacritic score of 80 or higher. To enrich this dataset, I leveraged the APIs of The Movie Database (TMDB) and the Open Movie Database (OMDB) to gather detailed information about each film. This data was then used to populate a dedicated MongoDB database, ensuring a rich and informative user experience. The backend, built with Node.js and Express.js, implements RESTful API endpoints that facilitate efficient data retrieval and filtering. On the frontend, Angular was employed to create a responsive and intuitive user interface, with Angular Material providing a polished, modern aesthetic."
            }
        ],
        technologies: [
            "Angular",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "Express.js",
            "Angular Material",
            "Google Cloud App Engine",
            "MongoDB Atlas",
            "MongoDB Compass"
        ],
        cardImageUrl: "/assets/images/meta801.jpg",
        carouselImages: [
            { url: "/assets/images/meta802.jpg", aspectRatio: "16to9" },
            { url: "/assets/images/meta803.jpg", aspectRatio: "16to9" },
            { url: "/assets/images/meta804.jpg", aspectRatio: "16to9" },
            { url: "/assets/images/meta805.jpg", aspectRatio: "16to9" },
            { url: "/assets/images/meta806.jpg", aspectRatio: "16to9" },
        ],
        githubUrl: "https://github.com/ErikT-Dev/meta80",
        liveUrl: "https://meta80.appspot.com/?sortBy=year&sortOrder=desc&page=1&limit=20&watchlist=false&seenlist=false&showDocumentaries=false",
        colors: ["#7cc484", "rgba(54, 72, 51, 0.5)", "#4b5f4d"],
        keyFeatures: [
            "Comprehensive database of critically acclaimed films",
            "User authentication system with personalized watchlists and viewed lists",
            "Advanced filtering and sorting capabilities based on genres, decades, countries, and directors",
            "Dynamic recalculation of movie counts in response to applied filters",
            "Optimized MongoDB queries for efficient data retrieval",
            "Pagination and dynamic loading for enhanced performance",
            "Reactive programming implementation using RxJS observables in Angular services",
            "Robust security measures including CORS configuration, Helmet middleware, and secure session management",
            "Responsive design with a modern UI implemented using Angular Material"
        ]
    }
];