import Image from "next/image";
import portraitImg from "../../public/images/39440002-min.jpg";
import landscapeImg from "../../public/images/25310007-min.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center pt-20 pb-20 px-6 text-center"
    >
      <h1
        className="font-display italic font-normal mb-8 leading-[1.1]
          animate-fade-up opacity-0 [animation-fill-mode:forwards]"
        style={{
          fontSize: "clamp(46px, 4.5vw, 4rem)",
          textShadow: "#333 1px 1px 1px",
        }}
      >
        Shayne <br />Lachapelle
      </h1>

      {/* Portrait image — mobile only */}
      <div
        className="md:hidden relative w-[90%] mx-auto rounded-[20px] border-[3px] border-black overflow-hidden mb-10 card-shadow card-shadow-hover
          animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]"
        style={{ aspectRatio: "2/3" }}
      >
        <Image
          src={portraitImg}
          alt="Portrait"
          fill
          sizes="90vw"
          placeholder="blur"
          className="object-cover"
          priority
        />
      </div>

      {/* Scroll hint — mobile only */}
      <div className="md:hidden animate-bounce text-black/30 mb-2 [animation-delay:600ms]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      {/* Landscape image — desktop */}
      <div
        className="hidden md:block relative rounded-[20px] border-[3px] border-black overflow-hidden mb-10 card-shadow card-shadow-hover
          animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]"
        style={{ width: "clamp(350px, 68vw, 960px)", aspectRatio: "16/9" }}
      >
        <Image
          src={landscapeImg}
          alt="Landscape"
          fill
          sizes="(min-width: 1412px) 960px, 68vw"
          placeholder="blur"
          className="object-cover"
          priority
        />
        {/* Bird fly-across */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bird-flying.gif"
          alt=""
          aria-hidden="true"
          className="bird"
        />
      </div>

    </section>
  );
}
