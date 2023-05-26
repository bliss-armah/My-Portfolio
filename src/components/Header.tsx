
interface HeaderName{
    name: string;
    classy: string;
}
const Header = ({name,classy}:HeaderName) => {
  return (
    <div>
         <header className={classy}>
      <div className="section-title">
        <h1>{name}</h1>
        <div className="underline"></div>
      </div>
    </header>
    </div>
  )
}

export default Header