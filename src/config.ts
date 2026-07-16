export const config = {
    developer: {
        name: "Vedant",
        fullName: "Vedant Ukirde",
        title: "Full-Stack Developer | Cloud Engineer",
        description: "Full-Stack Developer building scalable, cloud-native systems with Node.js, TypeScript, and React. Passionate about backend architecture, AWS, Kubernetes, and shipping reliable software fast."
    },
    social: {
        github: "Vedantuki7",
        email: "vedantukirde@gmail.com",
        location: "Toronto, Ontario, Canada"
    },
    about: {
        title: "About Me",
        description: "I'm a Full-Stack Software Engineer with 2+ years of experience building scalable, cloud-native platforms using Node.js, Express, TypeScript, and React. I take end-to-end ownership of complex, enterprise-grade systems, architecting backend services and REST APIs, optimizing databases like MongoDB and PostgreSQL, and deploying with Docker and Kubernetes on AWS. I'm a strong advocate for pragmatic engineering, leveraging AI-assisted workflows and agent-first IDEs to accelerate development while keeping systems reliable. I thrive in collaborative, agile environments where cross-functional problem-solving drives real impact for users."
    },
    experiences: [
        {
            position: "Master of Science, Information Systems",
            company: "Northeastern University",
            period: "2023 - 2025",
            location: "Toronto, Ontario, Canada",
            description: "Graduate studies in Management Information Systems, focused on software engineering, cloud computing, and data systems, while continuing to build production full-stack applications.",
            responsibilities: [
                "Studied advanced software engineering and cloud infrastructure principles",
                "Built full-stack side projects using React, Node.js, and AWS",
                "Deepened expertise in databases, system design, and DevOps practices",
                "Graduated with a 3.8/4.0 GPA"
            ],
            technologies: ["Cloud Computing", "System Design", "Databases", "Software Engineering"]
        },
        {
            position: "Full Stack Software Developer",
            company: "Larsen & Toubro Infotech Ltd",
            period: "March 2022 - April 2023",
            location: "Mumbai, Maharashtra, India",
            description: "Led hands-on coding and architectural decisions for high-availability backend services, ensuring strict alignment with enterprise standards.",
            responsibilities: [
                "Built high-availability backend services and RESTful APIs with Node.js",
                "Optimized React-based UIs for modularity, performance, and maintainability",
                "Engineered secure multi-user workflows using OAuth/JWT with strong data validation",
                "Owned CI/CD pipeline automation with GitHub Actions and Jenkins, cutting deployment cycles by ~40%"
            ],
            technologies: ["Node.js", "React.js", "TypeScript", "OAuth/JWT", "GitHub Actions", "Jenkins"]
        },
        {
            position: "Software Engineer",
            company: "Relation Realtech PVT. LTD.",
            period: "June 2021 - March 2022",
            location: "Pune, Maharashtra, India",
            description: "Developed full-stack web applications and microservices using the MERN stack to support internal business workflows and external clients.",
            responsibilities: [
                "Built full-stack applications and microservices with MongoDB, Express, React, and Node.js",
                "Designed modular services with Dockerized deployments for scalability and isolation",
                "Implemented RBAC and JWT authentication for secure, multi-tenant platforms",
                "Improved API response times through performance testing and iterative refactoring"
            ],
            technologies: ["MERN Stack", "Docker", "JWT", "RBAC"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Wealth Agent Application",
            category: "Full Stack",
            technologies: "Next.js, FastAPI, PostgreSQL, Redis, Docker",
            image: "/images/wealth-agent.webp",
            description: "A full-stack personal finance and wealth management platform with an interactive dashboard, budget tracking, auto-categorized transactions, and a Redis-backed background worker.",
            github: "https://github.com/Vedantuki7/wealth-agent"
        },
        {
            id: 2,
            title: "Slack AI Invoice Bot",
            category: "AI / Backend",
            technologies: "Python, FastAPI, Gemini 2.0, Supabase, Slack Bolt",
            image: "/images/slack-invoice-bot.webp",
            description: "An AI-powered Slack assistant that turns natural-language requests into structured invoice queries, using Gemini to route actions through a secured FastAPI + Supabase backend.",
            github: "https://github.com/Vedantuki7/Slack-AI-Invoice-App"
        },
        {
            id: 3,
            title: "AI Research & Writing Assistant",
            category: "AI / RAG",
            technologies: "Python, CrewAI, LangChain, FAISS, Streamlit",
            image: "/images/ai-research-assistant.webp",
            description: "A production-style RAG and multi-agent research system. Seven specialized CrewAI agents plus a FAISS knowledge base generate fact-checked, publication-ready articles.",
            github: "https://github.com/Vedantuki7/ai-research-writing-assistant"
        },
        {
            id: 4,
            title: "Portfolio Website",
            category: "Full Stack / 3D",
            technologies: "React, TypeScript, Three.js, GSAP",
            image: "/images/portfolio-website.webp",
            description: "This site — a 3D developer portfolio with an animated character hero, scroll-driven GSAP animations, and a fully data-driven content system.",
            github: "https://github.com/Vedantuki7/vedant-portfolio"
        }
    ],
    contact: {
        email: "vedantukirde@gmail.com",
        github: "https://github.com/Vedantuki7",
        linkedin: "https://linkedin.com/in/vedant-ukirde"
    },
    skills: {
        develop: {
            title: "BACKEND & CLOUD",
            description: "Scalable backend systems & cloud infrastructure",
            details: "Building high-availability backend services and REST APIs with Node.js and Express. Deploying and scaling cloud-native systems with Docker, Kubernetes, and AWS, backed by MongoDB, PostgreSQL, and Redis.",
            tools: ["Node.js", "Express.js", "TypeScript", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "CI/CD"]
        },
        design: {
            title: "FRONTEND",
            description: "Modern, responsive web interfaces",
            details: "Building responsive and performant web applications using React, Next.js, and TypeScript. Creating seamless user experiences with modern UI/UX principles and real-time features.",
            tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "WebSocket", "HTML5/CSS3", "Git"]
        }
    }
};
