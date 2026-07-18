import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-display italic font-normal mb-12 text-center"
          style={{
            fontSize: "clamp(2rem, 3vw, 2.75rem)",
            textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
          }}
        >
          About
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Bio text */}
          <div
            className="space-y-4 leading-relaxed lg:max-w-[55%]"
            style={{ fontSize: "clamp(0.9rem, 1rem, 1.1rem)" }}
          >
            <p>
              I&apos;m a third-year <span className="font-semibold">Computer Science</span> student at{" "}
              <a
                href="https://www.mcgill.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-slide font-semibold text-[brown]"
              >
                McGill University
              </a>{" "}
              pursuing a minor in <span className="font-semibold">Entrepreneurship</span>. I&apos;m passionate about
              building software that solves real problems.
            </p>
            <p>
              My journey in tech started when I took an introductory programming course at <a
                href="https://johnabbott.qc.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-slide font-semibold text-[brown]"
              >
                John Abbott College
              </a>. Since then, I&apos;ve invested all my free time in learning new technologies and building cool stuff. 
            </p>
            <p>
              When I&apos;m not coding, I might be <span className="italic">snowboarding</span>, <span className="italic">travelling</span>, <span className="italic">taking photos of landscapes</span> or <span className="italic">planning my next trip</span>. One of my most recent accomplishments was hitchhiking from Bulgaria to Romania in a day (ask me about it!).
            </p>

            <div className="pt-2 flex items-center justify-between">
              {/* Social icons — left */}
              <div className="flex items-center gap-5">
                <a
                  href="mailto:slachapelle02@gmail.com"
                  aria-label="Email"
                  className="text-black hover:text-[brown] hover:scale-125 transition-all duration-300 inline-block [filter:drop-shadow(1px_1px_1px_rgba(0,0,0,0.1))]"
                >
                  <svg height="30" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/shaynelachapelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-black hover:text-[brown] hover:scale-125 transition-all duration-300 inline-block [filter:drop-shadow(1px_1px_1px_rgba(0,0,0,0.1))]"
                >
                  <svg height="30" width="30" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/shayne-lachapelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-black hover:text-[brown] hover:scale-125 transition-all duration-300 inline-block [filter:drop-shadow(1px_1px_1px_rgba(0,0,0,0.1))]"
                >
                  <svg height="27" width="27" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                
              </div>

              {/* Resume — right */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm">Resume {`->`}</span>
                  <a
                    href="/ShayneLachapelle_Resume_Jul2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Resume"
                    className="text-black hover:text-[brown] hover:scale-125 transition-all duration-300 inline-block [filter:drop-shadow(1px_1px_1px_rgba(0,0,0,0.1))]"
                  >
                    <svg height="30" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="w-full lg:max-w-[50%] shrink-0">
            <div
              className="relative w-full rounded-[20px] border-[3px] border-black overflow-hidden card-shadow card-shadow-hover"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/25310017-min.JPG"
                alt="Shayne Lachapelle"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
