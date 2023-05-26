import { useState } from "react";
import Header from "../components/Header";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface FormData {
  fullname: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can perform any necessary actions with the form data here
    console.log(formData);
    // Reset the form fields
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Header name="contact us" classy="contact-hero" />
      <section className="section about ">
        <div className="section-center about-center ">
          <article>
            <div className="section-title about-title">
              <h2 className="font-semibold">
                we would love to hear{" "}
                <span className="text-[#e9b949]">from you</span>{" "}
              </h2>
            </div>
              <div className=" w-[290px] flex justify-between items-center ">
                <div className="social-icon bg-[#f7d06e] w-[55px] h-[55px] rounded-full flex items-center justify-center">
                  <BsTelephone />
                </div>
                <div className=" text-center text-[1.5rem] text-[#617d98]">
                  +233245289983
                </div>
              </div>
          </article>
          <article className="about-info ml-8">
            <div className="w-3/4 p-2 ">
              {/* Form on the right */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullname" className="block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e9b949]"
                  />
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
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e9b949]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e9b949]"
                  />
                </div>
                <div>
                  <button type="submit" className="btn">
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
