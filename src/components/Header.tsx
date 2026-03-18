interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <div className="pt-[68px]">
      <div className="section-container py-16 md:py-24 border-b border-[hsl(var(--border))]">
        <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-3">
          Page
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white capitalize leading-[1.05]">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Header;
