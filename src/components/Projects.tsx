import Image from "next/image";

type MediaSlot =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | { type: "vimeo"; id: string }
  | null;

type Project = {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  media: [MediaSlot, MediaSlot];
  mediaRatio?: string;
};

const projects: Project[] = [
  {
    name: "Market Cardinal",
    description:
      "A modern financial news and market data platform that aggregates headlines from trusted sources and delivers real-time stock information.",
    tags: ["JavaScript", "React", "TailwindCSS", "Supabase", "Node.js", "PostgreSQL", "Vercel"],
    github: "https://github.com/shaynelachapelle/market-cardinal",
    demo: "https://www.marketcardinal.com/",
    media: [
      { type: "image", src: "/images/mc_demo_pic.PNG" },
      { type: "video", src: "/videos/mc_demo_vid.mp4" },
    ],
    mediaRatio: "1918/946",
  },
  {
    name: "Code to Give 2025",
    description:
      "An AI-guided, transparent, multilingual donation platform for a nonprofit organization supporting victims of family violence.",
    tags: ["React", "TypeScript", "TailwindCSS", "Go", "Python", "Flask", "Hugging Face", "Vercel"],
    github: null,
    demo: null,
    media: [
      { type: "vimeo", id: "1138977580" },
      { type: "image", src: "/images/cdg_group_photo.JPG" },
    ],
  },
  {
    name: "Personal Website v1",
    description:
      "A personal website showcasing my skills, projects, and favourite film photos. My first attempt at building a website from scratch, a fun experiment in design and frontend development.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/shaynelachapelle/personal-website",
    demo: "https://shaynelachapelle.github.io/personal-website/",
    media: [
      { type: "image", src: "/images/website-preview.JPG" },
      { type: "video", src: "/videos/personal_website_demo.mp4" },
    ],
  },
];

function GitHubIcon() {
  return (
    <svg height="18" width="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function MediaSlotView({ slot, mediaRatio }: { slot: MediaSlot; mediaRatio?: string }) {
  const containerClass = "relative w-full overflow-hidden border-2 rounded-lg border-dashed border-black";
  const ratio = { aspectRatio: mediaRatio ?? "16/9" };

  if (slot?.type === "image") {
    return (
      <div className={containerClass} style={ratio}>
        <Image src={slot.src} alt="Project preview" fill sizes="(min-width: 1280px) 550px, 45vw" className="object-cover" />
      </div>
    );
  }
  if (slot?.type === "video") {
    return (
      <div className={containerClass} style={ratio}>
        <video
          src={slot.src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }
  if (slot?.type === "vimeo") {
    return (
      <div className={containerClass} style={ratio}>
        <iframe
          src={`https://player.vimeo.com/video/${slot.id}?background=1&autoplay=1&loop=1&muted=1&pip=0`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "calc(100% + 80px)", height: "calc(100% + 80px)" }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Project demo"
        />
      </div>
    );
  }
  return (
    <div
      className="w-full border-2 rounded-lg border-dashed border-black/30 flex items-center justify-center text-stone-400 text-xs"
      style={ratio}
    >
      —
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-display italic font-normal mb-12 text-center"
          style={{
            fontSize: "clamp(2rem, 3vw, 2.75rem)",
            textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
          }}
        >
          Projects
        </h2>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="textured-card rounded-[20px] border-[3px] border-black p-5 card-shadow card-shadow-hover"
            >
              {/* Two media slots */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {project.media.map((slot, i) => (
                  <MediaSlotView key={i} slot={slot} mediaRatio={project.mediaRatio} />
                ))}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display italic text-2xl font-medium">{project.name}</h3>

                <p className="text-stone-800 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm border border-black/40 rounded px-2 py-0.5 text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="flex items-center gap-5 pt-3 border-t border-black/15">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-slide flex items-center gap-1.5 text-sm font-medium text-[brown]"
                      >
                        <GitHubIcon />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-slide flex items-center gap-1.5 text-sm font-medium text-[brown]"
                      >
                        <svg height="18" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* More on GitHub */}
          <a
            href="https://github.com/shaynelachapelle"
            target="_blank"
            rel="noopener noreferrer"
            className="textured-card flex items-center justify-center gap-3 rounded-[20px] border-[3px] border-dashed border-black/50 p-6 text-stone-700 hover:text-[brown] hover:border-[brown] transition-all duration-300 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.25)]"
          >
            <GitHubIcon />
            <span className="text-sm font-medium">More on GitHub</span>
            <span className="text-xs opacity-70">— @shaynelachapelle</span>
          </a>
        </div>
      </div>
    </section>
  );
}
