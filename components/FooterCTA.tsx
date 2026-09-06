export function FooterCTA() {
  return (
    <section className="mx-auto w-full  border-b-[2px] border-[#C4C4C4] bg-[#1D0617] px-4 py-8 text-white lg:w-[1440px] lg:px-[64px] lg:py-[40px]">
      <div className="mx-auto flex max-w-[1312px] flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-[40px]">
        <div className="flex max-w-[1114px] flex-col gap-[10px]">
          <p className="text-[18px] font-normal leading-[150%] text-white">
            Ready to be part of something extraordinary?
          </p>
          <h2 className="text-2xl font-semibold leading-[130%] text-white lg:text-[32px]">
            Let&apos;s work together to create a difference
          </h2>
        </div>

        <a
          href="#consultation"
          className="flex h-[48px] w-[151px] shrink-0 items-center justify-center rounded-[4px] bg-[#571244] px-[24px] py-[12px] text-[18px] font-semibold leading-[120%] text-white transition hover:bg-[#6e1757] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1D0617]"
        >
          Get in Touch
        </a>

      </div>
    </section>
  );
}