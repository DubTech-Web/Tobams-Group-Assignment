export function TrainingConsultant() {
  return (
    <section className="mx-auto w-full bg-[#571244]/10 px-4 py-10 lg:w-[1440px] lg:px-[64px] lg:py-[48px]">
      <div className="mx-auto max-w-[1312px] flex flex-col gap-[56px]">
        
        <div className="flex flex-col gap-[12px]">
          <h2 className="text-3xl font-semibold leading-[130%] tracking-[0.03em] text-[#571244] lg:text-[40px] lg:leading-[150%]">
            Training The Consultant
          </h2>

          <p className="text-base font-semibold leading-[150%] text-[#571244] lg:text-[18px]">
            Maximise Your Potential as a Certified Trainer
          </p>

          <p className="max-w-[1312px] text-base font-normal leading-[150%] text-[#151515] lg:text-[18px]">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[8px] bg-[#571244] p-4 md:grid-cols-2 lg:p-[24px]">
          <div className="flex flex-col gap-[12px] w-[622px] max-w-full">
            <h3 className="text-[18px] font-bold leading-[150%] text-white">
              Expert-Led Learning
            </h3>
            <p className="text-[18px] font-normal leading-[150%] text-white/80">
              Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.
            </p>
          </div>

          <div className="flex flex-col gap-[12px] w-[622px] max-w-full">
            <h3 className="text-[18px] font-bold leading-[150%] text-white">
              Interactive Workshops
            </h3>
            <p className="text-[18px] font-normal leading-[150%] text-white/80">
              Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.
            </p>
          </div>

          <div className="flex flex-col gap-[12px] w-[622px] max-w-full">
            <h3 className="text-[18px] font-bold leading-[150%] text-white">
              Comprehensive Curriculum
            </h3>
            <p className="text-[18px] font-normal leading-[150%] text-white/80">
              Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.
            </p>
          </div>

          <div className="flex flex-col gap-[12px] w-[622px] max-w-full">
            <h3 className="text-[18px] font-bold leading-[150%] text-white">
              Global Recognition
            </h3>
            <p className="text-[18px] font-normal leading-[150%] text-white/80">
              You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.
            </p>
          </div>

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
    </section>
  );
}