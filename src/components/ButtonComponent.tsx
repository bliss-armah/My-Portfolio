
interface buttonProp{
    name: string
    styleAdd ?: string
}
const ButtonComponent = ({name,styleAdd} : buttonProp) => {
  return (
        <div className={`btn ${styleAdd}`}>{name}</div>
  )
}

export default ButtonComponent