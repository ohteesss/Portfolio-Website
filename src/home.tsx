import { motion } from "framer-motion";
import { leftVariants, rightVariants, TRANSITION } from "./app.constants";
import BackgroundGradient from "./components/ui/backgorund-gradient";
import { SplitText } from "./components/ui/split-text";

function Hero() {
  return (
    <div className="hero" id="home">
      <BackgroundGradient className="hero-background-gradient" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {/* Hello <div className="hero-wave"></div> ,{" "} */}
            <SplitText text="Hello! I'm Daniel" />{" "}
            <motion.span
              className="hero-wave"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 2.3 } }}
            >
              👋
            </motion.span>
          </h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={rightVariants}
            transition={{
              ...TRANSITION,
              delay: 2.3,
            }}
            className="hero-subtitle"
          >
            {" "}
            <span> Android </span> Developer
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={rightVariants}
            transition={{
              ...TRANSITION,
              delay: 2.3,
            }}
            className="hero-description"
          >
            I&apos;m a seasoned android engineer based in Porto.
          </motion.p>
          <motion.a
            initial="hidden"
            animate="visible"
            variants={leftVariants}
            transition={{
              ...TRANSITION,
              delay: 2.8,
            }}
            href="#contact"
            className="btn"
          >
            Get in touch
          </motion.a>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <img src="/danielogunleye.jpeg" alt="Daniel Ogunleye" />
            <div className="hero-ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
