import Header from "../components/Header";

import { Navibar } from "../components";

import ContactText from "../components/ContactText";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navibar />
      <Header name="contact me" classy="contact-hero" />
      <section className="section about">
        <div className="section-center about-center  items-center">
          <ContactText />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
