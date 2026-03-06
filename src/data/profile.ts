// Resume Data - YESWANTH SAI CHALLAGOLLA
export const profile = {
  name: "Yeswanth Sai Challagolla",
  title: "Data Analyst",
  tagline: "Transforming Multi-Source Data into Scalable Insights & Strategic Solutions",
  email: "Yeswanthch20@gmail.com",
  phone: "+1(928) 600-3747",
  location: "Leander, TX (open to Relocate)",
  
  social: {
    linkedin: "https://www.linkedin.com/in/yeswanthch/",
    email: "mailto:Yeswanthch20@gmail.com",
  },

  about: {
    summary: `Data Analyst with 5+ years of experience delivering data-driven insights, building analytical datasets, and developing BI dashboards to support operational, product, and strategic decision making. Proficient in SQL, Python, Power BI, Tableau, and Excel, transforming multi-source data into scalable reporting models, KPI frameworks, and executive dashboards. Skilled in exploratory data analysis, statistical modeling, and predictive analytics using Python, identifying trends and supporting data-driven planning.`,
    
    highlights: [
      { label: "Years Experience", value: "5+", icon: "award" },
      { label: "Data accuracy improvement", value: "25%", icon: "activity" },
      { label: "Decision speed increase", value: "35%", icon: "server" },
      { label: "Reporting manual effort reduction", value: "50%", icon: "users" },
    ],
    
    keyStrengths: [
      "SQL Optimization",
      "Predictive Modeling",
      "Dimensional Data Modeling",
      "Stakeholder Collaboration",
    ],
  },

  experience: [
    {
      company: "Avansa IT Solutions",
      role: "Data Analyst",
      period: "Sep 2025 - Present",
      location: "Cranbury, NJ (Remote)",
      description: [
        "Led requirement discovery sessions with product and operations stakeholders, documenting KPIs and reporting logic in Jira and Confluence, accelerating analytics delivery cycles by 30%.",
        "Integrated CRM, finance, and operational activity data by developing optimized SQL queries with window functions in SQL Server and PostgreSQL.",
        "Evaluated dataset integrity through Python-based data profiling using Pandas and NumPy, improving dashboard data accuracy by 25%.",
        "Built operational intelligence dashboards in Power BI using DAX and Star Schema dimensional modeling, enabling leadership to monitor metrics while improving decision response time by 35%.",
        "Replaced manual spreadsheet reporting by implementing SQL-driven data preparation pipelines, reducing recurring reporting effort by 50%.",
        "Investigated operational performance patterns using exploratory data analysis in Python with Pandas and Statsmodels.",
      ],
      technologies: ["SQL Server", "PostgreSQL", "Python", "Power BI", "DAX", "Pandas", "NumPy", "Jira"],
    },
    {
      company: "Northern Arizona University",
      role: "Data Analyst",
      period: "Aug 2024 - Aug 2025",
      location: "Flagstaff, AZ",
      description: [
        "Unified LMS activity logs, enrollment records, and academic performance datasets through SQL data integration, improving institutional reporting consistency by 30%.",
        "Developed institutional analytics dashboards in Power BI using DAX and Star Schema modeling to track enrollment trends and course utilization, helping optimize planning by 25%.",
        "Identified inconsistencies across student records by running SQL validation queries and Python data profiling, reducing discrepancies by 20%.",
        "Examined historical enrollment data through Python exploratory analysis to support university resource planning and enrollment prediction reliability.",
        "Structured analytical reporting tables using SQL data transformation and dimensional modeling, improving reporting performance by 35%.",
      ],
      technologies: ["PostgreSQL", "SQL Server", "Power BI", "Python", "Pandas", "Statsmodels", "Excel"],
    },
    {
      company: "FIITJEE Pvt Ltd",
      role: "Operations Analyst",
      period: "May 2021 - Dec 2023",
      location: "New Delhi, India",
      description: [
        "Evaluated regional marketing and enrollment datasets using SQL queries and Excel Pivot Tables, uncovering lead conversion patterns that increased conversion rates by 10%.",
        "Developed operational performance dashboards in Power BI using DAX and Star Schema modeling to monitor campaign ROI and admissions funnel performance.",
        "Integrated CRM lead data, marketing records, and enrollment transactions through SQL data transformation, creating structured datasets for analytics teams.",
        "Strengthened CRM data reliability by implementing SQL data validation rules, eliminating duplicate records and improving marketing reporting accuracy by 22%.",
        "Automated recurring operational reports using Power Query and Pivot Tables, reducing weekly reporting preparation effort by 30%.",
      ],
      technologies: ["SQL", "Excel", "Power BI", "DAX", "Power Query", "Python", "CRM"],
    },
    {
      company: "Praedico Global Research Pvt Ltd",
      role: "Business Data Analyst Intern",
      period: "Jul 2020 - Jul 2021",
      location: "New Delhi, India",
      description: [
        "Analyzed historical equity market datasets through SQL queries and Excel Pivot Tables, uncovering sector performance trends that improved screening efficiency by 20%.",
        "Built financial tracking dashboards in Excel using Power Query and Pivot Tables to monitor stock returns and valuation indicators.",
        "Investigated relationships between macroeconomic indicators and stock price movements using Python analysis with Pandas and NumPy, improving accuracy by 15%.",
        "Strengthened dataset reliability by executing SQL validation checks and reconciliation analysis, improving accuracy of financial reporting by 18%.",
      ],
      technologies: ["SQL", "Excel", "Python", "Pandas", "NumPy", "Power Query"],
    },
  ],

  projects: [
    {
      title: "Predictive Modeling for Customer Deposits",
      description: "Built predictive classification models using Scikit-learn with Logistic Regression and Random Forest, achieving 88% prediction accuracy for customer subscription likelihood. Presented insights through Tableau and Power BI dashboards.",
      image: "/images/project-banking.png",
      technologies: ["Python", "Scikit-learn", "Pandas", "Tableau", "Power BI", "SQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "NAU Drone Delivery Service Analytics",
      description: "Integrated operational telemetry, geospatial coordinates, and weather datasets through Python ingestion workflows. Built monitoring dashboards in Power BI visualizing route performance and weather alerts, reducing decision delays by 40%.",
      image: "/images/project-drone.png",
      technologies: ["Python", "Pandas", "SQL", "Power BI", "DAX", "Geospatial Analysis"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Customer Churn Analytics",
      description: "Analyzed customer interaction and financial transaction datasets to identify behavioral patterns associated with service churn. Trained classification models using Scikit-learn, achieving 85% churn prediction accuracy.",
      image: "/images/project-churn.png",
      technologies: ["SQL", "Python", "Pandas", "Scikit-learn", "Power BI", "DAX"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ],

  skills: {
    languages: [
      { name: "SQL", level: 95, icon: "database" },
      { name: "Python", level: 92, icon: "code" },
      { name: "DAX", level: 90, icon: "code" },
    ],
    frameworks: [
      { name: "Power BI", level: 95 },
      { name: "Tableau", level: 90 },
      { name: "Excel Advanced", level: 95 },
      { name: "Power Query", level: 92 },
      { name: "Power Pivot", level: 88 },
    ],
    cloudDevOps: [
      { name: "SQL Server", level: 92 },
      { name: "PostgreSQL", level: 90 },
      { name: "Snowflake", level: 85 },
      { name: "Cloud Data Warehousing", level: 88 },
    ],
    architecture: [
      { name: "Dimensional Modeling", level: 95 },
      { name: "Star Schema", level: 95 },
      { name: "ETL/ELT Workflows", level: 92 },
      { name: "Data Validation", level: 94 },
      { name: "Data Quality Management", level: 90 },
    ],
  },

  certifications: [
    {
      name: "SQL Certification",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UDEMY-SQL",
      verifyUrl: "#",
    },
    {
      name: "Agile Business Analysis",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UDEMY-AGILE",
      verifyUrl: "#",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "2023",
      credentialId: "COURSERA-GOOGLE",
      verifyUrl: "#",
    },
    {
      name: "IBM Data Analyst Professional Certificate",
      issuer: "Coursera",
      date: "2023",
      credentialId: "COURSERA-IBM",
      verifyUrl: "#",
    },
    {
      name: "Business Analytics Specialization",
      issuer: "Coursera",
      date: "2023",
      credentialId: "COURSERA-BA",
      verifyUrl: "#",
    },
    {
      name: "Learning Data Analytics",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialId: "LINKEDIN-DA",
      verifyUrl: "#",
    },
  ],

  education: [
    {
      degree: "Master of Science in Business Analytics",
      school: "Northern Arizona University",
      period: "May 2025",
      location: "Flagstaff, AZ",
      focus: "W.A. Franke School of Business",
    },
    {
      degree: "Master of Business Administration (Operations, Logistics & Supply Chain)",
      school: "Noida International University",
      period: "May 2022",
      location: "India",
      honors: "",
    },
  ],

  rotatingKeywords: [
    "Data Analytics",
    "SQL Optimization",
    "Power BI Dashboards",
    "Predictive Modeling",
    "Python Analytics",
    "Business Intelligence",
  ],
};
