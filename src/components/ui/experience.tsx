import { ExperienceType } from "../../app.interface";
import { SplitText } from "./split-text";

interface Experience extends ExperienceType {
  index: number;
}

function ExperienceComponent({
  role,
  companyName,
  duration,
  description,
  index,
}: Experience) {
  return (
    <div className="experience">
      <div>
        <span className="experience-number">0{index}</span>
        {/* <motion.div
          className="experience-bar"
          // style={{ scaleY: scrollYProgress }}
        ></motion.div> */}
      </div>

      <div className="experience-info">
        <h6>{role || "Role"}</h6>
        <h3>{companyName || "Company Name"}</h3>
        <SplitText
          text={duration}
          delay={10}
          transforms={["translate3d(0,0,0)"]}
        />
        {/* <p>
          {description ||
            `description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis praesentium natus possimus expedita voluptatum adipisci
          similique sed ipsa consequatur, excepturi asperiores vitae neque.
          Laborum quod optio illo nulla magnam? Neque est, inventore ad dolorum
          omnis veniam fugit consectetur vero itaque!`}
        </p> */}
        <br />
        <br />
        <SplitText
          text={description}
          delay={10}
          transforms={["translate3d(0,0,0)"]}
        />
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          quasi porro quod rerum dignissimos laudantium at cumque vel?
          Reprehenderit, itaque!
        </p> */}
      </div>
    </div>
  );
}

export default ExperienceComponent;
