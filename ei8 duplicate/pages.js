(function () {
  const navItems = ["Services", "Industries", "Case Studies", "Products", "Insights", "About"];
  const routes = {
    Services: "/services",
    Industries: "/industries",
    "Case Studies": "/case-studies",
    Products: "/products",
    Insights: "/insights",
    About: "/about"
  };

  const images = {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    engineering: "https://images.unsplash.com/photo-1644088379091-d574269d422f",
    ai: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4",
    analytics: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf",
    automation: "https://images.pexels.com/photos/5181148/pexels-photo-5181148.jpeg",
    products: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
    bfsi: "https://images.pexels.com/photos/5466277/pexels-photo-5466277.jpeg",
    healthcare: "https://images.pexels.com/photos/7658241/pexels-photo-7658241.jpeg",
    retail: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
    manufacturing: "https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg",
    saas: "https://images.unsplash.com/photo-1737573296361-75315239293a",
    bank: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804",
    team: "https://images.unsplash.com/photo-1576267423048-15c0040fec78"
  };

  const pageData = {
    Services: {
      eyebrow: "What We Do",
      title: "Services Built for <span>Business Impact</span>",
      intro:
        "A complete services portfolio for enterprise leaders who need data systems that produce measurable revenue, efficiency, and risk outcomes.",
      sections: [
        {
          title: "Data Engineering",
          img: images.engineering,
          text:
            "Build reliable data foundations across warehouses, lakes, pipelines, and real-time streaming systems.",
          points: [
            "Cloud data warehouses and lakehouse architecture",
            "Real-time and batch ETL/ELT pipelines",
            "Governance, quality monitoring, and single source of truth"
          ]
        },
        {
          title: "Business Intelligence & Dashboards",
          img: images.hero,
          text:
            "Turn scattered business metrics into executive-ready dashboards and automated reporting workflows.",
          points: [
            "Interactive KPI dashboards for leadership teams",
            "Automated reporting and alerting",
            "Self-service analytics for business users"
          ]
        },
        {
          title: "AI / Machine Learning Solutions",
          img: images.ai,
          text:
            "Deploy production-grade ML models for forecasting, classification, recommendation, and optimization.",
          points: [
            "Model design, training, deployment, and monitoring",
            "AI assistants and decision-support systems",
            "MLOps pipelines built for scale"
          ]
        },
        {
          title: "Predictive Analytics",
          img: images.analytics,
          text:
            "Move from reactive reporting to forward-looking strategy with models that forecast risk and opportunity.",
          points: [
            "Demand, revenue, churn, and risk forecasting",
            "Scenario modeling for executive planning",
            "Statistical models with clear business interpretation"
          ]
        },
        {
          title: "Process Automation (RPA)",
          img: images.automation,
          text:
            "Automate high-volume work using RPA, workflow orchestration, and intelligent decision rules.",
          points: [
            "Back-office process automation",
            "Document processing and exception handling",
            "Human-in-the-loop workflows for sensitive operations"
          ]
        },
        {
          title: "Custom Data Products",
          img: images.products,
          text:
            "Build proprietary internal platforms and data products tailored to your exact operating model.",
          points: [
            "Optimization engines and decision platforms",
            "Internal SaaS-style tools for teams",
            "Reusable IP that compounds over time"
          ]
        }
      ]
    },
    Industries: {
      eyebrow: "Domain Expertise",
      title: "Industry-Specific <span>Data Solutions</span>",
      intro:
        "Each industry has different constraints, operating rhythms, compliance needs, and value levers. Ei8 designs around those realities.",
      sections: [
        {
          title: "BFSI",
          img: images.bfsi,
          text: "Credit risk, fraud intelligence, portfolio analytics, compliance reporting, and customer profitability.",
          points: ["35% NPA reduction potential", "Real-time risk scoring", "Regulatory-grade audit trails"]
        },
        {
          title: "Healthcare",
          img: images.healthcare,
          text: "Patient risk prediction, operational analytics, claims optimization, and care coordination intelligence.",
          points: ["Readmission prediction", "FHIR-ready integrations", "Clinical and financial dashboards"]
        },
        {
          title: "Retail / E-commerce",
          img: images.retail,
          text: "Demand forecasting, inventory optimization, personalization, pricing intelligence, and customer analytics.",
          points: ["SKU-level demand planning", "Promotion impact modeling", "Customer segmentation"]
        },
        {
          title: "Manufacturing",
          img: images.manufacturing,
          text: "Predictive maintenance, quality analytics, supply-chain visibility, and plant performance optimization.",
          points: ["IoT sensor analytics", "Downtime prediction", "Production throughput optimization"]
        },
        {
          title: "SaaS / Tech",
          img: images.saas,
          text: "Product analytics, churn prediction, revenue intelligence, usage scoring, and customer health systems.",
          points: ["Customer health scores", "Expansion revenue insights", "Usage-based segmentation"]
        }
      ]
    },
    "Case Studies": {
      eyebrow: "Proven Results",
      title: "Real Impact, <span>Real Numbers</span>",
      intro:
        "Representative success stories showing how Ei8 transforms data into measurable business outcomes.",
      sections: [
        {
          title: "Global Bank Transforms Credit Risk Assessment",
          img: images.bank,
          text:
            "A top international bank replaced legacy credit scoring with an ML risk engine using 200+ traditional and alternative variables.",
          points: ["18% to 11.7% default rate", "25% increase in approvals", "$12M annual savings"]
        },
        {
          title: "Healthcare Network Reduces Readmissions",
          img: images.healthcare,
          text:
            "A multi-state hospital network used predictive analytics to identify high-risk patients and trigger proactive interventions.",
          points: ["28% reduction in 30-day readmissions", "$8M annual savings", "15% reimbursement improvement"]
        },
        {
          title: "E-commerce Giant Optimizes Inventory",
          img: images.retail,
          text:
            "A fashion retailer forecasted demand across stores, promotions, seasonality, trends, and social signals.",
          points: ["40% fewer stockouts", "30% less excess inventory", "18% revenue growth"]
        },
        {
          title: "Manufacturer Eliminates Unplanned Downtime",
          img: images.manufacturing,
          text:
            "An industrial manufacturer deployed IoT monitoring and ML models that predicted failures 7-14 days ahead.",
          points: ["65% downtime reduction", "45% lower maintenance costs", "6-month ROI"]
        }
      ]
    },
    Products: {
      eyebrow: "Proprietary IP",
      title: "We Build, <span>Not Just Consult</span>",
      intro:
        "Ei8 product accelerators help enterprises move faster while still receiving custom, business-specific implementation.",
      sections: [
        {
          title: "DataPulse",
          img: images.engineering,
          text: "Real-time data quality monitoring and anomaly detection platform.",
          points: ["Pipeline health visibility", "Automated anomaly alerts", "Remediation workflows"]
        },
        {
          title: "InsightEngine",
          img: images.ai,
          text: "AI-powered business intelligence assistant with natural language querying.",
          points: ["Ask questions in plain English", "Explainable business answers", "Governed data access"]
        },
        {
          title: "ForecastPro",
          img: images.analytics,
          text: "Automated forecasting platform for demand, revenue, and resource planning.",
          points: ["Multiple ML algorithms", "Scenario comparison", "Planning-ready outputs"]
        },
        {
          title: "OptimizeX",
          img: images.products,
          text: "Operations optimization engine for pricing, routing, and resource allocation.",
          points: ["Constraint-aware optimization", "Simulation support", "Executive decision dashboards"]
        }
      ]
    },
    Insights: {
      eyebrow: "Thinking",
      title: "Data POVs for <span>Enterprise Leaders</span>",
      intro:
        "Strategic thinking, implementation playbooks, and practical frameworks for turning enterprise data into advantage.",
      sections: [
        {
          title: "From Dashboards to Decisions",
          img: images.hero,
          text:
            "Why dashboards alone rarely change outcomes, and how decision workflows convert analytics into operating discipline.",
          points: ["Define owner and action", "Measure decision latency", "Close the feedback loop"]
        },
        {
          title: "The Modern Data Quality Stack",
          img: images.engineering,
          text:
            "A practical architecture for trust, monitoring, anomaly detection, and remediation across enterprise pipelines.",
          points: ["Data contracts", "Anomaly thresholds", "Business impact alerts"]
        },
        {
          title: "AI That Survives Production",
          img: images.ai,
          text:
            "How to move beyond demos with model monitoring, governance, retraining, and business KPI ownership.",
          points: ["MLOps foundations", "Risk controls", "Outcome-based model metrics"]
        }
      ]
    },
    About: {
      eyebrow: "About Ei8",
      title: "Strategic Data Partner for <span>Enterprise Outcomes</span>",
      intro:
        "Ei8 partners with leadership teams to build production-grade data, analytics, automation, and AI systems that create measurable value.",
      sections: [
        {
          title: "How We Work",
          img: images.team,
          text:
            "We combine consulting rigor with product engineering depth, moving from strategy to implementation without losing business context.",
          points: ["Executive outcome alignment", "Rapid discovery and roadmap design", "Build, deploy, measure, and transfer knowledge"]
        },
        {
          title: "What Makes Ei8 Different",
          img: images.products,
          text:
            "Our work is grounded in measurable ROI, production readiness, and long-term capability building.",
          points: ["Business-first architecture", "Enterprise-grade delivery", "Reusable IP and accelerators"]
        }
      ],
      metrics: [
        ["$180M+", "Value Delivered"],
        ["150+", "Enterprise Clients"],
        ["94%", "Client Retention"],
        ["35%", "Avg. Cost Reduction"]
      ]
    }
  };

  function nav(active) {
    return `
      <header class="ei8-shell ei8-nav">
        <a class="ei8-logo" href="/" aria-label="Ei8 home"><span>E</span><span>i</span><span>8</span></a>
        <nav class="ei8-links" aria-label="Primary navigation">
          ${navItems
            .map(
              (item) =>
                `<button class="ei8-link ${item === active ? "active" : ""}" data-page="${item}">${item}</button>`
            )
            .join("")}
        </nav>
        <button class="ei8-button" data-page="About">Book Consultation</button>
      </header>
    `;
  }

  function footer() {
    const groups = {
      Company: ["About", "Case Studies", "Contact"],
      Services: ["Services", "Products"],
      Industries: ["Industries", "BFSI", "Healthcare"],
      Resources: ["Insights", "Whitepapers", "Data POVs"]
    };

    return `
      <footer class="ei8-footer">
        <div class="ei8-shell ei8-footer-grid">
          <div>
            <a class="ei8-logo" href="/" aria-label="Ei8 home"><span>E</span><span>i</span><span>8</span></a>
            <p style="margin-top:16px;max-width:360px;">Turning data into measurable business outcomes. Strategic data partner for enterprise leaders building competitive advantages.</p>
          </div>
          ${Object.entries(groups)
            .map(
              ([title, links]) => `
                <div>
                  <h3>${title}</h3>
                  ${links
                    .map((link) =>
                      routes[link]
                        ? `<button data-page="${link}">${link}</button>`
                        : `<button data-page="${title === "Industries" ? "Industries" : "Insights"}">${link}</button>`
                    )
                    .join("")}
                </div>
              `
            )
            .join("")}
        </div>
      </footer>
    `;
  }

  function cards(sections, columns) {
    return `
      <div class="ei8-grid ${columns === 2 ? "two" : ""}">
        ${sections
          .map(
            (section) => `
              <article class="ei8-card">
                <img src="${section.img}" alt="${section.title}" />
                <div class="ei8-card-body">
                  <span class="ei8-label">${section.title.includes("Transforms") || section.title.includes("Reduces") || section.title.includes("Optimizes") || section.title.includes("Eliminates") ? "Case Study" : "Capability"}</span>
                  <h3>${section.title}</h3>
                  <p>${section.text}</p>
                  <ul class="ei8-list">
                    ${section.points.map((point) => `<li>${point}</li>`).join("")}
                  </ul>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderPage(name, push) {
    const data = pageData[name];
    if (!data) return;

    if (push) {
      history.pushState({ page: name }, "", routes[name]);
    }

    document.title = `Ei8 | ${name}`;
    document.getElementById("root").innerHTML = `
      <div class="ei8-page">
        ${nav(name)}
        <main>
          <section class="ei8-shell ei8-hero">
            <span class="ei8-kicker">${data.eyebrow}</span>
            <h1>${data.title}</h1>
            <p>${data.intro}</p>
            <div class="ei8-actions">
              <button class="ei8-button" data-page="About">Book a Consultation</button>
              <a class="ei8-button secondary" href="/">Back to Home</a>
            </div>
            ${
              data.metrics
                ? `<div class="ei8-metric-row">${data.metrics
                    .map((metric) => `<div class="ei8-metric"><strong>${metric[0]}</strong><span>${metric[1]}</span></div>`)
                    .join("")}</div>`
                : ""
            }
          </section>
          <section class="ei8-section alt">
            <div class="ei8-shell">
              <h2>${name === "About" ? "Built Around Outcomes" : `All ${name} Information`}</h2>
              <p class="ei8-section-lead">Explore the complete ${name.toLowerCase()} details in one place, structured for enterprise decision-makers evaluating Ei8 as a strategic data partner.</p>
              ${cards(data.sections, name === "Services" ? 3 : 2)}
            </div>
          </section>
        </main>
        ${footer()}
      </div>
    `;

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function routeFromPath() {
    const entry = Object.entries(routes).find(([, path]) => path === window.location.pathname);
    return entry ? entry[0] : null;
  }

  document.addEventListener(
    "click",
    function (event) {
      const target = event.target.closest("button, a");
      if (!target) return;

      const explicitPage = target.getAttribute("data-page");
      const textPage = navItems.find((item) => target.textContent.trim() === item);
      const page = explicitPage || textPage;

      if (page && routes[page]) {
        event.preventDefault();
        event.stopPropagation();
        renderPage(page, true);
      }
    },
    true
  );

  window.addEventListener("popstate", function () {
    const page = routeFromPath();
    if (page) {
      renderPage(page, false);
    } else {
      window.location.reload();
    }
  });

  window.addEventListener("DOMContentLoaded", function () {
    const page = routeFromPath();
    if (page) {
      setTimeout(() => renderPage(page, false), 0);
    }
  });
})();
