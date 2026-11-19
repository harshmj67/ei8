export const services = [
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    icon: 'Database',
    // Illuminated server rack — clearly represents data infrastructure & engineered systems
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&w=1200',
    short: 'Build a Reliable Foundation for Data-Driven Growth',
    cardDescription:
      'Create secure, scalable, and integrated data ecosystems that ensure high-quality information flows seamlessly across your organization, powering analytics, AI, and enterprise decision-making.',
    problem:
      'Fragmented systems, inconsistent data definitions, and disconnected databases make reliable reporting and advanced analytics difficult.',
    approach:
      'Integrate information from multiple systems, improve data quality, and build secure, scalable data ecosystems through integration, ETL pipelines, warehousing, and cloud data platforms.',
    outcome: 'Trusted data, scalable infrastructure, and faster analytics across the organization.',
    hero: 'Building the Foundation for Intelligent Enterprises',
    description:
      "The quality of every business decision depends on the quality of the underlying data. Unfortunately, many organizations operate with fragmented systems, inconsistent data definitions, and disconnected databases that make reliable reporting and advanced analytics difficult. Data Engineering creates a modern data foundation by integrating information from multiple systems, improving data quality, and ensuring that reliable information is available whenever it's needed. It enables analytics, automation, and AI to operate on trusted, well-governed data.",
    businessInAction:
      'Imagine a logistics company managing information across warehouse systems, fleet management software, ERP platforms, and customer applications. Because data exists in separate systems, generating operational reports requires significant manual effort. By designing an integrated data platform, information flows automatically between systems, providing consistent, accurate data that supports reporting, analytics, and operational decision-making across the entire organization.',
    features: [
      'Data Integration',
      'ETL Pipelines',
      'Data Warehousing',
      'Cloud Data Platforms',
    ],
    benefits: ['Trusted Data', 'Scalable Infrastructure', 'Faster Analytics'],
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence & Dashboards',
    icon: 'BarChart3',
    image: 'https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&w=1200',
    short: 'Turn Business Data into Actionable Intelligence',
    cardDescription:
      'Empower decision-makers with interactive dashboards and real-time reporting that transform complex business data into clear insights, enabling faster decisions and improved organizational performance.',
    problem:
      'Data scattered across spreadsheets and disconnected applications forces leaders to spend valuable time searching for answers instead of making decisions.',
    approach:
      'Bring disconnected data sources together into interactive dashboards and real-time reporting including executive dashboards, KPI monitoring, Power BI & Tableau, and self-service reporting — for a single, reliable view of performance.',
    outcome:
      'Real-time visibility, faster decisions, and performance transparency across every level of the business.',
    hero: 'Transforming Information into Executive Insight',
    description:
      "Modern organizations generate information from finance, sales, operations, customer service, and supply chain systems every minute. However, when data remains scattered across spreadsheets and disconnected applications, leaders spend valuable time searching for answers instead of making decisions. Business Intelligence brings these disconnected data sources together into interactive dashboards that provide a single, reliable view of organizational performance. Instead of waiting days for reports, decision-makers gain immediate visibility into the metrics that matter most.",
    businessInAction:
      'Consider a retail organization with multiple locations across different regions. Each store generates daily sales, inventory, and operational data, yet managers struggle to obtain a consolidated view of overall performance. Through interactive dashboards, executives can monitor sales trends, identify underperforming locations, track inventory levels, and respond to changing market conditions in real time. Rather than reacting after problems arise, leadership gains the visibility needed to take proactive action.',
    features: [
      'Executive Dashboards',
      'KPI Monitoring',
      'Power BI & Tableau',
      'Self-Service Reporting',
    ],
    benefits: ['Real-Time Visibility', 'Faster Decisions', 'Performance Transparency'],
  },
  {
    slug: 'advanced-analytics',
    title: 'Advanced Analytics',
    icon: 'TrendingUp',
    // Business analytics dashboard — charts, KPIs, reports
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    short: 'Transform Data into Strategic Foresight',
    cardDescription:
      'Go beyond historical reporting with advanced analytical models that help organizations predict trends, optimize decisions, reduce uncertainty, and uncover new opportunities for sustainable business growth.',
    problem:
      'Relying solely on historical reports explains what already happened, not what is likely to happen next — limiting forecasting, investment planning, and risk management.',
    approach:
      'Combine statistical modelling, machine learning, financial engineering, and optimization techniques — spanning predictive analytics, financial engineering, risk analytics, and logistics optimization — to anticipate trends and uncover opportunities.',
    outcome: 'Better forecasting, smarter decisions, and higher profitability.',
    hero: 'Turning Data into Strategic Decisions',
    description:
      "Every business collects data, but very few transform it into a competitive advantage. Leaders often find themselves making decisions based on historical reports that explain what has already happened rather than what is likely to happen next. Whether forecasting demand, planning investments, or managing operational risks, relying solely on past performance can limit future growth. Advanced Analytics helps organizations move from reactive decision-making to predictive planning. By combining statistical modelling, machine learning, financial engineering, and optimization techniques, businesses can anticipate market trends, identify risks before they occur, and uncover opportunities hidden within their data.",
    businessInAction:
      "Imagine a manufacturing company preparing for seasonal demand fluctuations. Instead of relying on last year's sales figures, the leadership team uses predictive models to forecast future demand, optimize production schedules, and align procurement with expected market conditions. As a result, inventory is better balanced, production becomes more efficient, and business decisions are supported by data rather than assumptions.",
    features: [
      'Predictive Analytics',
      'Financial Engineering',
      'Risk Analytics',
      'Logistics Optimization',
    ],
    benefits: ['Better Forecasting', 'Smarter Decisions', 'Higher Profitability'],
  },
  {
    slug: 'process-automation',
    title: 'Process Automation',
    icon: 'Workflow',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&q=80',
    short: 'Automate Operations. Accelerate Productivity.',
    cardDescription:
      'Streamline repetitive workflows with intelligent automation solutions that improve operational efficiency, reduce manual effort, and enhance business agility without compromising accuracy.',
    problem:
      'Repetitive manual activities like document verification, approvals, and data entry consume valuable time, raise operational costs, and introduce human error.',
    approach:
      'Streamline repetitive workflows through intelligent automation spanning workflow automation, RPA, document processing, and system integration freeing employees for strategic, customer-focused work.',
    outcome: 'Lower operating costs, increased efficiency, and improved accuracy.',
    hero: 'Creating More Time for High-Value Work',
    description:
      "Many organizations continue to depend on repetitive manual activities such as document verification, approvals, data entry, and routine reporting. While essential, these tasks consume valuable time, increase operational costs, and introduce unnecessary human error. Process Automation allows businesses to streamline repetitive workflows through intelligent automation while enabling employees to focus on strategic and customer-focused work. The result is faster execution, improved consistency, and greater operational efficiency.",
    businessInAction:
      'Consider a finance department that manually processes hundreds of vendor invoices every month. Each invoice requires validation, approvals, accounting entries, and payment processing. By automating these workflows, invoices move through predefined approval processes with minimal manual intervention, reducing processing time, improving compliance, and allowing finance teams to concentrate on financial planning rather than administrative tasks.',
    features: [
      'Workflow Automation',
      'RPA',
      'Document Processing',
      'System Integration',
    ],
    benefits: ['Lower Operating Costs', 'Increased Efficiency', 'Improved Accuracy'],
  },
  {
    slug: 'custom-data-products',
    title: 'Custom Data Solutions',
    icon: 'Boxes',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    short: 'Built Around Your Business, Not Generic Software',
    cardDescription:
      'Design bespoke data platforms and analytics solutions tailored to your unique operational needs, helping your organization solve complex challenges with technology that fits your business.',
    problem:
      'Standard software solves common needs, but growing organizations often require solutions that reflect their unique processes, industry requirements, and strategic objectives.',
    approach:
      'Develop bespoke analytics platforms, enterprise applications, and decision support systems spanning analytics platforms, enterprise applications, decision support, and industry solutions designed around how your business actually works.',
    outcome: 'Tailored solutions, greater flexibility, and long-term scalability.',
    hero: 'Technology Designed Around Your Business',
    description:
      'No two organizations operate in exactly the same way. While standard software solves common business needs, growing organizations often require solutions that reflect their unique processes, industry requirements, and strategic objectives. Custom Data Solutions focus on developing applications, analytics platforms, and decision support systems that align with how your business actually works. Rather than adapting your operations to fit software, the solution is designed to support your existing processes while enabling future growth.',
    businessInAction:
      'A professional services firm wants a single platform to manage client engagement, project tracking, financial reporting, and resource allocation. Existing software requires multiple disconnected applications, creating duplication and inconsistent information. A custom-built solution brings these functions together into one integrated platform, providing leadership with better visibility while simplifying day-to-day operations for every department.',
    features: [
      'Analytics Platforms',
      'Enterprise Applications',
      'Decision Support',
      'Industry Solutions',
    ],
    benefits: ['Tailored Solutions', 'Greater Flexibility', 'Long-Term Scalability'],
  },
   {
    slug: 'ai-machine-learning',
    title: 'Generative AI Learning Solutions',
    icon: 'Brain',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    short: 'Empower Your Workforce for the AI Era',
    cardDescription:
      'Accelerate enterprise AI adoption through practical learning programs, implementation strategies, and responsible AI practices that help teams confidently integrate Generative AI into everyday business operations.',
    problem:
      'Successful Generative AI adoption requires more than access to tools teams need confidence, governance, and practical skills aligned with business objectives.',
    approach:
      'Accelerate enterprise AI adoption through practical learning programs, implementation strategies, and responsible AI practices, including AI training, prompt engineering, AI adoption strategy, and enterprise workshops.',
    outcome: 'AI-ready teams, higher productivity, and faster innovation.',
    hero: 'Preparing Organizations for the Future of Work',
    description:
      "Generative AI is transforming how businesses create content, analyse information, automate knowledge work, and improve productivity. However, successful adoption requires more than providing employees with AI tools it requires building confidence, establishing governance, and developing practical skills that align with business objectives. Ei8's Generative AI Learning Solutions help organizations understand where AI creates value, how to use it responsibly, and how to integrate it into everyday business processes through structured learning and implementation strategies.",
    businessInAction:
      'Imagine a consulting organization where employees spend hours preparing reports, analysing documents, and responding to client queries. After participating in a structured AI enablement program, teams learn how to use Generative AI for research assistance, content drafting, meeting summaries, and knowledge management while following clear governance practices. The result is improved productivity, greater consistency, and more time for high-value advisory work.',
    features: [
      'Prompt Engineering',
      'AI Adoption Strategy',
      'Enterprise Workshops',
    ],
    benefits: ['AI-Ready Teams', 'Higher Productivity', 'Faster Innovation'],
  },
];