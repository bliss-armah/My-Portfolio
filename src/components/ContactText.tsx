import { contactForm } from "../utils/data";

const ContactText = () => {
  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 leading-[1.1]">
        We'd love to hear<br />from you.
      </h2>

      <div className="flex flex-col gap-4">
        {contactForm.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]"
          >
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--muted-foreground))] shrink-0">
              {item.icon}
            </div>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactText;
