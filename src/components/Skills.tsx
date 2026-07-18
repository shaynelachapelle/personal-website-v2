import type { ReactNode } from "react";

type Skill = { label: string; href: string; icon?: string | ReactNode; certLink?: string };
type SkillGroup = { category: string; skills: Skill[]; highlight?: boolean; wide?: boolean };

const SqlIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v5c0 1.657 3.582 3 8 3s8-1.343 8-3V5" />
    <path d="M4 10v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" />
  </svg>
);

const RestIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 9h14" />
    <polyline points="14 5 18 9 14 13" />
    <path d="M19 15H5" />
    <polyline points="10 11 6 15 10 19" />
  </svg>
);

const WebSocketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 4.5 13 11 13 10 22 20.5 11 14 11 13 2" />
  </svg>
);

const GitOpsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <rect x="2"  y="2"  width="9" height="9" fill="black" />
    <rect x="13" y="2"  width="9" height="9" fill="black" />
    <rect x="2"  y="13" width="9" height="9" fill="black" />
    <rect x="13" y="13" width="9" height="9" fill="black" />
  </svg>
);

// Devicons CDN — reliable source for logos not available on Simple Icons
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { label: "Python",     href: "https://www.python.org",                                           icon: "python" },
      { label: "Java",       href: "https://www.java.com",                                             icon: devicon("java") },
      { label: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",          icon: "javascript" },
      { label: "TypeScript", href: "https://www.typescriptlang.org",                                   icon: "typescript" },
      { label: "C",          href: "https://devdocs.io/c/",                                            icon: "c" },
      { label: "SQL",        href: "https://www.w3schools.com/sql/",                                   icon: <SqlIcon /> },
      { label: "PostgreSQL", href: "https://www.postgresql.org",                                       icon: "postgresql" },
    ],
  },
  {
    category: "Web & Frameworks",
    skills: [
      { label: "React",        href: "https://react.dev",                                                        icon: "react" },
      { label: "Next.js",      href: "https://nextjs.org",                                                       icon: "nextdotjs" },
      { label: "FastAPI",      href: "https://fastapi.tiangolo.com",                                             icon: "fastapi" },
      { label: "Node.js",      href: "https://nodejs.org",                                                       icon: "nodedotjs" },
      { label: "REST APIs",    href: "https://developer.mozilla.org/en-US/docs/Glossary/REST",                   icon: <RestIcon /> },
      { label: "WebSockets",   href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",          icon: <WebSocketIcon /> },
      { label: "HTML/CSS",     href: "https://developer.mozilla.org/en-US/docs/Web/HTML",                        icon: "html5" },
      { label: "Tailwind CSS", href: "https://tailwindcss.com",                                                  icon: "tailwindcss" },
      { label: "Pytest",       href: "https://pytest.org",                                                       icon: "pytest" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { label: "Git",     href: "https://git-scm.com",                            icon: "git" },
      { label: "GitHub",  href: "https://github.com",                             icon: "github" },
      { label: "Jenkins",     href: "https://www.jenkins.io",                         icon: "jenkins" },
      { label: "Artifactory", href: "https://jfrog.com/artifactory/",              icon: "jfrog" },
      { label: "Jira",        href: "https://www.atlassian.com/software/jira",     icon: "jira" },
      { label: "GitOps",  href: "https://www.gitops.tech",                        icon: <GitOpsIcon /> },
      { label: "Flagger", href: "https://flagger.app",                            icon: "flux" },
      { label: "Flux", href: "https://fluxcd.io/",                            icon: "flux" },
    ],
  },
  {
    category: "Certifications",
    skills: [
      {
        label: "AWS Certified Cloud Practitioner",
        href: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        certLink: "https://www.credly.com/badges/2660a2e7-9222-46c3-8947-e301e4d95b18/public_url",
        icon: devicon("amazonwebservices", "plain-wordmark"),
      },
      {
        label: "Udemy Fullstack Developer Bootcamp",
        href: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
        certLink: "https://www.udemy.com/certificate/UC-2bc5b133-607e-4fe5-af1c-032881ef86ca/",
        icon: "udemy",
      },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    wide: true,
    skills: [
      { label: "AWS",        href: "https://aws.amazon.com",       icon: devicon("amazonwebservices", "plain-wordmark") },
      { label: "Kubernetes", href: "https://kubernetes.io",        icon: "kubernetes" },
      { label: "Docker",     href: "https://www.docker.com",       icon: "docker" },
      { label: "Podman",     href: "https://podman.io",            icon: "podman" },
      { label: "Linux",      href: "https://www.linux.org",        icon: "linux" },
      { label: "Supabase",   href: "https://supabase.com",         icon: "supabase" },
      { label: "Vercel",     href: "https://vercel.com",           icon: "vercel" },
      { label: "Helm",       href: "https://helm.sh",              icon: "helm" },
      { label: "Istio",      href: "https://istio.io",             icon: "istio" },
      { label: "Prometheus", href: "https://prometheus.io",        icon: "prometheus" },
      { label: "Grafana",    href: "https://grafana.com",          icon: "grafana" },
    ],
  },
];

function MedalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 22l5-2.5 5 2.5-1.5-9.5" />
      <path d="M10 7l.75 2H13l-1.5 1.1.6 1.9L10.5 11l-1.6 1 .6-1.9L8 9h1.75z" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

function SkillBadge({ label, href, icon }: { label: string; href: string; icon?: string | ReactNode }) {
  const iconContent =
    typeof icon === "string" ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={icon.startsWith("http") ? icon : `https://cdn.simpleicons.org/${icon}`}
        alt={label}
        style={{ display: "block", width: 28, height: 28, filter: "brightness(0)" }}
      />
    ) : (
      icon ?? null
    );

  return (
    <div className="relative group inline-flex">
      {iconContent && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-150 pointer-events-none z-10">
          <div
            className="bg-white border border-black/15 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.14)] flex items-center justify-center"
            style={{ width: 50, height: 50 }}
          >
            {iconContent}
          </div>
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid white",
            }}
          />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border px-3 py-1 text-sm transition-colors duration-200 border-black/40 text-stone-800 hover:border-[brown] hover:text-[brown]"
      >
        {label}
      </a>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-display italic font-normal mb-12 text-center"
          style={{
            fontSize: "clamp(2rem, 3vw, 2.75rem)",
            textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
          }}
        >
          Skills
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ category, skills, highlight, wide }) => (
            <div
              key={category}
              className={`textured-card rounded-[20px] border border-black p-5 card-shadow card-shadow-hover${wide ? " lg:col-span-2" : ""}`}
            >
              <h3
                className={`font-display italic text-lg mb-4 ${
                  highlight ? "text-[brown]" : "text-stone-800"
                }`}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ label, href, icon, certLink }) => (
                  <div key={label} className="flex items-center gap-2">
                    <SkillBadge label={label} href={href} icon={icon} />
                    {certLink && (
                      <a
                        href={certLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View certificate"
                        className="text-stone-800 hover:text-[brown] hover:opacity-70 transition-opacity duration-200"
                      >
                        <MedalIcon />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
