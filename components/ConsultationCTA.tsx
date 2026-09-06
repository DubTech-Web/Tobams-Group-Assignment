export function ConsultationCTA() {
  return (
    <section id="consultation" className="mx-auto w-full max-w-full bg-white px-4 py-12 lg:w-[1440px] lg:px-[64px] lg:py-[64px]">
      <div className="mx-auto flex w-full max-w-[1134px] flex-col items-center justify-center gap-[32px] rounded-[8px] bg-[#571244] px-4 py-8 text-center text-white lg:px-[64px]">
        <div className="flex max-w-[1006px] flex-col gap-[8px]">
          <p className="text-lg font-semibold leading-[150%] md:text-[24px]">
            Want to accelerate professional growth and development at your organisation?
          </p>
          <p className="text-lg font-semibold leading-[150%] md:text-[24px]">
            See how we can help.
          </p>
        </div>

        <a
          href="#"
          className="flex h-[48px] w-[214px] items-center justify-center rounded-[4px] border border-[#571244] bg-white px-[24px] py-[12px] text-sm font-semibold text-[#571244] transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#571244]"
        >
          Book a Consultation
        </a>

      </div>
    </section>
  );
}