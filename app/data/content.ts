export const featuredProjects = [
  {title:"Nokia Snake Game",category:"Game Development",tech:["C++","SFML"],repo:"https://github.com/Nouman-Irfan/Nokia-Snake-Game-SFML",desc:"A polished desktop recreation of the classic Snake experience using a real-time event loop and SFML graphics.",features:["Responsive controls","Score tracking","Collision system"],mark:"SNAKE"},
  {title:"C++ Chess Game",category:"Game Development",tech:["C++","SFML"],repo:"https://github.com/Nouman-Irfan/Chess-with-SFML",desc:"A visual chess application focused on board state, piece rules, turn management, and interactive play.",features:["Move validation","Turn logic","Desktop UI"],mark:"CHESS"},
  {title:"JavaFX Chess Game",category:"Java",tech:["Java","JavaFX"],repo:"https://github.com/Nouman-Irfan/JavaFX-Chess-Game",desc:"An event-driven chess interface built with Java and JavaFX, applying object-oriented design to game logic.",features:["JavaFX interface","OOP architecture","Game-state handling"],mark:"JAVA"},
  {title:"To-Do List System",category:"Console Applications",tech:["C++","File Handling"],repo:"https://github.com/Nouman-Irfan/To-Do-List-Management-System",desc:"A practical task-management system with persistent records and a clear console workflow.",features:["Create and update tasks","Persistent storage","Organized menus"],mark:"TODO"},
];
export const additionalProjects = [
  ["Student Portal Console App","C++","Console Applications","https://github.com/Nouman-Irfan/Student-Portal-Console-App"],
  ["Grade Calculator","C++","Console Applications","https://github.com/Nouman-Irfan/grade-calculator-console-app"],
  ["Password Strength Checker","C++","Console Applications","https://github.com/Nouman-Irfan/password-strength-checker"],
  ["Rock Paper Scissors","C++","Game Development","https://github.com/Nouman-Irfan/rock-paper-scissor-cpp"],
  ["Dynamic Test Score System","C++","Console Applications","https://github.com/Nouman-Irfan/dynamic-test-score-system"],
  ["Consecutive Ones Finder","C++","Console Applications","https://github.com/Nouman-Irfan/consecutive-ones-finder"],
].map(([title,language,category,repo])=>({title,language,category,repo}));

export const skills = [
  ["Programming Languages",[["C++","Desktop applications, games, memory management, and core problem-solving."],["Python","Clear scripts, small utilities, and programming fundamentals."],["Java","Object-oriented desktop applications and event-driven interfaces."]]],
  ["Frameworks & Graphics",[["SFML","2D rendering, input handling, audio, and real-time game loops."],["JavaFX","Structured desktop interfaces, scenes, controls, and events."],["React","Reusable component-based user interfaces."],["Next.js","Modern, production-minded React applications."],["Tailwind CSS","Responsive, utility-led interface styling."]]],
  ["Development Tools",[["Git","Reliable version history and iterative development."],["GitHub","Project publishing, collaboration, and portfolio documentation."],["Visual Studio","C++ development, debugging, and project organization."],["VS Code","Flexible development across languages and toolchains."],["IntelliJ IDEA","Productive Java development, project navigation, and debugging."]]],
  ["Programming Concepts",[["Dynamic Memory","Responsible allocation, lifetimes, and pointer-based structures."],["Pointers","Memory-aware C++ programming and data manipulation."],["File Handling","Persistent records for practical desktop and console systems."],["Object-Oriented Programming","Encapsulation, inheritance, and maintainable domain models."],["Event-Driven Programming","Responsive interfaces driven by user and system events."],["Problem-Solving","Breaking requirements into testable, logical steps."],["Data Structures","Foundational structures for organizing and processing data."]]],
] as const;

export const achievements = [
  {name:"UCP Career Connect",role:"Event Operations Contributor",date:"University initiative",desc:"Supported a career-focused university event connecting students with professional opportunities.",skills:["Coordination","Communication","Operations"],image:"/achievements/career-connect.png"},
  {name:"Jashn-e-Baharaan",role:"Event Team Member",date:"University activity",desc:"Contributed to planning and on-ground execution for a large cultural celebration.",skills:["Teamwork","Logistics","Event management"],image:"/achievements/jashn-e-baharaan.jpg",pdf:"/achievements/jashn-e-baharaan.pdf"},
  {name:"Summer Internship Program",role:"Program Contributor",date:"University initiative",desc:"Assisted with coordination and student-facing activities supporting internship readiness.",skills:["Leadership","Communication","Coordination"],image:"/achievements/summer-internship-ushers.jpg",pdf:"/achievements/summer-internship-ushers.pdf"},
  {name:"Punjabi Mushaira",role:"Operations Team Lead",date:"Cultural activity",desc:"Led event operations to deliver a welcoming, organized experience for participants and attendees.",skills:["Operations Leadership","Teamwork","Hospitality"],image:"/achievements/punjabi-mushaira.png"},
  {name:"Ushers Club",role:"Active Member",date:"Ongoing",desc:"Supported guest movement, event flow, and professional front-of-house coordination.",skills:["Leadership","Logistics","Communication"],image:"/achievements/ushers-club.png"},
  {name:"Team ISS",role:"Inclusive Students Society Team Member",date:"University society",desc:"Contributed to an inclusive campus culture supporting equal learning opportunities, accessibility, dignity, and confidence for every student.",skills:["Inclusion","Collaboration","Student Support"],image:"/achievements/team-iss.jpg",pdf:"/achievements/team-iss.pdf"},
  {name:"Think2Code 2.0",role:"Programming Competition Participant",date:"IEEE Computer Society · UCP",desc:"Actively participated and contributed in Think2Code 2.0, a programming competition organized by the IEEE Computer Society UCP Student Chapter.",skills:["Competitive Programming","Problem-Solving","Teamwork"],image:"/achievements/think2code.jpg",pdf:"/achievements/think2code.pdf"},
];

export const certificates = [
  {title:"Google AI Professional Certificate",issuer:"Google · Coursera",date:"July 11, 2026",skill:"Applied AI",image:"/certificates/google-ai-professional.jpg",pdf:"/certificates/google-ai-professional.pdf",courses:["AI Fundamentals","AI for Brainstorming and Planning","AI for Research and Insights","AI for Writing and Communicating","AI for Content Creation","AI for Data Analysis","AI for App Building"]},
  {title:"AI for App Building",issuer:"Google · Coursera",date:"July 11, 2026",skill:"AI-assisted Development",image:"/certificates/ai-app-building.jpg",pdf:"/certificates/ai-app-building.pdf"},
  {title:"AI for Brainstorming and Planning",issuer:"Google · Coursera",date:"June 20, 2026",skill:"Planning with AI",image:"/certificates/ai-brainstorming-planning.jpg",pdf:"/certificates/ai-brainstorming-planning.pdf"},
  {title:"AI for Content Creation",issuer:"Google · Coursera",date:"July 11, 2026",skill:"Generative AI",image:"/certificates/ai-content-creation.jpg",pdf:"/certificates/ai-content-creation.pdf"},
  {title:"AI for Data Analysis",issuer:"Google · Coursera",date:"July 11, 2026",skill:"AI Data Analysis",image:"/certificates/ai-data-analysis.jpg",pdf:"/certificates/ai-data-analysis.pdf"},
  {title:"AI for Research and Insights",issuer:"Google · Coursera",date:"July 11, 2026",skill:"AI Research",image:"/certificates/ai-research-insights.jpg",pdf:"/certificates/ai-research-insights.pdf"},
  {title:"AI Fundamentals",issuer:"Google · Coursera",date:"June 20, 2026",skill:"Artificial Intelligence",image:"/certificates/ai-fundamentals.jpg",pdf:"/certificates/ai-fundamentals.pdf"},
  {title:"HTML, CSS, and JavaScript for Web Developers",issuer:"Johns Hopkins University · Coursera",date:"June 19, 2026",skill:"Web Development",image:"/certificates/html-css-javascript.jpg",pdf:"/certificates/html-css-javascript.pdf"},
  {title:"AI Infrastructure and Operations Fundamentals",issuer:"NVIDIA · Coursera",date:"June 22, 2026",skill:"AI Infrastructure",image:"/certificates/nvidia-ai-infrastructure.jpg",pdf:"/certificates/nvidia-ai-infrastructure.pdf"},
];

export const experiences = [
  {
    company:"DecodeLabs",
    role:"Python Programming Intern",
    type:"Virtual Internship Program",
    duration:"June 3, 2026 - July 3, 2026",
    issued:"Certificate issued July 4, 2026",
    description:"Completed a focused virtual internship in Python programming, applying consistent hands-on problem-solving across real-world projects and collaborative tasks.",
    highlights:["Developed practical Python programming skills","Worked through real-world project scenarios","Completed collaborative programming tasks","Demonstrated dedication, consistency, and a growth mindset"],
    skills:["Python","Problem-Solving","Collaboration","Real-World Projects","Remote Work"],
    certificate:"/experience/decodelabs-python-internship.jpg",
    certificatePdf:"/experience/decodelabs-python-internship.pdf",
  },
];
