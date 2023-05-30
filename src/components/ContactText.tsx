import { contactForm } from '../utils/data'

const ContactText = () => {
  return (
    <div>
        <article>
            <div className="section-title about-title">
              <h2 className="font-semibold">
                we would love to hear{" "}
                <span className="text-[#e9b949]">from you</span>
              </h2>
            </div>
            <div className=" w-full ">
              {contactForm.map((item) => (
                <div
                  className=" flex justify-between items-center mb-5"
                  key={item.id}
                >
                  <div className="social-icon bg-[#f7d06e] w-[55px] h-[55px] rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="w-[80%] text-left text-[1.5rem] text-[#617d98]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </article>
    </div>
  )
}

export default ContactText