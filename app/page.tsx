import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Footer } from "@/components/Footer";
import { FooterCTA } from "@/components/FooterCTA";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearningManagement } from "@/components/LearningManagement";
import { ManagementDevelopment } from "@/components/ManagementDevelopment";
import { Testimonials } from "@/components/Testimonials";
import { TrainingConsultant } from "@/components/TrainingConsultant";
import { TrainingPrograms } from "@/components/TrainingPrograms";
import { TransformationHub } from "@/components/TransformationHub";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <LearningManagement />
        <TrainingPrograms />
        <ManagementDevelopment />
        <TransformationHub />
        <TrainingConsultant />
        <ConsultationCTA />
        <Testimonials />
      </main>

      <FooterCTA />
      <Footer />
    </>
  );
}