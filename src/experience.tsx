import { useRef, useEffect } from "react";
import { experiences } from "./app.constants";
import BackgroundGradient from "./components/ui/backgorund-gradient";
import ExperienceComponent from "./components/ui/experience";
import SectionHeader from "./components/ui/section-header";

function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log("Intersecting");
        document.querySelector("nav")!.style.position = "sticky";

        observer.unobserve(ref.current!);
      }
    });

    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="experience-section" ref={ref} id="experience">
      <BackgroundGradient className="experience-background-gradient" />
      <div className="container">
        <SectionHeader text="Experience" />

        <div className="experience-box">
          {experiences.map((experience, i) => (
            <ExperienceComponent
              role={experience.role}
              companyName={experience.companyName}
              description={experience.description}
              duration={experience.duration}
              index={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
