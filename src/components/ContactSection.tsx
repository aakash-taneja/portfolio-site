import { useEffect, useRef, useState } from "react";
import FormInput from "./FormInput";
import MagneticButton from "./MagneticButton";

const ContactSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [moveWork, setMoveWork] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollDirection(currentScrollPosition > scrollPosition ? "down" : "up");
    setScrollPosition(currentScrollPosition);
  };
  useEffect(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const sectionTop = sectionRef.current?.getBoundingClientRect().top;
    const threshold = window.innerHeight / 2;
    if (
      scrollDirection === "down" &&
      sectionTop !== undefined &&
      sectionTop <= threshold &&
      sectionTop >= -threshold
    ) {
      setMoveWork(true);
    } else if (
      scrollDirection === "up" &&
      sectionTop !== undefined &&
      sectionTop > threshold
    ) {
      setMoveWork(false);
    }
  }, [scrollPosition, scrollDirection]);

  const [values, setValues] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Your Name",
      // errorMessage:
      //   "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Your Name",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email Address",
      label: "Email Address",
      required: true,
    },
    {
      id: 3,
      name: "message",
      type: "text",
      placeholder: "Enter Your Message",
      label: "Your Message",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div
      ref={sectionRef}
      className="contact-section"
      style={{ width: "100%" }}
      id="contact"
    >
      <div
        className={`large-headings contactHeading ${
          moveWork ? "move-right" : ""
        }`}
      >
        Contact
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div>
            <h1 className="form-heading">Have a project in mind?</h1>
            <h5
              className="accent-color"
              style={{
                fontFamily: "DMSans",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                margin: 0,
                marginBottom: "2rem",
              }}
            >
              Chat with me.
            </h5>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}

              <MagneticButton filled={true}>
                <div className="buttonText">Send</div>
              </MagneticButton>
            </form>
          </div>
        </div>
        <div className="contact-right">
          <div className="large-headings">OR</div>
          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                color: "#111",
                fontFamily: "Sequel100Black-45",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Say Hi at ...
            </h1>
            <h1 className="footerEmail accent-color">
              aakashtaneja12@gmail.com
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
