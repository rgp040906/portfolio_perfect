export const skills = {
  cybersecurity: [
    "Ethical Hacking", "Vulnerability Assessment", "Web Application Security",
    "Network Security", "Penetration Testing Fundamentals", "Incident Response Fundamentals",
    "Digital Forensics Fundamentals", "Cryptography", "Security Auditing",
    "OWASP Vulnerabilities", "SQL Injection", "XSS", "Authentication Security",
    "Packet Analysis", "Network Enumeration"
  ],
  tools: [
    "Nmap", "Burp Suite", "Wireshark", "Nessus", "Nikto",
    "Metasploit Framework", "Hydra", "Snort/Suricata", "Gobuster"
  ],
  programming: ["Python", "C++", "Java", "SQL"],
  backend: ["Spring Boot", "REST APIs", "JWT Authentication", "Maven", "MySQL", "Git", "GitHub"],
  devops: ["Docker", "Docker Compose", "Linux", "Kali Linux", "Ubuntu", "WSL", "VirtualBox", "AWS EC2 fundamentals"]
};

export const projects = [
  {
    title: "SentinelAI",
    featured: true,
    description: "AI-powered cybersecurity project developed for the AMD Developer Hackathon, involving Docker, PostgreSQL, backend services, and AI API integration.",
    stack: ["Python", "Docker", "PostgreSQL", "AI APIs"],
    icon: "Shield",
    impact: "Automates threat analysis significantly reducing response times."
  },
  {
    title: "Public Grievance Redressal System",
    featured: false,
    description: "A full-stack web application developed during the HackSpring Hackathon on iamneo, designed to manage, track, and resolve public grievances through a structured digital platform.",
    stack: ["Full-Stack", "Web Application", "Hackathon"],
    icon: "Database",
    impact: "Streamlines public issue tracking and resolution."
  },
  {
    title: "LedgerLogic: Double-Entry Engine",
    featured: false,
    description: "A full-stack application developed on the Amypo platform, implementing double-entry accounting principles for accurate financial transaction recording and management.",
    stack: ["Full-Stack", "Accounting", "Amypo Platform"],
    icon: "Database",
    impact: "Ensures accurate financial transaction recording."
  },
  {
    title: "SweetShop Inventory Management System",
    featured: false,
    description: "An inventory management application designed to manage products, stock quantities, pricing, and inventory operations efficiently.",
    stack: ["Inventory Management", "Stock Tracking"],
    icon: "Database",
    impact: "Optimizes inventory operations and stock tracking."
  },
  {
    title: "Phishing Email Detection System",
    featured: false,
    description: "A machine-learning project using Python and Scikit-learn to classify emails as phishing or legitimate.",
    stack: ["Python", "Scikit-learn", "Machine Learning"],
    icon: "Mail",
    impact: "High accuracy threat detection."
  },
  {
    title: "Password Strength Analyzer",
    featured: false,
    description: "A cybersecurity tool that evaluates password strength based on complexity and common security weaknesses.",
    stack: ["Cybersecurity", "Password Security"],
    icon: "Key",
    impact: "Enhances user awareness by identifying weak security patterns."
  },
  {
    title: "Secure Login & Authentication System",
    featured: false,
    description: "A secure authentication project implementing password hashing and backend security concepts.",
    stack: ["Authentication", "Security", "Backend"],
    icon: "Lock",
    impact: "Robust security against unauthorized access."
  },
  {
    title: "Cybersecurity Vulnerability Assessment Lab",
    featured: false,
    description: "A hands-on security assessment project using tools such as Nmap, Nessus, and Nikto to identify and analyze vulnerabilities.",
    stack: ["Nmap", "Nessus", "Nikto", "Cybersecurity"],
    icon: "Shield",
    impact: "Identifies and analyzes system vulnerabilities."
  }
];

export const securityLab = [
  {
    title: "Network Scanning & Enumeration",
    objective: "Identify active hosts, open ports, and running services on a target network.",
    environment: "Kali Linux, Metasploitable 2",
    tools: ["Nmap"],
    methodology: "Conducted ping sweeps followed by intense TCP/UDP scans and version detection.",
    findings: "Discovered several misconfigured services and outdated software versions.",
    remediation: "Recommended patching outdated software and closing unused ports.",
    learned: "Deepened understanding of Nmap scripting engine and stealth scanning techniques."
  },
  {
    title: "Vulnerability Scanning",
    objective: "Automate the discovery of known vulnerabilities across target systems.",
    environment: "Kali Linux, Local Virtual Lab",
    tools: ["Nessus", "Nikto"],
    methodology: "Configured authenticated and unauthenticated scans against web servers and OS endpoints.",
    findings: "Identified Critical and High severity vulnerabilities including default credentials and missing patches.",
    remediation: "Implemented patch management and disabled default accounts.",
    learned: "Interpreting automated scan results and prioritizing remediation based on CVSS."
  },
  {
    title: "Web Application Testing",
    objective: "Identify and exploit web application vulnerabilities.",
    environment: "Kali Linux, DVWA",
    tools: ["Burp Suite"],
    methodology: "Intercepted traffic, manipulated parameters, and tested for OWASP Top 10 vulnerabilities.",
    findings: "Successfully executed SQL injection and Cross-Site Scripting (XSS) attacks.",
    remediation: "Implemented input validation, parameterized queries, and output encoding.",
    learned: "Practical exploitation and mitigation of web vulnerabilities."
  }
];

export const experience = [
  {
    role: "Cyber Security Intern",
    company: "Thiranex",
    timeline: [
      {
        title: "Week 1 - Threat Identification",
        description: "Identified potential security threats and attack vectors."
      },
      {
        title: "Week 2 - Vulnerability Assessment",
        description: "Worked with Nessus and Nikto; analyzed and categorized discovered vulnerabilities."
      },
      {
        title: "Week 3 - Incident Response",
        description: "Practiced breach simulation and incident response in controlled labs; worked with Kali Linux, Metasploitable, DVWA."
      }
    ]
  },
  {
    role: "Cybersecurity Intern",
    company: "InternPe",
    timeline: [{ title: "Internship", description: "Completed foundational cybersecurity tasks and learning modules." }]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Harisan Technologies",
    timeline: [{ title: "Internship", description: "Developed and maintained full-stack web applications." }]
  }
];

export const certifications = [
  { name: "NPTEL Ethical Hacking Certification", issuer: "NPTEL" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google" },
  { name: "IBM Cybersecurity Fundamentals", issuer: "IBM" },
  { name: "Microsoft Security, Compliance, and Identity Fundamentals", issuer: "Microsoft" },
  { name: "Cisco CyberOps Associate", issuer: "Cisco" }
];

export const achievements = [
  "Cyber Security Intern – Thiranex",
  "Shortlisted, IBM-Corizo Summer Internship Program",
  "AMD Developer Hackathon ACT II participant",
  "1st Prize, Zero Day event (SKCET)"
];
