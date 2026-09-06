import Image from "next/image";

const features = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export function ManagementDevelopment() {
  return (
    <section className="mx-auto w-full sm:max-w-auto bg-[#f7f7f7] px-4 py-12 lg:w-[1440px] lg:px-[64px] lg:py-[64px]">
      <div className="mx-auto max-w-[1312px] rounded-[20px] bg-[#2C0922] p-4 lg:p-[40px]">
        <div className="grid min-w-0 items-center gap-8 lg:gap-[40px] lg:grid-cols-[592px_592px]">
          <div className="min-w-0 w-full overflow-hidden">
            <Image
              src="/images/management-development.jpg"
              alt="Professionals collaborating during a management development session"
              width={592}
              height={639}
              className="h-auto w-full rounded-[8px] object-cover lg:h-[639px] lg:w-[592px] lg:rounded-l-[8px] lg:rounded-tr-[8px]"
            />
          </div>

          <div className="flex min-w-0 w-full flex-col gap-[32px] text-white">
            <h2 className="text-3xl font-semibold leading-[130%] tracking-[0.03em] lg:text-[40px] lg:leading-[150%]">
              Management Development Program
            </h2>

            <div className="flex flex-col gap-4 text-base font-normal leading-[150%] text-white/90 lg:text-[18px]">
              <p>
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
              </p>
              <p>
                Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>
            </div>

            <div className="flex flex-col gap-[25px] px-[16px] py-[8px]">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex h-[40px] w-[560px] max-w-full items-center gap-[8px] rounded-[8px] bg-[#8F6182] px-[8px] py-[8px]"
                >
                  <svg
                    className="h-[16px] w-[12.44px] shrink-0 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.52"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span className="text-[18px] font-semibold leading-[150%] text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}