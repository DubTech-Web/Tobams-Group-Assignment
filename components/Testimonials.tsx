import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: "/images/aisha.png",
  },
  {
    name: "John Davis",
    role: "Marketing Manager and Ecommerce Emporium",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: "/images/john.png",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions Ltd.",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/images/chinonso.png",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full  bg-white px-4 py-12 lg:w-[1440px] lg:px-[64px] lg:py-[64px]">
      <div className="mx-auto max-w-[1312px] flex flex-col gap-[41px]">
        
        <h2 className="text-center text-3xl font-bold leading-[130%] text-[#151515] lg:text-[40px]">
          Testimonials
        </h2>

        {/* Testimonials Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px]">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-auto min-h-[244px] w-full flex-col justify-between rounded-[16px] border-l-[2px] border-[#EF4353] bg-white p-[20px_24px] shadow-sm lg:h-[244px] lg:w-[422px]"
            >
              {/* Profile info group */}
              <div className="flex items-center gap-[16px]">
                <div className="relative h-[44px] w-[44px] shrink-0 rounded-full overflow-hidden bg-[#fbd9df]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold leading-[150%] text-[#151515]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[14px] font-normal leading-[150%] text-[#696969]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimony Text */}
              <p className="text-[18px] font-normal leading-[150%] text-[#151515]">
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>

        <div className="flex h-[32px] w-full items-center justify-end gap-[12px] lg:w-[1312px]">
          <button 
            aria-label="Previous testimonial"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#F04354]/10 text-[#EF4353] transition hover:bg-[#F04354]/25"
          >
            <svg className="h-[16.97px] w-[10.37px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            aria-label="Next testimonial"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#F04354]/10 text-[#EF4353] transition hover:bg-[#F04354]/25"
          >
            <svg className="h-[16.97px] w-[10.37px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}