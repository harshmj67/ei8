export const useCases = [
  {
    slug: 'manufacturing',
    number: '01',
    title: 'Manufacturing',
    tagline: 'Data-Driven Manufacturing Starts with Better Decisions',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    description:
      "Modern manufacturing is no longer driven solely by machines it's driven by data. From procurement and production planning to quality assurance and supply chain management, every stage of manufacturing generates valuable information. Organizations that effectively harness this data gain the ability to optimize operations, reduce costs, improve quality, and respond more quickly to changing market demands. Ei8 helps manufacturers transform operational data into intelligent business decisions through analytics, automation, business intelligence, and AI-powered solutions.",
    challengesTitle: 'Business Challenges Manufacturers Face',
    challenges:
      'Production schedules often rely on assumptions rather than predictive insights, leading to excess inventory, delayed deliveries, and inefficient capacity utilization. At the same time, fragmented operational data limits visibility across procurement, production, warehousing, and distribution, making timely decision-making increasingly difficult. Manufacturers also face growing pressure to improve quality, reduce operational costs, optimize supply chains, and respond quickly to changing customer demand all while maintaining profitability.',
    howWeHelpTitle: 'How Ei8 Helps Manufacturing Businesses',
    howWeHelp: [
      { title: 'Operational Intelligence', description: 'Improve production visibility through executive dashboards and real-time performance monitoring.' },
      { title: 'Predictive Manufacturing Analytics', description: 'Forecast production demand, optimize inventory, and improve capacity planning.' },
      { title: 'Supply Chain Optimization', description: 'Improve procurement planning, warehouse management, and logistics performance.' },
      { title: 'Financial Engineering', description: 'Optimize manufacturing costs, pricing strategies, and profitability analysis.' },
      { title: 'Process Automation', description: 'Automate reporting, approvals, inventory workflows, and repetitive operational processes.' },
    ],
    casesIntro:
      'Here are five engagements that show how we work with manufacturers on the ground — from the shop floor to the boardroom.',
    cases: [
      {
        slug: 'demand-production-planning',
        title: 'Smarter Production Planning for Seasonal Demand',
        tagline: 'Turning three spreadsheets and a lot of guesswork into one forecasting model',
        summary:
          'We rebuilt production planning for a multi-plant manufacturer whose seasonal forecasts were still built by hand in Excel.',
        challenge:
          "One of our manufacturing clients ran three plants and planned production almost entirely on gut feel and last year's numbers, stitched together across spreadsheets that rarely agreed with each other. Every peak season, the same pattern played out: certain SKUs sat in overstock while others ran out mid-cycle, and the planning team spent the first two weeks of every month reconciling numbers instead of acting on them.",
        whatWeDid: [
          'Consolidated production, sales, and inventory data from three separate ERP instances into one clean data model',
          'Built a demand-forecasting model using historical sales, seasonality, and promotional calendars',
          'Delivered a planning dashboard that lets the ops team simulate different production schedules before committing to one',
          'Set up automated weekly variance alerts so planners catch drift early instead of at month-end',
        ],
        outcome:
          "Within two planning cycles, the client cut finished-goods overstock by roughly 18% and reduced stockout-driven rush orders by about a third. Just as importantly, the planning team got their two weeks back — the monthly cycle that used to open with reconciliation now opens with a decision.",
        results: ['~18% reduction in overstock', '~30% fewer rush orders', 'Planning cycle time cut from days to hours'],
        tools: ['Power BI', 'Python', 'SQL Server', 'Azure Data Factory'],
      },
      {
        slug: 'predictive-maintenance',
        title: 'Predictive Maintenance on the Shop Floor',
        tagline: 'Getting ahead of breakdowns instead of reacting to them',
        summary:
          'We connected machine sensor data to a maintenance model so a precision-parts manufacturer could see failures coming.',
        challenge:
          'A precision-components manufacturer we worked with was losing production hours to unplanned equipment stoppages, and their maintenance schedule was purely calendar-based — machines got serviced on a fixed interval whether they needed it or not, and sometimes failed well before that interval was up.',
        whatWeDid: [
          'Pulled vibration, temperature, and runtime data from existing PLC and IoT sensors on critical machines',
          'Built failure-pattern models for the equipment types responsible for the most downtime',
          'Layered a maintenance-priority dashboard on top so supervisors know which machine to check first, not just that "something might fail"',
          'Trained the maintenance team on reading the alerts and feeding outcomes back into the model',
        ],
        outcome:
          'Unplanned downtime on the machines we modeled dropped noticeably in the first two quarters, and the maintenance team shifted from a fixed servicing calendar to a risk-ranked one — fewer unnecessary services, and fewer surprises on the line.',
        results: ['Meaningful drop in unplanned downtime', 'Maintenance visits ranked by actual risk, not the calendar', 'Faster root-cause diagnosis on repeat failures'],
        tools: ['Python', 'IoT sensor integration', 'Power BI', 'Azure ML'],
      },
      {
        slug: 'quality-defect-analytics',
        title: 'Cutting Defect Rates with Quality Analytics',
        tagline: 'Finding where in the line the defects were actually coming from',
        summary:
          'We helped a manufacturer trace recurring quality issues back to specific process steps instead of guessing at causes.',
        challenge:
          "Quality inspection data existed — batch records, inspector logs, rework tickets — but it lived in disconnected sheets and was reviewed only after a customer complaint came in. Nobody could say with confidence which shift, machine, or process step was driving the defect rate; the team just knew it was up.",
        whatWeDid: [
          'Brought inspection logs, batch data, and rework records into a single structured dataset',
          'Built defect-pattern analysis to correlate rejection rates against shift, machine, operator, and raw-material batch',
          'Delivered a quality dashboard that flags which process step is trending out of tolerance before it becomes a customer issue',
          'Worked with the quality team to define the thresholds that actually mattered to them, not generic defaults',
        ],
        outcome:
          'The client traced a persistent defect cluster to a single machine and a specific raw-material supplier within the first month of using the dashboard — something that had gone unresolved for over a year. Overall rejection rates came down, and the quality team now reviews trends weekly instead of investigating after the fact.',
        results: ['Root cause identified for a year-long defect issue', 'Lower overall rejection rate', 'Weekly proactive review replacing after-the-fact investigation'],
        tools: ['Power BI', 'SQL', 'Python', 'Statistical process control models'],
      },
      {
        slug: 'supply-chain-visibility',
        title: 'End-to-End Supply Chain Visibility',
        tagline: "Connecting procurement, warehousing, and distribution into one view",
        summary:
          'We gave a manufacturer a single, real-time view across suppliers, warehouses, and outbound logistics.',
        challenge:
          'Procurement, warehousing, and logistics each had their own systems and their own version of the truth. When a customer asked "where is my order," it could take half a day of phone calls across departments to get a real answer, and supplier delays were often discovered only once they had already affected production.',
        whatWeDid: [
          'Mapped the data flows across the procurement, warehouse management, and logistics systems',
          'Built an integration layer that brought supplier lead times, stock positions, and shipment status into one place',
          'Delivered an end-to-end visibility dashboard for planners and a simplified order-status view for the customer service team',
          'Added early-warning flags for supplier delays based on historical performance patterns',
        ],
        outcome:
          'Order-status queries that used to take hours now take minutes. The planning team also gained enough lead time on delayed shipments to adjust production schedules proactively instead of finding out when the truck failed to arrive.',
        results: ['Order-status turnaround cut from hours to minutes', 'Earlier visibility into supplier delays', 'Fewer production disruptions from late inbound materials'],
        tools: ['Power BI', 'Azure Data Factory', 'SQL Server', 'API integrations'],
      },
      {
        slug: 'cost-margin-analytics',
        title: 'Protecting Margins with Cost Analytics',
        tagline: 'Making input-cost swings visible before they hit the P&L',
        summary:
          "We built a cost-tracking model that let a manufacturer see margin erosion by product line as it happened, not a quarter later.",
        challenge:
          "Raw material costs were volatile, but the finance team only saw the impact on margins at quarter-close — by which point pricing decisions had already been made on outdated cost assumptions. Nobody had a live view of which product lines were actually still profitable.",
        whatWeDid: [
          'Linked procurement cost data, production volumes, and pricing into a single cost-to-serve model',
          'Built product-line and SKU-level margin dashboards refreshed weekly instead of quarterly',
          'Ran scenario models so pricing and sales teams could see the margin impact of a cost increase before deciding how to respond',
          'Flagged the SKUs where cost trends were eroding margin fastest',
        ],
        outcome:
          'Finance and sales now review margin by product line every week instead of finding out at quarter-close. That earlier visibility let the client reprice two underperforming product lines proactively, protecting margin that would otherwise have quietly eroded for another quarter.',
        results: ['Margin visibility moved from quarterly to weekly', 'Two product lines repriced proactively', 'Faster, more confident pricing decisions'],
        tools: ['Power BI', 'Excel modeling', 'SQL', 'Financial engineering'],
      },
    ],
  },
  {
    slug: 'financial-services',
    number: '02',
    title: 'Financial Services',
    tagline: 'Driving Smarter Financial Decisions Through Data & Intelligence',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=1600',
    description:
      'The financial services industry is built on trust, precision, and timely decision-making. From managing risk and regulatory compliance to improving customer experience and profitability, financial institutions generate enormous volumes of data every day. The challenge lies not in collecting data—but in transforming it into actionable intelligence. Ei8 helps banks, NBFCs, insurance providers, fintech companies, and investment firms leverage advanced analytics, business intelligence, automation, and AI to strengthen decision-making, improve operational efficiency, and deliver exceptional customer experiences.',
    challengesTitle: 'Industry Challenges',
    challenges:
      "Today's financial institutions operate in an increasingly complex environment where balancing profitability, compliance, and customer expectations has become more challenging than ever. Disconnected systems, evolving regulations, rising fraud risks, and rapidly changing market conditions demand faster, more informed decisions backed by reliable data. Whether it's improving credit assessment, optimizing lending operations, forecasting cash flows, or identifying customer opportunities, organizations need intelligent solutions that convert data into strategic business value.",
    howWeHelpTitle: 'How Ei8 Helps',
    howWeHelp: [
      { title: 'Risk & Financial Analytics', description: 'Support lending, investment, and financial planning with predictive analytics and financial engineering.' },
      { title: 'Executive Intelligence', description: 'Provide leadership teams with real-time dashboards for profitability, portfolio performance, and operational KPIs.' },
      { title: 'Intelligent Automation', description: 'Automate reporting, reconciliations, compliance workflows, and document processing.' },
      { title: 'Customer Intelligence', description: 'Understand customer behaviour, segment audiences, identify cross-selling opportunities, and improve retention.' },
      { title: 'AI Enablement', description: 'Empower teams to leverage Generative AI securely across customer service, operations, and internal knowledge management.' },
    ],
    casesIntro:
      "A look at five specific problems we've solved for lenders, insurers, and financial teams.",
    cases: [
      {
        slug: 'loan-portfolio-dashboard',
        title: 'Real-Time Loan Portfolio Intelligence for an NBFC',
        tagline: 'Replacing month-end reports with a live view of portfolio health',
        summary:
          'We unified loan data scattered across CRM, LMS, and finance systems into one live portfolio view for an NBFC.',
        challenge:
          'An NBFC we partnered with was processing thousands of loan applications a month, but the data behind them lived across a CRM, a loan management system, and a separate finance platform. Portfolio reviews meant someone manually pulling exports from all three and reconciling them in Excel — usually a week after the numbers were already stale.',
        whatWeDid: [
          'Built data pipelines connecting the CRM, LMS, and finance systems into one consolidated model',
          'Designed portfolio dashboards covering disbursements, repayment trends, and delinquency buckets by branch and product',
          'Added drill-down views so branch managers could investigate individual accounts without a separate data request',
          'Automated the monthly board reporting pack that used to take the finance team days to assemble',
        ],
        outcome:
          'Leadership went from reviewing portfolio health once a month to checking a live dashboard whenever they needed it. The finance team also got several days back each month that used to go into manually assembling the board deck.',
        results: ['Portfolio reporting moved from monthly to real-time', 'Board reporting pack automated', 'Days of manual reconciliation eliminated each month'],
        tools: ['Power BI', 'SQL Server', 'Azure Data Factory', 'Python'],
      },
      {
        slug: 'faster-credit-decisions',
        title: 'Speeding Up Credit Decisioning',
        tagline: 'Cutting the time between application and approval',
        summary:
          'We built a scoring and workflow layer that let a lender approve straightforward applications in minutes instead of days.',
        challenge:
          'Every loan application, regardless of complexity, went through the same manual underwriting steps, so simple, low-risk applications waited in the same queue as complex ones. Turnaround time was becoming a competitive weakness against faster fintech lenders.',
        whatWeDid: [
          "Analysed historical application and repayment data to identify what actually predicted risk for this lender's book",
          'Built a risk-scoring model tailored to their customer segments, not a generic off-the-shelf score',
          'Designed a triage workflow that auto-routes low-risk applications for fast-track approval and flags edge cases for human review',
          "Integrated the scoring model into the existing loan origination system so underwriters didn't have to change tools",
        ],
        outcome:
          'A meaningful share of applications now clear the fast-track path, with average turnaround time for that segment dropping from days to under an hour. Underwriters spend their time on the applications that genuinely need judgment.',
        results: ['Fast-track approvals in under an hour', 'Underwriter time refocused on complex cases', 'Improved conversion on time-sensitive applicants'],
        tools: ['Python', 'Machine learning scoring models', 'Power BI', 'API integration'],
      },
      {
        slug: 'fraud-anomaly-detection',
        title: 'Catching Fraud Before It Spreads',
        tagline: 'Flagging suspicious transaction patterns in near real time',
        summary:
          "We built an anomaly-detection layer that surfaces suspicious transactions for a client's fraud team before losses compound.",
        challenge:
          'Fraud detection relied mostly on fixed rules and customer complaints, which meant the team usually found out about a fraud pattern only after it had already run for a while and cost real money.',
        whatWeDid: [
          'Analysed historical fraud cases to identify the transaction and behavioural patterns rule-based systems were missing',
          'Built anomaly-detection models layered on top of the existing rules engine rather than replacing it outright',
          'Created a case-review dashboard that ranks flagged transactions by risk score so investigators work the highest-risk cases first',
          'Set up a feedback loop so confirmed fraud cases continuously improve the model',
        ],
        outcome:
          'The team now catches suspicious patterns days to weeks earlier than the old rules-only approach allowed, and investigators spend their time on a ranked queue instead of chasing every rule-triggered alert equally.',
        results: ['Earlier detection of emerging fraud patterns', 'Investigation queue ranked by actual risk', 'Fewer false-positive alerts wasting investigator time'],
        tools: ['Python', 'Anomaly detection models', 'SQL', 'Power BI'],
      },
      {
        slug: 'customer-segmentation-crosssell',
        title: 'Turning Customer Data into Cross-Sell Revenue',
        tagline: 'Finding the customers most likely to say yes to the next product',
        summary:
          "We segmented a financial institution's customer base and built a model to prioritize cross-sell outreach that actually converts.",
        challenge:
          'The client had a wide product shelf — savings, loans, insurance, investment products — but cross-sell campaigns were sent to the entire customer base with the same generic message, and conversion rates showed it.',
        whatWeDid: [
          'Segmented customers by product usage, life stage, transaction behaviour, and engagement history',
          'Built propensity models to predict which customers were most likely to respond to specific product offers',
          'Delivered segment dashboards the marketing and relationship teams could act on directly, not just view',
          'Set up a feedback loop that tracks which segments actually convert, so targeting keeps improving',
        ],
        outcome:
          'Campaigns targeted at the top-ranked segments converted at meaningfully higher rates than the old blanket approach, and the relationship management team now has a prioritized list of accounts worth a personal call rather than a mass email.',
        results: ['Higher conversion on targeted campaigns', 'Relationship managers working a prioritized account list', 'Marketing spend redirected toward highest-propensity segments'],
        tools: ['Python', 'Power BI', 'Segmentation & propensity models', 'CRM integration'],
      },
      {
        slug: 'regulatory-reporting-automation',
        title: 'Automating Regulatory & Compliance Reporting',
        tagline: "Getting the compliance team out of copy-paste and into review mode",
        summary:
          'We automated recurring regulatory reports that used to consume days of manual data-pulling every reporting cycle.',
        challenge:
          'Compliance reporting was built the same way every cycle: analysts pulled data from multiple systems, reformatted it by hand, and cross-checked totals manually before submission. It worked, but it consumed days of skilled staff time on repetitive work and carried real risk of manual error.',
        whatWeDid: [
          'Mapped every data source feeding each recurring regulatory report',
          'Built automated extraction and reconciliation pipelines that replace the manual pull-and-format process',
          'Added built-in validation checks that flag inconsistencies before a report ever reaches a human reviewer',
          'Trained the compliance team on the new workflow and handed over documentation for audit purposes',
        ],
        outcome:
          'Reports that used to take several days of manual work now come together in hours, with the compliance team spending their time reviewing and signing off rather than assembling numbers from scratch.',
        results: ['Reporting cycle time cut from days to hours', 'Manual reconciliation errors reduced', 'Compliance team refocused on review, not data assembly'],
        tools: ['Python', 'Power Automate', 'SQL', 'Power BI'],
      },
    ],
  },
  {
    slug: 'retail-ecommerce',
    number: '03',
    title: 'Retail & E-Commerce',
    tagline: 'Creating Smarter Customer Experiences Through Data',
    image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=1600&q=80',
    description:
      'Customer expectations are changing faster than ever. Retailers must anticipate demand, optimize inventory, personalize customer experiences, and protect margins in an increasingly competitive market. Ei8 enables retailers and e-commerce businesses to transform customer, sales, and operational data into actionable insights that drive growth, improve profitability, and strengthen customer loyalty.',
    challengesTitle: 'Industry Challenges',
    challenges:
      'Retail organizations manage thousands of daily transactions across stores, warehouses, online platforms, and supply chains. Without connected data, inventory planning becomes difficult, pricing decisions become reactive, and customer insights remain fragmented.',
    howWeHelpTitle: 'How Ei8 Helps',
    howWeHelp: [
      { title: 'Customer Analytics', description: 'Understand behaviour, preferences, and lifetime value across every channel and touchpoint.' },
      { title: 'Demand Forecasting', description: 'Predict demand accurately by season, region, and customer segment.' },
      { title: 'Pricing Analytics', description: 'Optimize pricing dynamically to protect margins and grow market share.' },
      { title: 'Inventory Optimization', description: 'Balance stock levels across locations to reduce stockouts and excess inventory.' },
      { title: 'Executive Dashboards', description: 'Give leadership real-time visibility into sales, operations, and store performance.' },
      { title: 'Sales Intelligence', description: 'Uncover growth opportunities across products, territories, and channels.' },
      { title: 'Process Automation', description: 'Automate reporting, reconciliations, and repetitive operational workflows.' },
      { title: 'Generative AI for Customer Support', description: 'Deploy AI assistants that improve customer support quality and response speed.' },
    ],
    casesIntro:
      "Five projects that show how we've helped retailers turn transaction data into decisions.",
    cases: [
      {
        slug: 'demand-forecasting-inventory',
        title: 'Fixing Stockouts with Better Demand Forecasting',
        tagline: 'Ending the overstock-in-one-store, out-of-stock-in-another cycle',
        summary:
          "We built a demand-forecasting model that rebalanced inventory across a retail chain's locations by region and season.",
        challenge:
          "A growing retail chain kept overstocking certain locations while running out of the same popular products elsewhere. Reorder decisions were based on each store manager's judgment rather than any shared model, so the imbalance never really went away.",
        whatWeDid: [
          'Analysed historical sales, seasonality, and promotional calendars across every store location',
          'Built region- and store-level demand forecasts rather than one blanket chain-wide number',
          'Delivered a replenishment dashboard that recommends stock transfers between nearby stores before a new order is even placed',
          'Set up alerts for SKUs trending toward a stockout two to three weeks out',
        ],
        outcome:
          'Stock imbalances across locations dropped noticeably within the first two quarters, with fewer emergency inter-store transfers and a measurable improvement in on-shelf availability for top-selling SKUs.',
        results: ['Fewer emergency stock transfers', 'Improved on-shelf availability for top SKUs', 'Reorder decisions backed by a shared forecast, not guesswork'],
        tools: ['Python', 'Power BI', 'Demand forecasting models', 'SQL'],
      },
      {
        slug: 'dynamic-pricing',
        title: 'Dynamic Pricing That Protects Margins',
        tagline: 'Moving from static price lists to pricing that responds to demand',
        summary:
          'We built a pricing model that adjusts recommendations by demand, competitor movement, and inventory position.',
        challenge:
          'Prices were reviewed manually on a fixed schedule, which meant the business was either leaving margin on the table during high-demand periods or sitting on slow-moving stock priced too high to move.',
        whatWeDid: [
          'Built a pricing model incorporating demand elasticity, inventory age, and competitor pricing signals',
          'Delivered pricing recommendations by category rather than a single blanket rule',
          'Set guardrails so recommended price changes stayed within brand and margin policy without needing manual sign-off every time',
          'Ran a pilot on a subset of categories before rolling the model out chain-wide',
        ],
        outcome:
          'The pilot categories saw improved sell-through on aging inventory and better margin capture during peak demand windows, which gave the client the confidence to extend the model to the rest of the catalog.',
        results: ['Better sell-through on aging inventory', 'Improved margin capture in peak periods', 'Pricing decisions made weekly instead of quarterly'],
        tools: ['Python', 'Power BI', 'Pricing elasticity models'],
      },
      {
        slug: 'customer-360-personalization',
        title: 'Building a Single Customer View',
        tagline: 'Stitching together in-store, app, and website behaviour into one profile',
        summary:
          "We unified a retailer's customer data across channels so marketing could finally target individuals instead of segments guessed from partial data.",
        challenge:
          "The client had customer data in three different systems — POS, e-commerce, and a loyalty app — that didn't talk to each other. A shopper who bought in-store and browsed online looked like two different people to the marketing team.",
        whatWeDid: [
          'Built an identity-resolution layer to match customer records across POS, e-commerce, and loyalty systems',
          'Created a unified customer profile combining purchase history, browsing behaviour, and loyalty activity',
          'Delivered segmentation dashboards the marketing team could use directly for campaign targeting',
          'Set up lifetime-value scoring to help prioritize retention spend on the customers worth keeping',
        ],
        outcome:
          'Marketing campaigns built on the unified profile outperformed the old channel-siloed campaigns on both open rates and conversion, and the retention team now has a clear view of which customers are most worth investing in.',
        results: ['Higher campaign conversion using unified profiles', 'Clear lifetime-value ranking for retention targeting', 'Duplicate customer records eliminated across channels'],
        tools: ['Python', 'SQL', 'Power BI', 'Identity resolution'],
      },
      {
        slug: 'store-performance-dashboards',
        title: 'Store Performance Dashboards for Multi-Location Retail',
        tagline: 'Giving regional managers a same-day view of every store',
        summary:
          'We replaced a weekly PDF sales report with live dashboards regional managers actually use to run the business.',
        challenge:
          'Store performance data was compiled into a weekly PDF report that was already outdated by the time regional managers read it. Underperforming stores often went two or three weeks before anyone acted on a dip in sales.',
        whatWeDid: [
          'Connected POS systems across all store locations into a central reporting layer',
          'Built live dashboards covering sales, footfall, conversion, and staff productivity by store and region',
          'Added comparison views so managers could benchmark stores against similar-format peers, not just chain-wide averages',
          'Trained regional managers to use the dashboards in their weekly performance reviews',
        ],
        outcome:
          'Underperforming stores now get flagged within days instead of weeks, and regional reviews shifted from reading a static report to actively drilling into the numbers together.',
        results: ['Underperformance flagged in days, not weeks', 'Weekly PDF report retired', 'Regional reviews now driven by live drill-down data'],
        tools: ['Power BI', 'SQL Server', 'Azure Data Factory'],
      },
      {
        slug: 'ai-customer-support',
        title: 'An AI Assistant for Customer Support',
        tagline: 'Handling routine order and return questions so agents can focus on real issues',
        summary:
          'We deployed a generative AI assistant that resolves routine customer queries and hands off complex ones to human agents.',
        challenge:
          'Support volume was dominated by repetitive questions — order status, return policy, delivery timelines — that tied up agents who could otherwise be handling escalations and genuinely difficult cases.',
        whatWeDid: [
          'Reviewed historical support tickets to identify the highest-volume, most repetitive query types',
          "Built a generative AI assistant grounded in the client's order data and policy documentation, with guardrails against making up answers",
          'Integrated the assistant into the existing support channel so the handoff to a human agent is seamless when needed',
          'Set up monitoring so the support team can review and correct assistant responses during rollout',
        ],
        outcome:
          'A large share of routine queries now get resolved without ever reaching a human agent, and average response time for the queries that do reach agents improved because their queue is shorter and less repetitive.',
        results: ['Majority of routine queries resolved without an agent', 'Faster response time on escalated queries', 'Support team refocused on complex cases'],
        tools: ['Generative AI (LLM)', 'Python', 'API integration', 'Support platform integration'],
      },
    ],
  },
  {
    slug: 'healthcare',
    number: '04',
    title: 'Healthcare',
    tagline: 'Improving Healthcare Through Better Decisions',
    image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&w=1600',
    description:
      'Healthcare organizations generate large volumes of clinical, operational, and administrative data every day. The ability to transform this information into actionable insights is essential for improving patient outcomes, optimizing resources, and supporting informed clinical and operational decisions. Ei8 helps hospitals, diagnostic centres, healthcare providers, and life sciences organizations leverage analytics, automation, and AI to improve efficiency while maintaining data security and compliance.',
    challengesTitle: 'Industry Challenges',
    challenges:
      'Healthcare providers often operate across multiple systems, making it difficult to gain a unified view of patient care, resource utilization, financial performance, and operational efficiency. Increasing patient volumes, regulatory requirements, and rising costs require data-driven decision-making.',
    howWeHelpTitle: 'How Ei8 Helps',
    howWeHelp: [
      { title: 'Operational Dashboards', description: 'Real-time visibility into hospital and clinic operations across departments.' },
      { title: 'Patient Flow Analytics', description: 'Optimize admissions, transfers, discharges, and overall patient journeys.' },
      { title: 'Resource Planning', description: 'Improve staffing, bed utilization, and equipment planning across facilities.' },
      { title: 'Financial Analytics', description: 'Strengthen revenue cycle management and cost control.' },
      { title: 'Process Automation', description: 'Automate administrative, billing, and reporting workflows.' },
      { title: 'Data Integration', description: 'Bring clinical, operational, and administrative data together securely.' },
      { title: 'AI Learning Solutions', description: 'Enable teams to adopt AI responsibly across clinical and support workflows.' },
    ],
    casesIntro:
      "Five ways we've helped healthcare teams see their own operations clearly enough to act on them.",
    cases: [
      {
        slug: 'bed-capacity-patient-flow',
        title: 'Real-Time Bed Capacity & Patient Flow',
        tagline: 'Giving hospital administrators a live view instead of a morning huddle guess',
        summary:
          'We built a real-time dashboard tracking admissions, bed occupancy, and discharge status across departments.',
        challenge:
          'A hospital we worked with managed bed capacity through a morning huddle where department heads reported numbers from memory or a quick phone call. By afternoon, those numbers were already out of date, and bottlenecks in discharge or transfer often went unnoticed until they caused a real backlog.',
        whatWeDid: [
          'Integrated admission, transfer, and discharge data from the hospital information system into a live feed',
          'Built a real-time bed occupancy and patient flow dashboard viewable by department and by floor',
          'Added bottleneck alerts that flag departments approaching capacity before it becomes a crisis',
          'Trained administrators and charge nurses to use the dashboard directly rather than waiting for the morning report',
        ],
        outcome:
          'Administrators now catch capacity bottlenecks hours earlier than before, and the morning huddle shifted from reporting stale numbers to discussing what to do about live ones.',
        results: ['Capacity bottlenecks flagged hours earlier', 'Discharge delays identified by department', 'Morning huddle now action-oriented, not status-reporting'],
        tools: ['Power BI', 'SQL', 'Azure Data Factory'],
      },
      {
        slug: 'revenue-cycle-analytics',
        title: 'Strengthening Revenue Cycle Management',
        tagline: 'Finding where claims were getting stuck before they turned into denials',
        summary:
          'We built visibility into the revenue cycle so the finance team could catch claim issues before they became write-offs.',
        challenge:
          'Claims moved through registration, coding, billing, and payer submission across several disconnected systems. Denials and delays were common, but nobody had visibility into which stage of the cycle was causing the most trouble until the write-offs were already booked.',
        whatWeDid: [
          'Mapped the full revenue cycle from patient registration through payer reimbursement',
          'Built a dashboard tracking claims by stage, aging, and denial reason',
          'Identified the specific coding and documentation gaps driving the highest denial rates',
          'Set up proactive alerts for claims stuck beyond a defined threshold at any stage',
        ],
        outcome:
          'The finance team identified and corrected the top two denial causes within the first quarter, and days-in-accounts-receivable trended down as claims moving through the cycle got caught and corrected earlier.',
        results: ['Top denial causes identified and corrected', 'Days in accounts receivable trending down', 'Claims issues caught before write-off'],
        tools: ['Power BI', 'SQL', 'Python'],
      },
      {
        slug: 'staffing-resource-planning',
        title: 'Data-Driven Staffing & Resource Planning',
        tagline: 'Matching staffing levels to actual patient load instead of fixed rosters',
        summary:
          'We built a model that aligned nurse and staff scheduling with historical and forecasted patient volume.',
        challenge:
          "Staffing schedules were built on fixed rosters that didn't flex with actual patient volume, leading to overstaffed quiet periods and understaffed peak periods — both expensive in different ways.",
        whatWeDid: [
          'Analysed historical admission and patient volume patterns by department, day of week, and season',
          'Built a forecasting model to predict staffing needs several weeks ahead',
          'Delivered a scheduling dashboard that flags projected under- or over-staffing before the roster is finalized',
          "Worked with department heads to validate the model against their own operational knowledge",
        ],
        outcome:
          'The client reduced reliance on last-minute agency staffing during peak periods, while trimming unnecessary overstaffing during predictable quiet stretches — improving both cost and care consistency.',
        results: ['Less reliance on last-minute agency staffing', 'Reduced overstaffing during predictable low-volume periods', 'Schedules built from forecasted demand, not fixed rosters'],
        tools: ['Python', 'Power BI', 'Forecasting models'],
      },
      {
        slug: 'clinical-operations-dashboard',
        title: 'Unified Dashboards Across Clinical Operations',
        tagline: 'One view instead of five logins to understand how the day is going',
        summary:
          'We brought data from five separate clinical and operational systems into one dashboard leadership could actually use.',
        challenge:
          'Getting a full picture of how a facility was performing meant logging into five different systems — EHR, lab, pharmacy, scheduling, and billing — and mentally stitching them together. Leadership reviews were slow and often relied on whoever remembered to pull which report.',
        whatWeDid: [
          'Built secure data integrations across EHR, lab, pharmacy, scheduling, and billing systems',
          'Designed a unified operational dashboard tailored to what leadership actually needed to see day to day',
          'Applied role-based access so sensitive clinical data stayed restricted to appropriate users',
          'Ran the dashboard in parallel with existing reports for a full cycle before fully switching over',
        ],
        outcome:
          'Leadership meetings now open with one shared dashboard instead of five separate reports, and issues that used to surface a week later — like a lab turnaround slipping — get caught in the same week they happen.',
        results: ['Five reporting systems consolidated into one view', 'Operational issues caught within days, not weeks', 'Leadership reviews shortened and more focused'],
        tools: ['Power BI', 'SQL Server', 'Secure data integration'],
      },
      {
        slug: 'administrative-process-automation',
        title: 'Automating Administrative & Billing Workflows',
        tagline: 'Freeing up administrative staff from repetitive paperwork',
        summary:
          'We automated recurring administrative and billing tasks that were consuming hours of staff time every week.',
        challenge:
          'Administrative staff spent a significant part of every week on repetitive tasks — re-entering the same data across systems, manually generating routine reports, and chasing down missing billing information.',
        whatWeDid: [
          'Identified the highest-volume, most repetitive administrative and billing workflows',
          'Built automation for recurring data entry, report generation, and document routing tasks',
          'Added validation checks so automated outputs got flagged for review rather than submitted blind',
          'Trained the administrative team on the new workflow and provided a fallback manual process',
        ],
        outcome:
          'Administrative staff got several hours back each week that used to go into repetitive data entry, and routine reports that used to be assembled manually now generate automatically and consistently on schedule.',
        results: ['Hours of manual data entry eliminated weekly', 'Routine reports generated automatically and on time', 'Staff time redirected to higher-value administrative work'],
        tools: ['Power Automate', 'Python', 'SQL'],
      },
    ],
  },
  {
    slug: 'logistics-supply-chain',
    number: '05',
    title: 'Logistics & Supply Chain',
    tagline: 'Building Smarter, More Resilient Supply Chains',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
    description:
      'Modern supply chains are more interconnected and more complex than ever before. Rising transportation costs, fluctuating demand, inventory pressures, and global disruptions require organizations to move beyond reactive planning. Ei8 helps logistics providers, manufacturers, distributors, and supply chain leaders use data, analytics, and optimization to improve operational efficiency and build resilient supply chains.',
    challengesTitle: 'Industry Challenges',
    challenges:
      'Managing warehouses, transportation networks, suppliers, and inventory across multiple locations requires timely information and intelligent decision-making. Limited visibility often leads to higher costs, delivery delays, and inefficient resource utilization.',
    howWeHelpTitle: 'How Ei8 Helps',
    howWeHelp: [
      { title: 'Demand Forecasting', description: 'Anticipate demand across regions, channels, and seasonal cycles.' },
      { title: 'Route Optimization', description: 'Reduce transportation costs and improve delivery timelines.' },
      { title: 'Warehouse Analytics', description: 'Improve throughput, layout efficiency, and labour productivity.' },
      { title: 'Inventory Intelligence', description: 'Maintain optimal stock levels across the distribution network.' },
      { title: 'Fleet Performance Dashboards', description: 'Track fleet utilization, cost per km, and service levels.' },
      { title: 'Supply Chain Automation', description: 'Automate procurement, reporting, and logistics workflows.' },
      { title: 'Executive Reporting', description: 'Provide leadership with a unified view of end-to-end operations.' },
    ],
    casesIntro:
      "Five specific problems we've helped logistics and distribution teams work through.",
    cases: [
      {
        slug: 'route-optimization',
        title: 'Cutting Delivery Costs with Route Optimization',
        tagline: 'Rebuilding delivery routes around actual traffic and delivery-window data',
        summary:
          "We rebuilt a distributor's delivery routing logic, cutting transportation costs while improving on-time delivery.",
        challenge:
          "A distribution company we worked with planned delivery routes largely on driver experience and static zone maps, which didn't account for changing traffic patterns, delivery-window commitments, or vehicle capacity constraints. Fuel costs and missed delivery windows were both climbing.",
        whatWeDid: [
          'Analysed historical delivery data, traffic patterns, and customer delivery-window commitments',
          'Built a route-optimization model accounting for vehicle capacity, time windows, and real-world road conditions',
          'Delivered a planning dashboard dispatchers use each morning to generate optimized routes rather than relying on memory',
          'Ran a phased rollout across regions to validate savings before going chain-wide',
        ],
        outcome:
          'Transportation costs came down and on-time delivery performance improved in the regions where the model rolled out first, which gave the client the confidence to extend it across the full network.',
        results: ['Lower transportation cost per route', 'Improved on-time delivery rate', 'Route planning shifted from manual to model-assisted'],
        tools: ['Python', 'Route optimization algorithms', 'Power BI', 'GIS data'],
      },
      {
        slug: 'warehouse-throughput',
        title: 'Improving Warehouse Throughput',
        tagline: 'Finding the layout and staffing bottlenecks slowing down picking',
        summary:
          "We analyzed a distribution center's picking data to identify and fix the bottlenecks slowing throughput.",
        challenge:
          "Order volume was growing but warehouse throughput wasn't keeping pace, and nobody had a clear, data-backed answer for why — was it layout, staffing, or the picking process itself?",
        whatWeDid: [
          'Analysed picking, packing, and putaway data to map where time was actually being lost',
          'Identified layout inefficiencies sending pickers on unnecessarily long routes for high-frequency items',
          'Built a labour productivity dashboard to track throughput by shift, zone, and worker',
          'Recommended a slotting change to move high-velocity SKUs closer to packing, alongside the analytics',
        ],
        outcome:
          'After the slotting changes and with the new productivity dashboard in place, average pick times improved and throughput increased without adding headcount.',
        results: ['Improved average pick time', 'Throughput increased without added headcount', 'Layout inefficiencies identified and corrected'],
        tools: ['Python', 'Power BI', 'Warehouse data analysis'],
      },
      {
        slug: 'fleet-performance-dashboard',
        title: 'A Fleet Performance Dashboard That Cut Cost per KM',
        tagline: 'Making fuel, maintenance, and utilization visible in one place',
        summary:
          'We built a fleet dashboard that surfaced cost-per-km and utilization issues that had been invisible across scattered logs.',
        challenge:
          'Fuel logs, maintenance records, and trip data lived in separate systems — some of it still on paper — making it nearly impossible to know which vehicles were actually cost-efficient and which were quietly dragging down the fleet average.',
        whatWeDid: [
          'Digitized and consolidated fuel, maintenance, and trip data into a single fleet database',
          'Built a fleet performance dashboard tracking cost per km, utilization rate, and maintenance frequency by vehicle',
          "Flagged vehicles running meaningfully above the fleet's average cost per km for review",
          'Set up service-level tracking so late deliveries could be traced back to specific vehicles or routes',
        ],
        outcome:
          "The client identified a subset of vehicles responsible for a disproportionate share of maintenance cost and either retired or reassigned them, bringing down the fleet's average cost per km.",
        results: ['Fleet average cost per km reduced', 'High-cost vehicles identified and addressed', 'Service-level issues traced to specific routes and vehicles'],
        tools: ['Power BI', 'SQL', 'Fleet data integration'],
      },
      {
        slug: 'distribution-demand-forecasting',
        title: 'Demand Forecasting Across a Distribution Network',
        tagline: 'Getting warehouses to stock what their region actually needs',
        summary:
          "We built region-level demand forecasts so a distributor could stop moving inventory reactively between warehouses.",
        challenge:
          'Regional warehouses were frequently short on fast-moving items while sitting on excess stock of slower ones, forcing frequent, costly inter-warehouse transfers to fill the gaps.',
        whatWeDid: [
          'Built demand forecasts at the region and warehouse level using historical order and seasonal data',
          'Delivered a replenishment planning dashboard that recommends stock allocation by warehouse ahead of need',
          "Modeled safety-stock levels specific to each region's demand variability rather than one blanket rule",
          'Set up a monthly review cadence with the planning team to refine the model against real outcomes',
        ],
        outcome:
          'Inter-warehouse emergency transfers dropped substantially, and regional stock availability improved without an overall increase in total inventory held.',
        results: ['Fewer emergency inter-warehouse transfers', 'Improved regional stock availability', 'No net increase in total inventory carried'],
        tools: ['Python', 'Power BI', 'Demand forecasting models'],
      },
      {
        slug: 'procurement-automation',
        title: 'Automating Procurement & Vendor Workflows',
        tagline: "Taking manual purchase-order matching out of the procurement team's week",
        summary:
          "We automated a distributor's purchase order, invoice, and vendor reconciliation process.",
        challenge:
          "The procurement team manually matched purchase orders, delivery receipts, and vendor invoices — a process prone to errors and delayed payments, and one that consumed a meaningful chunk of the team's week every cycle.",
        whatWeDid: [
          'Mapped the end-to-end procure-to-pay process to find where manual matching was creating delays',
          'Built automated three-way matching between purchase orders, receipts, and invoices',
          'Added exception dashboards so the team only manually reviews the mismatches, not every transaction',
          'Set up vendor performance tracking to flag suppliers with recurring delivery or billing issues',
        ],
        outcome:
          "Routine purchase orders now reconcile automatically, and the procurement team's time shifted from manual matching to resolving genuine exceptions and managing vendor relationships.",
        results: ['Majority of purchase orders reconciled automatically', 'Faster vendor payment cycle', 'Team time refocused on exceptions and vendor management'],
        tools: ['Power Automate', 'Python', 'SQL', 'Power BI'],
      },
    ],
  },
  {
    slug: 'telecommunications',
    number: '06',
    title: 'Telecommunications',
    tagline: 'Transforming Network Data into Business Intelligence',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1600&q=80',
    description:
      'Telecommunication companies manage vast networks, millions of customer interactions, and complex operational environments. Converting this information into actionable intelligence is essential for improving service quality, customer retention, and operational efficiency. Ei8 enables telecom providers to leverage analytics, automation, and AI to optimize network performance and deliver better customer experiences.',
    challengesTitle: 'Industry Challenges',
    challenges:
      'Telecom operators face increasing pressure to improve customer satisfaction while managing network capacity, reducing churn, and optimizing operational costs. Data often exists across network monitoring systems, customer platforms, billing applications, and operational databases.',
    howWeHelpTitle: 'How Ei8 Helps',
    howWeHelp: [
      { title: 'Network Performance Dashboards', description: 'Monitor network health, uptime, and service KPIs in real time.' },
      { title: 'Customer Analytics', description: 'Understand customer behaviour, segments, and lifetime value.' },
      { title: 'Revenue Intelligence', description: 'Identify revenue leakage, growth pockets, and pricing opportunities.' },
      { title: 'Operational Reporting', description: 'Unify reporting across billing, service, and operations.' },
      { title: 'Predictive Analytics', description: 'Forecast churn, capacity needs, and revenue trends.' },
      { title: 'Automation', description: 'Streamline back-office and operational workflows.' },
      { title: 'AI Enablement', description: 'Deploy AI responsibly across customer service and network operations.' },
    ],
    casesIntro:
      "Five engagements from our work with telecom operators on churn, network data, and revenue.",
    cases: [
      {
        slug: 'churn-prediction',
        title: 'Predicting Churn Before Customers Leave',
        tagline: 'Flagging at-risk subscribers weeks before they cancel',
        summary:
          'We built a churn model that let a telecom provider act on at-risk customers before they left, not after.',
        challenge:
          'The client only knew a customer had churned once the cancellation request came in — by which point there was nothing left to do. Retention efforts were entirely reactive, offered to anyone who called to cancel rather than targeted at the customers most likely to leave.',
        whatWeDid: [
          'Analysed usage patterns, complaint history, billing behaviour, and service issues tied to past churn cases',
          'Built a predictive churn model that scores active subscribers on likelihood to cancel in the coming weeks',
          'Delivered a prioritized at-risk customer list to the retention team, refreshed weekly',
          'Worked with the retention team to design targeted offers for the highest-risk segments specifically',
        ],
        outcome:
          'The retention team now reaches out to at-risk customers before they call to cancel, and save rates on the targeted at-risk segment came in well above the old reactive approach.',
        results: ['Proactive outreach replacing reactive retention', 'Higher save rate on targeted at-risk segment', 'Weekly refreshed risk scoring for the subscriber base'],
        tools: ['Python', 'Machine learning models', 'Power BI', 'CRM integration'],
      },
      {
        slug: 'network-performance-monitoring',
        title: 'Real-Time Network Performance Monitoring',
        tagline: 'Seeing degradation before customers start calling about it',
        summary:
          'We built a live network health dashboard that surfaces degrading performance before it becomes a customer complaint spike.',
        challenge:
          'Network performance issues were typically discovered through customer complaints rather than proactive monitoring, meaning by the time the operations team knew about a problem, it had already affected service for a meaningful number of subscribers.',
        whatWeDid: [
          'Integrated network monitoring data into a centralized, real-time reporting layer',
          'Built dashboards tracking uptime, latency, and service KPIs by region and cell site',
          "Set up automated threshold alerts so the network operations team gets flagged before customers do",
          'Correlated network performance data with customer complaint patterns to validate the alert thresholds',
        ],
        outcome:
          'The operations team now catches a meaningful share of degradation events before the complaint volume spikes, cutting the average time between an issue starting and a technician being dispatched.',
        results: ['Faster detection of network degradation', 'Reduced time-to-dispatch for field technicians', 'Fewer complaint-driven issue discoveries'],
        tools: ['Power BI', 'SQL', 'Real-time data integration'],
      },
      {
        slug: 'revenue-leakage-detection',
        title: 'Finding Revenue Leakage in Billing Data',
        tagline: 'Tracking down the gap between usage and what actually got billed',
        summary:
          'We built analytics that traced specific billing discrepancies costing the client revenue every month.',
        challenge:
          'Finance suspected there was a gap between actual network usage and billed revenue, but with billing, usage, and provisioning data spread across separate systems, nobody could quantify it or trace where exactly the leakage was happening.',
        whatWeDid: [
          'Reconciled usage data against billing records across multiple product lines',
          'Built leakage-detection analytics to flag specific accounts and billing rules causing discrepancies',
          'Identified a subset of provisioning errors that were causing services to go unbilled entirely',
          'Delivered an ongoing monitoring dashboard so new leakage gets caught monthly rather than discovered a year later',
        ],
        outcome:
          'The client recovered a meaningful amount of previously unbilled revenue once the provisioning errors were corrected, and the monitoring dashboard now catches new leakage within a billing cycle instead of it going unnoticed.',
        results: ['Previously unbilled revenue identified and recovered', 'Leakage now caught within one billing cycle', 'Specific provisioning errors corrected at the root'],
        tools: ['Python', 'SQL', 'Power BI'],
      },
      {
        slug: 'telecom-customer-segmentation',
        title: 'Segmenting Millions of Subscribers',
        tagline: 'Turning a flat subscriber base into segments the business can act on',
        summary:
          'We segmented a large subscriber base by usage and value so marketing and product teams could target offers precisely.',
        challenge:
          "With millions of subscribers, the client's marketing and product teams treated the base as largely undifferentiated, sending similar offers broadly rather than tailoring them to how different subscribers actually used their services.",
        whatWeDid: [
          'Segmented the subscriber base by usage patterns, plan type, tenure, and value',
          'Built lifetime-value and upsell-propensity scores for each segment',
          'Delivered segment dashboards for marketing and product teams to plan offers and plan design around',
          'Ran a pilot campaign on two high-propensity segments to validate the model before wider rollout',
        ],
        outcome:
          'The pilot segments responded to targeted plan-upgrade offers at notably higher rates than prior blanket campaigns, and the product team now uses the segmentation to inform new plan design.',
        results: ['Higher response rate on targeted upgrade offers', 'Subscriber base segmented for the first time at this level of detail', 'Segmentation now informing product and plan design'],
        tools: ['Python', 'Power BI', 'Segmentation models'],
      },
      {
        slug: 'backoffice-automation',
        title: 'Automating Back-Office Operations',
        tagline: "Taking repetitive reporting and reconciliation off the operations team's plate",
        summary:
          'We automated recurring back-office reporting and reconciliation tasks that were consuming significant operations team time.',
        challenge:
          'The operations team spent a large part of every week generating recurring reports and reconciling data between billing, service, and operational systems by hand — necessary work, but repetitive and error-prone.',
        whatWeDid: [
          'Identified the highest-volume recurring reporting and reconciliation tasks across the operations team',
          'Built automated workflows to replace manual data pulls and reconciliation steps',
          'Added exception flagging so the team reviews only genuine discrepancies, not every record',
          'Documented and handed over the automated processes with a clear escalation path for edge cases',
        ],
        outcome:
          'The operations team reclaimed a significant share of time previously spent on manual reporting, redirecting it toward analysis and issue resolution instead of data assembly.',
        results: ['Significant weekly time savings for operations staff', 'Reconciliation errors reduced', 'Reporting now consistent and delivered on schedule'],
        tools: ['Power Automate', 'Python', 'SQL', 'Power BI'],
      },
    ],
  },
  {
    slug: 'professional-services',
    number: '07',
    title: 'Professional Services',
    tagline: 'Empowering Knowledge-Driven Organizations with Intelligent Decision-Making',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    description:
      'Professional services firms rely on expertise, people, and client relationships to create value. Success depends on efficient resource management, project profitability, and informed decision-making. Ei8 helps consulting firms, legal practices, accounting firms, engineering companies, and advisory organizations transform operational data into strategic business intelligence.',
    challengesTitle: 'Industry Challenges',
    challenges:
      'As firms grow, managing projects, utilization, billing, profitability, and client engagement becomes increasingly complex. Information often remains fragmented across multiple systems, limiting visibility into overall business performance.',
    howWeHelpTitle: 'How Ei8 Helps',
    howWeHelp: [
      { title: 'Project Performance Dashboards', description: 'Real-time visibility across client engagements and portfolios.' },
      { title: 'Resource Utilization Analytics', description: 'Optimize consultant allocation and billable utilization.' },
      { title: 'Profitability Analysis', description: 'Understand margins by client, engagement, and service line.' },
      { title: 'Business Intelligence', description: 'Unify data across finance, operations, and delivery teams.' },
      { title: 'Workflow Automation', description: 'Automate timesheets, approvals, and billing operations.' },
      { title: 'Knowledge Management with AI', description: 'Enable teams to find and reuse expertise faster.' },
      { title: 'Custom Business Applications', description: 'Tailored platforms for client engagement and delivery workflows.' },
    ],
    casesIntro:
      "Five specific engagements from our work with consulting, legal, and advisory firms.",
    cases: [
      {
        slug: 'utilization-resource-planning',
        title: 'Improving Consultant Utilization',
        tagline: "Seeing who's overbooked and who's available before the project kickoff, not after",
        summary:
          'We built a utilization dashboard that gave a consulting firm real visibility into staffing before projects got over- or under-committed.',
        challenge:
          'Staffing decisions for new engagements were made largely from memory and informal check-ins, which meant some consultants were chronically overbooked while others had unbilled gaps in their calendar that nobody noticed until month-end.',
        whatWeDid: [
          'Consolidated time-tracking, staffing, and project data into a single utilization model',
          'Built a real-time utilization dashboard showing current and forecasted allocation by consultant and team',
          'Added a capacity-planning view so staffing leads could see availability before committing consultants to new work',
          'Set up monthly utilization reviews using the dashboard as the source of truth',
        ],
        outcome:
          'Billable utilization improved as staffing leads gained visibility into who actually had capacity, and the firm reduced instances of double-booking senior consultants across overlapping engagements.',
        results: ['Improved billable utilization', 'Fewer double-booked senior consultants', 'Staffing decisions made from live data, not memory'],
        tools: ['Power BI', 'SQL', 'Time-tracking integration'],
      },
      {
        slug: 'project-profitability-dashboard',
        title: 'A Project Profitability Dashboard for Leadership',
        tagline: 'Knowing which engagements were actually profitable, not just busy',
        summary:
          'We built a dashboard that showed real-time margin by client and engagement, replacing a quarterly spreadsheet exercise.',
        challenge:
          'The firm tracked profitability by client and engagement only at quarter-end, through a manual spreadsheet exercise pulling from finance and project systems separately. By the time a losing engagement was identified, it was often already over.',
        whatWeDid: [
          'Linked project financials, time tracking, and billing data into a single profitability model',
          'Built dashboards showing margin by client, engagement, and service line, refreshed weekly',
          'Flagged engagements trending toward budget overrun while there was still time to course-correct',
          'Trained engagement leads to check margin status as part of their regular project reviews',
        ],
        outcome:
          'Leadership caught two underperforming engagements mid-project instead of at close-out, allowing scope or staffing adjustments that protected margin. Profitability reviews moved from a quarterly spreadsheet exercise to a weekly habit.',
        results: ['Underperforming engagements caught mid-project', 'Profitability reviews moved from quarterly to weekly', 'Manual spreadsheet exercise eliminated'],
        tools: ['Power BI', 'SQL', 'Financial engineering'],
      },
      {
        slug: 'billing-timesheet-automation',
        title: 'Automating Timesheets & Billing',
        tagline: 'Cutting the days it took to turn timesheets into invoices',
        summary:
          'We automated the timesheet-to-invoice workflow that used to take the finance team days to assemble each month.',
        challenge:
          'Turning consultant timesheets into client invoices was a heavily manual process — chasing late timesheet submissions, manually applying billing rates, and cross-checking against contract terms before an invoice could go out.',
        whatWeDid: [
          'Mapped the full timesheet-to-invoice workflow to find where delays and errors were concentrated',
          'Built automated reminders for outstanding timesheets and automated rate application based on contract terms',
          "Added a validation layer that flags billing discrepancies before an invoice is sent, not after a client questions it",
          'Delivered a billing dashboard showing invoice status across all active engagements',
        ],
        outcome:
          'The billing cycle that used to take several days each month now completes in under a day, and billing discrepancies caught before invoices go out dropped noticeably.',
        results: ['Billing cycle time cut from days to under a day', 'Fewer billing discrepancies reaching clients', 'Timesheet compliance improved with automated reminders'],
        tools: ['Power Automate', 'Python', 'SQL'],
      },
      {
        slug: 'client-portfolio-intelligence',
        title: 'Client Portfolio Intelligence Across Engagements',
        tagline: 'Seeing the full relationship with a client, not just the current project',
        summary:
          'We built a portfolio view that showed partners the full history and value of each client relationship across every past and current engagement.',
        challenge:
          'Partners managing long-standing client relationships often had visibility into only the current engagement, with historical project data, past profitability, and relationship history scattered across old files and institutional memory.',
        whatWeDid: [
          'Consolidated historical and current engagement data by client into a single relationship view',
          'Built a client portfolio dashboard covering engagement history, profitability trends, and service-line penetration',
          'Flagged clients with untapped potential — engaged on one service line but not others where the firm had relevant expertise',
          'Delivered the dashboard directly to partners ahead of client relationship reviews',
        ],
        outcome:
          'Partners identified several clients with clear cross-service opportunity that had gone unnoticed, and client review meetings became noticeably more strategic once the full relationship history was visible in one place.',
        results: ['New cross-service opportunities identified from existing clients', 'Full relationship history visible in one dashboard', 'More strategic partner-level client reviews'],
        tools: ['Power BI', 'SQL', 'CRM integration'],
      },
      {
        slug: 'knowledge-management-ai',
        title: 'An AI Knowledge Assistant for Consultants',
        tagline: "Helping consultants find the firm's own past work instead of starting from scratch",
        summary:
          "We built an AI assistant that lets consultants search the firm's past deliverables and expertise instead of reinventing work that already existed.",
        challenge:
          "The firm had years of proposals, frameworks, and delivered work sitting in shared drives, but finding relevant past work for a new engagement meant asking around and hoping someone remembered the right project. Good work was being redone because nobody could find it.",
        whatWeDid: [
          "Indexed the firm's proposal, deliverable, and knowledge-base documents into a searchable, secure repository",
          "Built a generative AI assistant that answers questions grounded in the firm's own documents, with source citations back to the original file",
          'Set access controls so sensitive client materials stayed restricted to authorized teams',
          'Rolled the assistant out to a pilot practice group before firm-wide deployment',
        ],
        outcome:
          'Consultants in the pilot group found relevant past work in minutes instead of days, and proposal teams started reusing proven frameworks rather than rebuilding them from scratch for every new pitch.',
        results: ['Relevant past work found in minutes, not days', 'Proposal frameworks reused instead of rebuilt', 'Pilot group expanded to firm-wide rollout'],
        tools: ['Generative AI (LLM)', 'Document search & retrieval', 'Access-controlled knowledge base'],
      },
    ],
  },
];
