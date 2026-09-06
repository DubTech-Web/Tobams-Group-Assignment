import Image from "next/image";

const programs = [
  {
    title: "Corporate Trainings",
    image: "/images/corporate-training.jpg",
    width: 602,
    height: 346,
    imageClassName: "lg:h-[346px] lg:w-[602px]",
    borderRadius: "rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    items: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customer-led Training",
    ],
  },
  {
    title: "Personalised Individual Training",
    image: "/images/individual-training.jpg",
    width: 599,
    height: 378,
    imageClassName: "lg:h-[378px] lg:w-[599px]",
    borderRadius: "rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs.",
    items: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
  },
  {
    title: "Capacity Development",
    image: "/images/capacity-development.jpg",
    width: 601,
    height: 405,
    imageClassName: "lg:h-[405px] lg:w-[601px]",
    borderRadius: "rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    items: [
      "Tailored Training Programs",
      "Expert-led Workshops",
      "Personalised Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
  },
];

export function TrainingPrograms() {
  return (
    <section id="training" className="mx-auto w-full  bg-white px-4 py-12 lg:w-[1440px] lg:px-[64px] lg:py-16">
      <div className="mx-auto max-w-[1312px] space-y-[64px]">
        {programs.map((program, index) => {
          const imageFirst = index === 1;

          return (
            <article
              key={program.title}
              className="grid items-center gap-[64px] lg:grid-cols-[646px_auto]"
            >
              {/* Text Column */}
              <div className={`flex w-full flex-col gap-[21px] ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                <h2 className="text-3xl font-semibold leading-[130%] tracking-[0.03em] text-[#151515] lg:text-[40px] lg:leading-[150%]">
                  {program.title}
                </h2>

                <p className="text-base font-normal leading-[150%] text-[#696969] lg:text-[18px]">
                  {program.description}
                </p>

                {/* Items List Frame - Single Column */}
                <ul className="flex flex-col gap-[10px] pt-2">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start gap-[14px]">
                      {/* Zap Icon */}
                      <svg
                        className="mt-1 h-[16px] w-[12.44px] shrink-0 text-[#480F39]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                      <span className="text-base font-normal leading-[150%] text-[#151515] lg:text-[18px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Column */}
              <div className={`flex w-full justify-center overflow-hidden ${imageFirst ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"}`}>
                <Image
                  src={program.image}
                  alt={`${program.title} training session`}
                  width={program.width}
                  height={program.height}
                  className={`h-auto w-full object-contain ${program.imageClassName} ${program.borderRadius}`}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}