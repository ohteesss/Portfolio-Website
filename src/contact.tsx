import { FormEvent, useEffect, useRef, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { socialLinks, TRANSITION } from "./app.constants";
import BackgroundGradient from "./components/ui/backgorund-gradient";
import SectionHeader from "./components/ui/section-header";
import SocialLink from "./components/ui/social-link";
import { TypewriterEffectSmooth } from "./components/ui/typewriter";
import emailjs from "@emailjs/browser";
import { envVars } from "./env-vars";
import { BiLoaderAlt } from "react-icons/bi";
import Toast from "./components/ui/toast";
import { AnimatePresence, motion } from "framer-motion";

function Contact() {
  const [inView, setInView] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({
    message: "",
    type: "",
  });
  const form = useRef<HTMLFormElement>(null);
  const handleHover = (value: number, e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(".social--link")) {
      const link = (e.target as HTMLElement).closest(
        ".social--link"
      ) as HTMLElement;
      const siblings =
        link.closest(".social--links")?.querySelectorAll(".social--link") || [];
      siblings.forEach((el) => {
        if (el !== link) {
          (el as HTMLElement).style.opacity = value.toString();
        }
      });
    }
  };

  useEffect(() => {
    const socialLinksEl = document.getElementById("social--links");
    const mouseOverHandler = (e: MouseEvent) => handleHover(0.5, e);
    const mouseOutHandler = (e: MouseEvent) => handleHover(1, e);

    if (socialLinksEl) {
      socialLinksEl.addEventListener("mouseover", mouseOverHandler);
      socialLinksEl.addEventListener("mouseout", mouseOutHandler);

      return () => {
        socialLinksEl.removeEventListener("mouseover", mouseOverHandler);
        socialLinksEl.removeEventListener("mouseout", mouseOutHandler);
      };
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast({
        message: "",
        type: "",
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [toast.message]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        envVars.REACT_APP_EMAIL_SERVICE_ID,
        envVars.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current!,
        {
          publicKey: envVars.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setToast({
            message: "Message sent successfully",
            type: "success",
          });
          form.current?.reset();
          setIsLoading(false);
        },
        (error) => {
          setToast({
            message: "Message failed to send, try again",
            type: "error",
          });
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  const year = new Date().getFullYear();

  return (
    <section className="contact-section" id="contact">
      <AnimatePresence>
        {toast.message && <Toast message={toast.message} type={toast.type} />}
      </AnimatePresence>
      <BackgroundGradient className="contact-background-gradient" />
      <div className="container">
        <SectionHeader text="Get in Touch" />
        <div className="contact-box">
          <div className="contact-message">
            <h3>
              Looking to partner or work together? Reach out through the form
              and I'll get back to you in the next{" "}
              <span className="emphasis"> 48 hours. </span>
            </h3>
            {/* Links */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button
                type="submit"
                className="contact-btn"
                disabled={isLoading}
              >
                {isLoading && (
                  <motion.span
                    initial={{
                      rotate: 0,
                    }}
                    animate={{
                      rotate: 360,
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  >
                    {" "}
                    <BiLoaderAlt />{" "}
                  </motion.span>
                )}{" "}
                Send
              </button>
            </form>
          </div>
          <div className="contact-details">
            {/* <h3>Or you can reach out through these platforms</h3> */}
            <TypewriterEffectSmooth
              words={[
                {
                  text: "Or",
                },
                {
                  text: "you",
                },
                {
                  text: "can",
                },
                {
                  text: "reach",
                },
                {
                  text: "out",
                },
                {
                  text: "through",
                },
                {
                  text: "these",
                },
                {
                  text: "platforms",
                },
              ]}
            />
            <div className="contact-email">
              <div className="email-icon">
                <TfiEmail />
              </div>
              <p>danielayodeji97@gmail.com</p>
            </div>
            <div className="social--links" id="social--links">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} link={link.link} icon={link.icon} />
              ))}
            </div>
          </div>
        </div>
        <motion.h3
          ref={headingRef}
          initial={{ opacity: 0, letterSpacing: "-10px" }}
          animate={
            inView
              ? {
                  opacity: 1,
                  letterSpacing: "0px",
                  transition: TRANSITION,
                }
              : {}
          }
          className="copyright"
        >
          &copy; Daniel Ayodeji {year}{" "}
        </motion.h3>
      </div>
    </section>
  );
}

export default Contact;
