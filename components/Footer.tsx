import Image from "next/image";

export function Footer() {
  return (
    <footer className="mx-auto w-full bg-[#11040E] px-4 py-8 text-white lg:w-[1440px] lg:px-[64px] lg:py-[32px]">
      <div className="mx-auto max-w-[1312px] flex flex-col gap-[20px]">
        <div className="flex flex-col justify-between gap-10 py-[20px] lg:flex-row">
          <div className="flex flex-col gap-[10px] w-[356px] max-w-full">
            <Image
              src="/images/logo.png"
              alt="Tobams Group"
              width={188}
              height={73}
              className="h-[73px] w-[188px] object-contain"
            />

            <p className="text-sm font-normal leading-[150%] tracking-[0.03em] text-[#F8F8F8] lg:text-[16px]">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>

            <div className="flex gap-[10px] mt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#151515] p-[10px] transition hover:bg-gray-200"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#151515] p-[10px] transition hover:bg-gray-200"
              >
                ◎
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#151515] p-[10px] transition hover:bg-gray-200"
              >
                X
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] font-bold leading-[100%] text-white">What We Do</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-normal leading-[150%] tracking-[0.03em] text-white">
              <li>Technology & Innovation</li>
              <li>Strategy Planning</li>
              <li>Tech Talent Solutions</li>
              <li>Training and Development</li>
              <li>IT Consulting Services</li>
              <li>Social Impact</li>
              <li>Talent Procurement</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] font-bold leading-[100%] text-white">Company</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-normal leading-[150%] tracking-[0.03em] text-white">
              <li>About</li>
              <li>Jobs</li>
              <li>Projects</li>
              <li>Partner</li>
              <li>Meet Our Team</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] font-bold leading-[100%] text-white">Solutions</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-normal leading-[150%] tracking-[0.03em] text-white">
              <li>Tobams Group Academy</li>
              <li>Hire a Tech Talent</li>
              <li>Campus Ambassador Program</li>
              <li>Join Our Partners</li>
              <li>Find a Consultant</li>
              <li>Book a Consultation</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 rounded-[8px] bg-[#FFFFFF0F] p-4 md:grid-cols-3 lg:p-[24px]">
          <div>
            <p className="font-bold text-[18px] text-white">Registered Offices</p>
            <p className="mt-3 font-semibold text-[#EF4353]">United Kingdom</p>
            <p className="text-[14px] text-white/80 mt-1">07451196 (Registered by Company House)</p>
            <p className="text-[14px] text-white/80 mt-1">Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
          </div>

          <div className="border-l border-white/10">
            <p className="font-bold text-[18px] text-white opacity-0 hidden md:block">Offices</p>
            <p className="mt-3 font-semibold text-[#EF4353]">Nigeria</p>
            <p className="text-[14px] text-white/80 mt-1">RC 1048722 (Registered by the Corporate Affairs Commission)</p>
            <p className="text-[14px] text-white/80 mt-1">4, Muaz Close, Angwar-Rimi</p>
          </div>

          <div  className="border-l border-white/10">
            <p className="font-bold text-[18px] text-white">Contact Information</p>
            <div className="mt-3 flex items-center gap-2 text-[14px] text-white/90">
              <span className="text-[#EF4353]">✉</span>
              <span>theteam@tobamsgroup.com</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[14px] text-white/90">
              <span className="text-[#EF4353]">📞</span>
              <span>+447886600748</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5 text-[14px] text-white/70">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:underline">Terms and Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}