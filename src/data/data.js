export const SITE_DATA = {
  name: "Nicholas Buckley",
  title: "Software Engineer",
  tagline: "TEST",
  socials: {
    github: "https://github.com/npbuckley",
    linkedin: "https://www.linkedin.com/in/npbuckley/",
    email: "mailto:npb630@verizon.net",
    squarelion: "https://squarelion.net"
  },
  skills: {
    languages: ["Python", "TypeScript", "C#", "SQL", "GraphQL", "C++", "Java", "JavaScript", "HTML/CSS", "Bash", "CUDA", "C", "ARM", "LaTeX"],
    frontend: ["React", "Vue3", "Vite", "Bootstrap5", "Razor Pages"],
    backend: ["Node.js", "ASP.NET", "Python"],
    databases: ["MSSQL", "MySQL", "Cassandra"],
    other: ["AWS", "Google Gemini API", "Git", "Stripe API", "SpaCy", "OpenGL", "Godot", "Unity"]
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: "Charity Quest Hour Match",
    summary: "Designed and developed a donation feature for the small business Charity Quest using the Stripe API.",
    description: "• Developed a new feature allowing donors to pledge donations to a charity based on volunteer hours completed during a specified time frame.\n• Implemented a secure payment processing system using the Stripe API for seamless and reliable transactions.\n• Executed the full-stack implementation with a small team, including frontend design, backend logic and database management.",
    tags: ["Typescript", "Vue3", "GraphQL", "Stripe API"],
    link: "https://charityquest.io",
    github: null
  },
  {
    id: 2,
    title: "CUDA Ocean Simulation",
    summary: "An implementation of Tessendorf's Simulating Ocean Water using the Fast Fourier Transform (FFT). Created in Visual Studio 2022 using CUDA and OpenGL.",
    description: "• Implemented a real-time ocean simulation utilizing CUDA for parallel computation of wave dynamics and OpenGL for rendering realistic water surfaces.\n• Optimized wave calculations and rendering processes, achieving significant performance improvements over CPU-based simulations.",
    tags: ["C++", "CUDA", "OpenGL"],
    link: null,
    github: "https://github.com/npbuckley/CUDAOceanSimulation"
  },
  {
    id: 3,
    title: "LEG to ARM Converter",
    summary: "A converter from the imaginary assembly language LEG to runnable ARM assembly.",
    description: "• Engineered a converter to translate the education LEG assembly language into executable ARM assembly.\n• Collaborated with faculty to plan the converter and integrate it into course materials.",
    tags: ["Python", "ARM Assembly", "Bash"],
    link: null,
    github: "https://github.com/npbuckley/LegToArmConverter"
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Engineer I - Security Engineering",
    company: "Verizon",
    period: "Jun 2025 - Present",
    description: "• Designed and developed end-to-end enhancements for Verizon's legal compliance infrastructure, including database design, backend logic, and frontend integration.\n• Deployed a Google Gemini agent to parse legal documents, automatically extracting features into JSON for automation.\n• Developed a portal using React and ASP.NET, utilizing a Python background runner to handle the asynchronous queuing of sensitive records.\n• Designed a periodic NLET verification workflow to automate identity verification and agency registration."
  },
  {
    id: 2,
    role: "Course Assistance (Computer Science Department)",
    company: "Stevens Institute of Technology",
    period: "Aug 2022 - Dec 2024",
    description: "• Selected to be a course assistant for seven different Computer Science courses, including Data Structures, Algorithms, and Systems Programming. • Designed and presented midterm and final review sessions for audiences of 200+ students. • Directed weekly labs for groups of about 20 students, teaching new topics and assisting with assignments. • Hosted weekly office hours to troubleshoot student code and explain lecture material in more detail. • Graded student exams and code submissions on correctness, efficiency, style."
  },
  {
    id: 3,
    role: "Corporate Security Intern - Global Corporate Security Technologies Team",
    company: "Verizon",
    period: "Summers 2023 & 2024",
    description: " Engineered a C# library to extract and label over a dozen types of critical information from PDF documents using NLP, regular expressions. • Integrated the library with a production SQL database to enable real-time retrievals of PDF text for analysis. • Developed a real-time dashboard for the All Hazards Security Operations team, reducing data retrievals times from 10+ minutes. • Wrote optimized stored procedures to aggregate employee location data from 6 sources during an active threat."
  },
  {
    id: 4,
    role: "Founder & Load Software Developer",
    company: "Square Lion",
    period: "Jun 2021 - Present",
    description: "• Designed, developed, and launched 9 original games for iOS, Android, macOS, Windows, and Linux. • Developed the company website from scratch to optimize performance. • Planned and executed all business functions, including development, media content, and social media presence."
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "M.S. Computer Science",
    school: "Stevens Institute of Technology",
    period: "2025-Present"
  },
  {
    id: 2,
    degree: "B.S. Cybersecurity",
    school: "Stevens Institute of Technology",
    period: "2021-2025"
  },
  {
    id: 3,
    degree: "Graduate Certificate in Cybersecurity Risk Management",
    school: "Stevens Institute of Technology",
    period: "2021-2025"
  }
];

// export const PAPERS = [
//   {
//     id: 1,
//     title: "Optimizing State Synchronization in Real-Time Web Applications",
//     conference: "WebSys 2023",
//     abstract: "This paper proposes a delta-compression algorithm for reducing bandwidth usage in collaborative text editors.",
//     link: "#"
//   },
//   {
//     id: 2,
//     title: "A Comparative Analysis of Garbage Collection in Rust vs Go",
//     conference: "Systems Journal 2022",
//     abstract: "An in-depth look at memory safety guarantees and runtime performance overheads in modern system languages.",
//     link: "#"
//   }
// ];