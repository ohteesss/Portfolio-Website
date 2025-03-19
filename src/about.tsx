import { motion } from "framer-motion";
import {
  aboutContainerVariant,
  rightVariants,
  technologies,
  TRANSITION,
} from "./app.constants";
import SectionHeader from "./components/ui/section-header";
import Technology from "./components/ui/technology";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <SectionHeader text="About me" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={TRANSITION}
          viewport={{ once: true }}
          variants={rightVariants}
          className="about-content"
        >
          <div className="about-bar"></div>
          <p className="about-text">
            I&apos;m Daniel Ogunleye, an Android engineer crafting user-friendly
            mobile applications across diverse industries like{" "}
            <span>fashion, energy and banking</span>. I specialized in
            delivering solutions with modern android best practices, clean
            architectures and intuitive design principles. I&apos;m passionate
            about team collaboration to transform ideas to seamless user
            experiences.
          </p>
        </motion.div>
        <div className="about-skills">
          <h3>My Technologies .</h3>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={aboutContainerVariant}
            transition={TRANSITION}
            viewport={{ once: true }}
            className="about-skills-list"
          >
            {technologies.map((tech) => (
              <Technology
                src={tech.src}
                alt={tech.alt}
                key={tech.alt}
                title={tech.title}
              />
            ))}
          </motion.ul>
        </div>
        {/* <div className="about-skills">
          <h3>My Hobbies .</h3>
          <ul className="about-skills-list">
            <li>Reading</li>
            <li>Traveling</li>
            <li>Music</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default About;
