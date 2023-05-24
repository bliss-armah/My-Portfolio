
interface HeaderName{
    name: string;
}
const Header = ({name}:HeaderName) => {
  return (
    <div>
         <header className="projects-hero">
      <div className="section-title">
        <h1>{name}</h1>
        <div className="underline"></div>
      </div>
    </header>
    </div>
  )
}

export default Header