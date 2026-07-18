const companyLogo = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const experiences = [
  {
    role: "Summer Technology Analyst",
    company: "Morgan Stanley",
    companyHref: "https://www.morganstanley.com/",
    companyLogo: companyLogo("morganstanley.com"),
    period: "May 2026 – Present",
    location: "Montreal, QC",
    badge: { label: "Internship", style: "border border-black text-stone-800" },
    bullets: [
      "Developed a REST API using Python and FastAPI to aggregate Kubernetes cluster resources across on-premises and public cloud environments, containerized with Docker and deployed via Flux as a proof of concept for onboarding Flagger as the firm's progressive delivery tool.",
      "Built and maintained CI/CD pipelines using Jenkins to automate container build, test, and deployment workflows, and configured Prometheus and Grafana dashboards for real-time monitoring and observability of deployed services.",
      "Authored comprehensive unit tests using pytest to validate API reliability and ensure consistent behavior across cluster environments, collaborating within an Agile team of 10 using Jira for sprint planning and delivery tracking.",
    ],
    current: true,
  },
  {
    role: "Code to Give Hackathon Participant",
    company: "Morgan Stanley",
    companyHref: "https://www.morganstanley.com/",
    companyLogo: companyLogo("morganstanley.com"),
    period: "November 2025",
    location: "Montreal, QC",
    badge: { label: "Hackathon", style: "border border-dashed border-black text-stone-800" },
    bullets: [
      "Built an AI-guided, multilingual donation platform for a nonprofit supporting victims of family violence during Morgan Stanley's Code to Give hackathon, designed to personalize the donation experience and foster community engagement to drive increased contributions.",
      "Developed the full-stack application using React, TypeScript, and TailwindCSS on the frontend with a Go and Flask backend integrating a Hugging Face language model, deployed on Vercel. Collaborated in a team of 6, organizing into subteams by expertise to deliver from ideation to deployment within a 72-hour timeframe.",
    ],
    current: false,
  },
  {
    role: "Power Platform Developer",
    company: "Pro Services 365",
    companyHref: "https://proservice365.com/",
    companyLogo: companyLogo("proservice365.com"),
    period: "May – August 2025",
    location: "Saint-Laurent, QC",
    badge: { label: "Internship", style: "border border-black text-stone-800" },
    bullets: [
      "Designed, developed, and deployed custom B2B applications (Warehouse & Transportation Management Systems) using Canvas Apps and Model-Driven Apps, facilitating 500+ transactions and driving $150K+ in gross profit within 2 months for client companies.",
      "Engineered scalable integrations between Microsoft Business Central and Dataverse (CDS) by building custom AL code extensions and leveraging Microsoft APIs, enabling real-time synchronization across ERP and user-facing applications.",
    ],
    current: false,
  },
  {
    role: "Power Platform Developer",
    company: "Pro Services 365",
    companyHref: "https://proservice365.com/",
    companyLogo: companyLogo("proservice365.com"),
    period: "May – August 2024",
    location: "Saint-Laurent, QC",
    badge: { label: "Internship", style: "border border-black text-stone-800" },
    bullets: [
      "Automated critical workflows with Power Automate, processing thousands of records for company-to-company data migrations and daily business operations, saving 2+ hours per day in manual data entry while improving accuracy and minimizing human error.",
      "Collaborated in an Agile environment as part of a small team, interfacing directly with clients to deliver iterative solutions, ensure transparency, and optimize operations spanning inventory, order fulfillment, invoicing, and logistics.",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-display italic font-normal mb-12 text-center"
          style={{
            fontSize: "clamp(2rem, 3vw, 2.75rem)",
            textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
          }}
        >
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-black/20" />

          <div className="space-y-0 md:space-y-8 md:pl-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {i > 0 && (
                  <div className="md:hidden flex justify-center">
                    <div className="w-px h-6 bg-black/30" />
                  </div>
                )}
                {/* Dot */}
                <div
                  className={`hidden md:block absolute -left-[41px] top-[20px] h-3.5 w-3.5 rounded-full border-2 ${
                    exp.current
                      ? "border-[brown] bg-[brown]/20"
                      : "border-black/40 bg-[bisque]"
                  }`}
                />

                <div className="textured-card rounded-[20px] border border-black p-5 card-shadow card-shadow-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        className="hidden md:block w-10 h-10 rounded-md mt-0.5 grayscale"
                      />
                      <div>
                        <h3 className="font-semibold text-black">{exp.role}</h3>
                        <a
                            href={exp.companyHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[brown] text-sm mt-0.5 font-medium hover:opacity-80 transition-opacity duration-200"
                          >
                            {exp.company}
                          </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 w-full sm:w-auto">
                      <span className="text-sm text-stone-800 font-mono">{exp.period}</span>
                      <div className="flex items-center justify-between sm:justify-start sm:gap-2 w-full sm:w-auto">
                        <span className="text-xs text-stone-800">{exp.location}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-sans ${exp.badge.style}`}>
                          {exp.badge.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm text-stone-800">
                        <span className="text-[brown] shrink-0">-</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
