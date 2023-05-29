import React, { useState } from "react";
import * as Yup from "yup";
import Header from "../components/Header";
import { contactForm } from "../utils/data";
import axios from "axios";
import { FormData, validationSchema } from "../Schema/Form";

const ContactPage: React.FC = () => {
  const initialValues: FormData = {
    fullname: "",
    number: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialValues);
  const [formErrors, setFormErrors] = useState<FormData>(initialValues);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    (Yup.reach(validationSchema, fieldName) as Yup.StringSchema<string>)
      .validate(value)
      .then(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "",
        }));
      })
      .catch((err: Yup.ValidationError) => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: err.message,
        }));
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("https://mail-service-pbac.onrender.com/send", formData)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header name="contact us" classy="contact-hero" />
      <section className="section about">
        <div className="section-center about-center">
          <article>
            <div className="section-title about-title">
              <h2 className="font-semibold">
                we would love to hear{" "}
                <span className="text-[#e9b949]">from you</span>
              </h2>
            </div>
            <div className="w-1/2">
              {contactForm.map((item) => (
                <div
                  className="w-[370px] flex justify-between items-center mb-5 -ml-4"
                  key={item.text}
                >
                  <div className="social-icon bg-[#f7d06e] w-[55px] h-[55px] rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="text-right text-[1.5rem] text-[#617d98]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article className="about-info ml-8">
            <div className="w-3/4 p-2">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullname" className="block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none  ${
                      formErrors.fullname
                        ? "border-red-500"
                        : "focus:ring-[#e9b949]"
                    }`}
                  />
                  {formErrors.fullname && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.fullname}
                    </p>
                  )}
                </div>
                 <div>
                  <label htmlFor="number" className="block mb-1">
                   Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none  ${
                      formErrors.number
                        ? "border-red-500"
                        : "focus:ring-[#e9b949]"
                    }`}
                  />
                  {formErrors.number && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.number}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none  ${
                      formErrors.email
                        ? "border-red-500"
                        : "focus:ring-[#e9b949]"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none  ${
                      formErrors.message
                        ? "border-red-500"
                        : "focus:ring-[#e9b949]"
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button type="submit" className="btn" >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
