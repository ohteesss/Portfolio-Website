import { TechnologyIcon } from "../../app.interface";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function Technology({ src, alt, title }: TechnologyIcon) {
  return (
    <motion.li variants={item} className="about-skill" key={src}>
      <img src={src} alt={alt} className="technology-icon" title={title} />
    </motion.li>
  );
}

export default Technology;
