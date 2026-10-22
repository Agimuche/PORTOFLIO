export interface Project {
  id: string;
  title: string;
  category: string;
  role?: string;
  company?: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Engineering" | "Leadership & Training" | "Data & Science";
  description: string[];
  technologies?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  credentialUrl?: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "AGIM UCHECHUKWU CHIGOZIE",
  preferredName: "Agim Daniel",
  shortName: "AGIM.",
  role: "Full-Stack Software Engineer",
  specialties: ["Full-Stack Software Engineer", "Data Analyst", "Educator & STEM Leader"],
  tagline: "Bridging Full-Stack Engineering, Data Analytics & Scientific Precision",
  summary:
    "Multidisciplinary professional spanning software engineering, data analysis, UI/UX design, chemistry education, and public/environmental health. Currently building front-end and full-stack products while leading technical training as Head of Training & Development for a 20-team internship programme, and teaching data analysis, coding, and STEM subjects across two academies. Holds a B.Sc. in Software Engineering (graduated and certified June 20, 2026), a B.Sc. in Environmental Health Science, and a proven track record of shipping real production systems.",
  location: "Calabar Municipal, Cross River State, Nigeria",
  phone: "+2348142720498",
  phoneDisplay: "+234 814 272 0498",
  email: "Agimuche1@gmail.com",
  github: "https://github.com/Agimuche",
  linkedin: "https://www.linkedin.com/in/san-agim-uchechukwu-1b4671199/",
  cvPath: "/assets/aistudio/Agim_Uchechukwu_Chigozie_Newly_edited_CV_5fbc3f15.pdf",
  stats: [
    { value: "20+", label: "Product Teams Governed", detail: "Orange Internship Programme" },
    { value: "10+", label: "Shipped Applications", detail: "Web, Mobile & AI Solutions" },
    { value: "2", label: "Certified University Degrees", detail: "Software Eng. & Environmental Health" },
    { value: "6+", label: "Professional Credentials", detail: "WHO, UNICEF, WSO, Terra-Learning" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Frameworks",
    description: "Core languages and web/mobile application architectures",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Dart", "Python", "Node.js", "FastAPI"],
  },
  {
    title: "Data Analytics & Modeling",
    description: "Statistical computing, visualization, and thesis analysis",
    skills: ["Python (Pandas/NumPy)", "Microsoft Power BI", "SPSS", "Advanced Excel", "Statistical Analysis", "Data Cleaning", "Quantitative Modeling"],
  },
  {
    title: "UI/UX & Product Design",
    description: "User research, design systems, and rapid prototyping",
    skills: ["Figma", "Adobe Photoshop", "Design Systems", "Wireframing", "Responsive UI/UX", "Canvas API", "Three.js 3D"],
  },
  {
    title: "Leadership & Training",
    description: "Instructional engineering, mentorship, and program governance",
    skills: ["Curriculum Design", "Program Governance", "Technical Mentorship", "Chemistry Instruction", "Public Speaking", "Agile Team Leadership"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "circo-head",
    role: "Head of Training and Development",
    company: "Circo Digital Academy | Orange Internship Programme",
    location: "Remote / Hybrid",
    period: "2025 – Present",
    type: "Leadership & Training",
    description: [
      "Lead technical training strategy, governance, and standard operational documentation for the Orange Internship Programme across 20 multi-disciplinary product teams.",
      "Architect practical project curriculums and evaluate project deliverables across frontend, backend, and product management pipelines.",
      "Mentor emerging software engineers and track technical KPIs across cohorts.",
    ],
    technologies: ["Program Governance", "Curriculum Architecture", "Agile Management", "Technical Training"],
  },
  {
    id: "circo-data-instructor",
    role: "Data Analyst Instructor",
    company: "Circo Digital Academy",
    location: "Remote",
    period: "Oct 2025 – Present",
    type: "Leadership & Training",
    description: [
      "Instruct trainee cohorts in core data analysis fundamentals including applied statistics, Microsoft Excel, and Microsoft Power BI dashboards.",
      "Design hands-on analytical projects and guide students through data cleaning, transformation, and business insight extraction.",
    ],
    technologies: ["Power BI", "Excel", "Applied Statistics", "Business Intelligence"],
  },
  {
    id: "525system",
    role: "Software Engineer (Front-end)",
    company: "525System Nigeria LTD",
    location: "Calabar Municipal, Cross River State",
    period: "Nov 2025 – Present",
    type: "Engineering",
    description: [
      "Engineered frontend architecture for Habeep, an enterprise Real Estate web and mobile application.",
      "Maintained full-stack integration points and continuous development of responsive database and UI components.",
      "Implemented CI/CD component delivery workflows ensuring cross-platform stability and high-performance load times.",
    ],
    technologies: ["React", "JavaScript/TypeScript", "Dart/Mobile", "REST APIs", "CI/CD"],
  },
  {
    id: "webcraft",
    role: "Full Stack Software Developer",
    company: "Webcraft-Project Nigeria",
    location: "Yaba, Lagos State (Remote)",
    period: "Dec 2025 – Present",
    type: "Engineering",
    description: [
      "Develop custom web application solutions for commercial enterprises, hotels, academic institutions, and healthcare clinics across Nigeria.",
      "Design scalable, secure application architectures resilient to unauthorized access and cyber threats.",
      "Maintain robust API connections and transactional workflows for end-user operations.",
    ],
    technologies: ["Full-Stack Architecture", "Node.js", "React", "Application Security", "SQL"],
  },
  {
    id: "geecore",
    role: "Software Engineering Intern",
    company: "Geecore Limited Nigeria",
    location: "Calabar Municipal, Cross River State",
    period: "Jun 2025 – Nov 2025",
    type: "Engineering",
    description: [
      "Contributed to building Wivali AI, an intelligent AI-powered web builder platform enabling users to generate and publish responsive websites.",
      "Built and tested frontend user workflows and backend API integrations.",
      "Practiced and expanded mobile app engineering patterns alongside web systems.",
    ],
    technologies: ["AI Integration", "React", "Mobile Development", "REST APIs"],
  },
  {
    id: "rlabs",
    role: "Software Engineering Intern",
    company: "RLabs Nigeria",
    location: "Yaba, Lagos State (Remote)",
    period: "Sep 2024 – Present",
    type: "Engineering",
    description: [
      "Collaborate with development teams to iterate and modernize company web applications and digital interfaces.",
      "Refactor UI components for enhanced cross-browser responsiveness and accessibility standards.",
    ],
    technologies: ["Frontend Architecture", "UI Refactoring", "Responsive Web Design"],
  },
  {
    id: "power-learn",
    role: "Software Engineering Trainee",
    company: "Power Learn Academy",
    location: "Nairobi, Kenya (Remote)",
    period: "Sep 2024 – Present",
    type: "Engineering",
    description: [
      "Engage in intensive Pan-African software engineering curriculum building enterprise web applications in collaborative sprint environments.",
      "Master modern architectural patterns, algorithms, and microservice architectures.",
    ],
    technologies: ["Python", "Web Architecture", "Sprint Cycles", "Git Collaboration"],
  },
  {
    id: "gifted-hands",
    role: "Data Analyst & Statistical Researcher",
    company: "Gifted Hands Data-lab",
    location: "Remote",
    period: "Feb 2019 – Present",
    type: "Data & Science",
    description: [
      "Execute structured data collection, statistical cleaning, hypothesis testing, and quantitative modeling for academic researchers.",
      "Partner with undergraduate and postgraduate scholars to analyze research datasets using SPSS, Python, and Excel.",
    ],
    technologies: ["SPSS", "Advanced Excel", "Python", "Hypothesis Testing", "Research Methodology"],
  },
  {
    id: "chemistry-teaching",
    role: "Chemistry Teacher & STEM Mentor",
    company: "Mabel Divine International & Saint Joseph Secondary",
    location: "Nnewi, Anambra State",
    period: "May 2019 – Present",
    type: "Leadership & Training",
    description: [
      "Instruct high school scholars in theoretical and practical laboratory Chemistry.",
      "Design empirical experimental laboratory sessions, fostering analytical problem-solving and scientific reasoning.",
    ],
    technologies: ["Laboratory Chemistry", "Experimental Design", "STEM Pedagogy"],
  },
  {
    id: "environmental-health",
    role: "Environmental Health & Public Health Intern",
    company: "MSF (Doctors Without Borders), Federal Teaching Hospital & Ebonyi State Ministry",
    location: "Abakaliki, Ebonyi State",
    period: "2020 – 2021",
    type: "Data & Science",
    description: [
      "Served with Médecins Sans Frontières (MSF) on Water Sanitation and Hygiene (WASH) and Infection Prevention and Control (IPC).",
      "Managed cold-chain vaccine logistics and sanitary inspection protocols with Primary Health Care and Federal Teaching Hospital.",
    ],
    technologies: ["Epidemiology", "WASH/IPC", "Data Logging", "Sanitary Inspection"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "MIVA Open University",
    degree: "B.Sc. in Software Engineering",
    period: "Sep 2023 – Jun 2026",
    location: "Abuja, Nigeria",
    status: "Graduated & Certified (June 20, 2026)",
    highlights: [
      "Officially graduated and certified on June 20, 2026.",
      "Rigorous coursework in Data Structures, Object-Oriented Software Design, Distributed Computing, Database Management Systems, and Cloud Architecture.",
    ],
  },
  {
    institution: "Nnamdi Azikiwe University",
    degree: "B.Sc. in Environmental Health Science",
    period: "Feb 2017 – Nov 2021",
    location: "Awka, Anambra State, Nigeria",
    status: "Graduated",
    highlights: [
      "Comprehensive training in Epidemiology, Biostatistics, Environmental Toxicology, Waste Management Systems, and Quantitative Risk Modeling.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Front-End Web Development Certificate",
    issuer: "Terra-Learning Bootcamp (Cohort 5)",
    period: "Sep 2022 – Nov 2022",
    category: "Software Engineering",
  },
  {
    title: "Product Design (UI/UX) Certificate",
    issuer: "Terra-Learning Bootcamp (Cohort 5)",
    period: "Jul 2022 – Aug 2022",
    category: "Design",
  },
  {
    title: "Data Analytics Certificate",
    issuer: "Terra-Learning Bootcamp (Cohort 5)",
    period: "Apr 2022 – May 2022",
    category: "Data Science",
  },
  {
    title: "HSE 1, 2, & 3 Certification (Health, Safety & Environment)",
    issuer: "Deslog Energy / World Safety Organization (WSO)",
    period: "Sep 2019 – Jan 2020",
    category: "Safety & Compliance",
  },
  {
    title: "Infection Prevention and Control (IPC) on COVID-19",
    issuer: "World Health Organization (WHO) - OpenWHO",
    period: "Apr 2020 – May 2020",
    category: "Healthcare",
  },
  {
    title: "Introduction to Water Sanitation and Hygiene (WASH)",
    issuer: "UNICEF - Agora Platform",
    period: "Mar 2020 – Apr 2020",
    category: "Public Health",
  },
];

export const AWARDS = [
  {
    title: "President of STEM Club",
    organization: "Evangel Comprehensive Secondary School",
    period: "2013 / 2014",
    description: "Led student scientific demonstrations, peer tutoring, and mathematics competitions.",
  },
  {
    title: "Honorable Member",
    organization: "Ebonyi State Children Parliament",
    period: "2012 / 2013",
    description: "Deliberated on regional educational policies, child welfare governance, and youth empowerment initiatives.",
  },
  {
    title: "Science Laboratory Prefect",
    organization: "Evangel Comprehensive Secondary School",
    period: "2013 / 2014",
    description: "Managed laboratory reagent inventory, safety protocols, and empirical experiment preparation.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "habeep",
    title: "Habeep Real Estate App",
    category: "Mobile & Web",
    role: "Frontend Software Engineer",
    company: "525System Nigeria LTD",
    description: "Full-featured real estate ecosystem allowing property discovery, verified tenancy contracts, virtual tours, and automated booking.",
    longDescription: "Engineered responsive cross-platform web and mobile user interfaces with real-time property cataloging, map-assisted neighborhood filters, agent messaging, and continuous database sync.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Dart", "Mobile", "REST APIs", "PostgreSQL"],
    featured: true,
  },
  {
    id: "wivali-ai",
    title: "Wivali AI Website Builder",
    category: "AI & SaaS",
    role: "Software Engineering Intern",
    company: "Geecore Limited Nigeria",
    description: "Intelligent web application that dynamically generates, customizes, and deploys production-ready websites for businesses based on natural language inputs.",
    longDescription: "Worked on AI pipeline integration, interactive component canvas, dynamic template styling engines, and automated cloud deployment triggers.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tags: ["AI Integration", "React", "Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "chemlearn-nigeria",
    title: "ChemLearn Nigeria",
    category: "EdTech & 3D",
    role: "Founder & Lead Developer",
    description: "Interactive chemistry learning platform featuring real-time 3D molecular orbital visualizations and Nigerian syllabus curriculum simulations.",
    longDescription: "Bridges scientific chemistry education with cutting-edge WebGL rendering. Allows students to rotate 3D orbital models, run virtual titration experiments, and access AI-assisted study guides.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d454666a?auto=format&fit=crop&q=80&w=800",
    tags: ["Three.js", "React", "AI Integration", "WebGL", "EdTech"],
    liveUrl: "https://exquisite-kangaroo-fd67cf.netlify.app/",
    featured: true,
  },
  {
    id: "aurelia-hotels",
    title: "Aurelia Hotel & Resort",
    category: "Hospitality",
    role: "Full-Stack Developer",
    company: "Webcraft-Project Nigeria",
    description: "Luxury hospitality web platform featuring room reservation workflows, concierge ordering, and responsive booking confirmation.",
    longDescription: "Designed for boutique luxury resorts with smooth page transitions, high-resolution visual galleries, and secure booking capture.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Hospitality"],
    liveUrl: "https://aurelia-hotels.netlify.app/",
    featured: true,
  },
  {
    id: "chef-green-kitchen",
    title: "CHEF Green Kitchen",
    category: "E-commerce",
    role: "Full-Stack Developer",
    description: "Authentic culinary e-commerce platform with automated online menu ordering, cart calculation, and Paystack payment gateway integration.",
    longDescription: "Built for high-volume kitchen orders with live status tracking, delivery dispatch updates, and verified Paystack webhook integration.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Paystack API", "Node.js", "Express"],
    liveUrl: "https://chef-green-kitchen.netlify.app/",
    featured: true,
  },
  {
    id: "spec-health",
    title: "SPEC Health Telemedicine",
    category: "Healthcare",
    role: "Backend & Frontend Engineer",
    description: "Telemedicine platform connecting patients with verified medical professionals, virtual appointments, and encrypted medical records.",
    longDescription: "Leverages FastAPI and PostgreSQL for secure medical practitioner credentialing, patient consultation queues, and clinical appointment scheduling.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800",
    tags: ["FastAPI", "React", "PostgreSQL", "Healthcare"],
    liveUrl: "https://sage-pegasus-729da0.netlify.app/",
    featured: true,
  },
  {
    id: "school-harmony-hub",
    title: "School Harmony Hub",
    category: "EdTech",
    role: "Full-Stack Developer",
    description: "Comprehensive management dashboard for schools, grades, student attendance tracking, and classroom collaboration.",
    longDescription: "Features role-based access for teachers, students, and administrators with real-time data persistence powered by Supabase.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Supabase", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://school-harmony-hub.vercel.app/",
  },
  {
    id: "skycast-weather",
    title: "SkyCast Weather",
    category: "API & Data",
    role: "Frontend Developer",
    description: "Real-time atmospheric forecast application featuring dynamic background updates based on current weather conditions and geolocation.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "OpenWeather API", "Data Visualization"],
    githubUrl: "https://github.com/Agimuche/Weather-Web-App",
  },
  {
    id: "ticket-generator",
    title: "Conference Ticket Generator",
    category: "Utility Tool",
    role: "Developer",
    description: "Interactive web utility for generating customized, high-resolution conference attendee badges using HTML5 Canvas API.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "Canvas API", "HTML5"],
    githubUrl: "https://github.com/Agimuche/conference-ticket-generator",
  },
  {
    id: "sh-html-track",
    title: "SH HTML Track",
    category: "Frontend",
    role: "Developer",
    description: "Advanced training repository featuring modern UI components, semantic HTML5, and responsive CSS layouts.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Agimuche/SH_HTML_TRACK",
    liveUrl: "https://agimuche.github.io/SH_HTML_TRACK/",
  },
];

export const JOURNEY = {
  scientist: {
    title: "Environmental Health Scientist",
    role: "Scientific Research & Public Health",
    institution: "Nnamdi Azikiwe University & MSF",
    description: "Rigorous scientific training in epidemiological investigation, statistical modeling with SPSS, infection prevention, sanitary risk assessment, and environmental data analysis.",
    image: "/scientist.jpg",
    skills: ["Quantitative Data Modeling", "SPSS & Statistical Rigor", "Infection Prevention (IPC)", "WASH Systems", "Empirical Methodologies"],
  },
  engineer: {
    title: "Software Engineer & Educator",
    role: "Full-Stack System Architect & Head of Training",
    institution: "MIVA Open University (Certified Graduate) & Circo Academy",
    description: "Architecting enterprise web and mobile solutions, governing technical programs across 20 teams, engineering responsive user experiences, and training the next generation of engineers.",
    image: "/engineer.jpg",
    skills: ["Full-Stack Next.js / React", "Python & Node.js Backends", "Three.js 3D Graphics", "CI/CD & Cloud Systems", "Technical Curriculum Design"],
  },
};
