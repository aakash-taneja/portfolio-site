import { useState } from "react";
import FormInput from "./FormInput";

const ContactSection = () => {
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
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Your Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email Address",
      errorMessage: "It should be a valid email address!",
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
    <div className="contact-section" style={{ width: "100%" }}>
      <div className="large-headings">Contact</div>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1 className="form-heading">Chai, Samosa & Chit-chatting?</h1>
            <h5 className="accent-color">
              I'm all ears for discussions, collaborations, consultations, or
              simply making solid connections!
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
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <h1>Say Hi at ...</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
