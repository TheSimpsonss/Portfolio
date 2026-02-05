export const profile = {
  name: "Alex Morgan",
  title: "DevOps Engineer | Aspiring MLOps & AI Engineer",
  tagline: "Building scalable systems today, intelligent systems tomorrow.",
  summary:
    "DevOps-focused engineer with a passion for reliability, automation, and scalable infrastructure. Currently deepening expertise in data science, machine learning, and NLP to transition into GenAI, agentic AI, and MLOps roles. Known for a problem-solving mindset, crisp documentation, and continuous learning.",
  links: {
    resume: "/resume.pdf",
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
    email: "mailto:hello@example.com",
  },
  techStack: [
    {
      label: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "AWS", "Terraform", "Linux", "GitHub Actions"],
    },
    {
      label: "Programming",
      items: ["Python", "Java", "C/C++", "SQL", "Bash"],
    },
    {
      label: "Data & ML",
      items: ["Pandas", "NumPy", "Scikit-learn", "NLP basics"],
    },
    {
      label: "Tools",
      items: ["Git", "Linux", "VS Code"],
    },
    {
      label: "Future Tech",
      items: ["MLOps", "GenAI", "Agentic AI"],
      future: true,
    },
  ],
  projects: [
    {
      category: "DevOps Projects",
      items: [
        {
          name: "Multi-Cloud CI/CD Pipeline",
          description:
            "Designed an automated pipeline with infrastructure-as-code, security checks, and multi-region deployments.",
          stack: ["GitHub Actions", "Terraform", "AWS"],
          link: "https://github.com/your-handle/project-1",
        },
        {
          name: "Kubernetes Observability Stack",
          description:
            "Implemented centralized monitoring and alerting with SLO-driven dashboards.",
          stack: ["Kubernetes", "Prometheus", "Grafana"],
          link: "https://github.com/your-handle/project-2",
        },
      ],
    },
    {
      category: "Data Science / ML Projects",
      items: [
        {
          name: "Customer Churn Predictor",
          description:
            "Built a churn model with feature engineering, model tracking, and explainability reports.",
          stack: ["Python", "Scikit-learn", "Pandas"],
          link: "https://github.com/your-handle/project-3",
        },
      ],
    },
    {
      category: "AI / NLP Experiments",
      items: [
        {
          name: "NLP Insights Lab",
          description:
            "Exploring summarization, classification, and retrieval workflows for future GenAI systems.",
          stack: ["Python", "NLP"],
          link: "https://github.com/your-handle/project-4",
        },
      ],
    },
  ],
  experience: [
    {
      role: "DevOps Engineer (Training Program)",
      org: "CloudOps Academy",
      period: "2023 - Present",
      details:
        "Hands-on labs across IaC, container orchestration, and cloud networking with production-grade tooling.",
    },
    {
      role: "Cloud Infrastructure Intern",
      org: "TechNova Labs",
      period: "2022 - 2023",
      details:
        "Delivered automation scripts, infrastructure documentation, and CI/CD improvements for internal teams.",
    },
    {
      role: "Self-Directed Learning",
      org: "Data & AI Track",
      period: "Ongoing",
      details:
        "Structured curriculum in data science, ML fundamentals, and NLP with weekly mini-projects.",
    },
  ],
  education: [
    {
      program: "B.Tech in Computer Science & Engineering",
      org: "State Institute of Technology",
      period: "2019 - 2023",
      details:
        "Focused on systems engineering, distributed computing, and applied machine learning coursework.",
    },
    {
      program: "DevOps & Cloud Engineering Certification",
      org: "Linux Foundation / Coursera",
      period: "2023",
      details:
        "Covered CI/CD, container orchestration, infrastructure automation, and reliability best practices.",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      period: "2023",
      details: "Validated foundational cloud concepts, security, and billing models.",
    },
    {
      name: "Kubernetes Fundamentals",
      issuer: "Linux Foundation",
      period: "2024",
      details: "Hands-on pods, deployments, services, and cluster operations.",
    },
  ],
};
