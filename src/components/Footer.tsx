import { socialIcons } from "../utils/data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <div className="section-container h-16 flex items-center justify-between">
        <p className="text-xs text-[hsl(var(--muted-foreground))]/50 m-0">
          &copy; {year} Bliss Armah. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
              className="text-[hsl(var(--muted-foreground))]/50 hover:text-white transition-colors text-sm"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
