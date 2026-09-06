import Image from "next/image";

export function LearningManagement() {
  return (
    <section className="mx-auto mt-10 w-full sm:max-w-max bg-[#571244]/10 px-4 py-10 lg:w-[1440px] lg:px-[64px] lg:py-[48px]">
      <div className="mx-auto grid w-full max-w-[1312px] items-center gap-10 lg:gap-[80px] lg:grid-cols-[556.88px_minmax(0,675.12px)]">
        
        {/* Image Column */}
        <div className="flex w-full justify-center">
          <Image
            src="/images/learning-management.jpg"
            alt="Professionals participating in a learning management program"
            width={557}
            height={568}
            className="h-[280px] w-[275px] rounded-[357.57px] object-cover lg:h-[568px] lg:w-[556.88px]"
          />
        </div>

        {/* Text and Content Column - Set to w-full to fill the 675.12px grid track */}
        <div className="flex w-full min-w-0 flex-col gap-8 lg:gap-[56px]">
          <h2 className="text-3xl font-semibold leading-[130%] tracking-[0.03em] text-[#571244] lg:text-[40px] lg:leading-[150%]">
            Learning Management System
          </h2>

          {/* Inner Text Card - w-full ensures it spans the entire 675px column width */}
          <div className="flex w-full min-w-0 flex-col gap-5 rounded-[8px] bg-[#571244]/10 p-4 lg:p-[24px]">
            <p className="text-base font-normal leading-[150%] text-[#151515] lg:text-[18px]">
              TG Academy is a hub of knowledge and skill-building resources designed to
              empower tech talents on their learning journey. From technical courses
              covering the latest programming languages and development frameworks to
              soft skills training in leadership, effective communication and project
              management, TG Academy offers a wide range of courses to cater to diverse
              learning needs. With accessible and interactive learning materials, individuals
              can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
            </p>

            <div className="flex flex-col gap-[16px]">
              <p className="text-base font-bold leading-[150%] text-[#571244] lg:text-[18px]">
                Some of our courses include:
              </p>

              {/* Standard Bullet List */}
              <ul className="grid grid-cols-1 gap-x-4 gap-y-2 list-disc list-inside text-sm font-normal leading-[150%] text-[#151515] sm:grid-cols-2 lg:grid-cols-3 lg:text-[16px]">
                {[
                  "Business Analysis",
                  "Design Thinking",
                  "Effective Communication",
                  "Entrepreneurship",
                  "Career Development",
                  "Business Model",
                ].map((item) => (
                  <li key={item} className="truncate">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learn More Button */}
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
    </section>
  );
}