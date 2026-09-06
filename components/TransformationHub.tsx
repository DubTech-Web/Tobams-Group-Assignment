import Image from "next/image";

const services = [
  "Strategy & Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export function TransformationHub() {
  return (
    <section className="mx-auto w-full sm:max-w-auto bg-white px-4 py-12 lg:w-[1440px] lg:px-[64px] lg:py-[64px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-8 rounded-[16px] bg-[#fbd9df] p-4 lg:gap-[40px] lg:p-[40px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] font-semibold italic text-[#1671D9]">
            Learning With Our CEO...
          </p>
          <h2 className="text-2xl font-semibold italic leading-[130%] text-[#571244] lg:text-[32px]">
            Transformation Hub With Jite Newton
          </h2>
          <p className="max-w-[1232px] text-base font-normal leading-[150%] text-[#151515] lg:text-[18px]">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:gap-[64px] lg:grid-cols-[560px_640px]">
          <div className="w-full">
            <Image
              src="/images/transformation-hub.jpg"
              alt="Professional participating in the Transformation Hub program"
              width={560}
              height={340}
              className="h-auto w-full rounded-[8px] object-cover lg:h-[340px] lg:w-[560px]"
            />
          </div>

          <div className="flex flex-col gap-[24px] rounded-[20px] bg-white/30 p-4 lg:p-[32px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex h-[60px] w-full items-center gap-[10px] rounded-[12px] bg-white p-[16px] shadow-sm"
                >
                  <svg
                    className="h-[21px] w-[16.33px] shrink-0 text-[#571244]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span className="text-[18px] font-normal leading-[150%] text-[#151515] truncate">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#"
                className="inline-flex h-[48px] w-[173px] items-center justify-center gap-[8px] rounded-[4px] bg-[#571244] px-[24px] py-[10.5px] text-[18px] font-semibold leading-[150%] text-white transition hover:bg-[#6e1757] focus:outline-none focus:ring-2 focus:ring-[#571244] focus:ring-offset-2"
              >
                Learn More 
                <svg 
                  className="w-3.5 h-3.5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17"></path>
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}