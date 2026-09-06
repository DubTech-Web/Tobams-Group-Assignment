import Image from "next/image";

export function Hero() {
  return (
    <section className="relative mx-auto flex h-[420px] w-full sm:max-w-auto flex-col items-center justify-center overflow-hidden bg-black px-4 py-16 lg:h-[511px] lg:w-[1440px] lg:px-[64px] lg:py-[112px]">
      <Image
        src="/images/hero.jpg"
        alt="Professional working at a computer during a training session"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        <div className="mb-3 rounded-[100px] bg-white/15 px-6 py-2 text-xs font-semibold uppercase leading-[150%] tracking-[0.2em] backdrop-blur-sm lg:px-[48px] lg:py-[12px] lg:text-[14px]">
          What We Do
        </div>

        <h1 className="text-[32px] font-bold leading-[120%] sm:text-[40px] lg:text-[56px] lg:leading-[130%]">
          Training and Development
        </h1>

        <p className="mt-4 max-w-[1077px] text-base font-semibold leading-[150%] text-white/90 lg:text-[18px]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <a
          href="#consultation"
          className="mt-6 flex h-[48px] w-[214px] items-center justify-center rounded-[4px] bg-[#571244] px-[24px] py-[12px] text-sm font-semibold text-white transition hover:bg-[#6e1757] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}