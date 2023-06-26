import './Button.css'
type ButonProp={
     color?:string,
     size?:string,
     children:string,
     onClick?:()=>void
}
const Button = ({color,size,children,onClick}:ButonProp) => {
  return (
    <button onClick={onClick} className={['btnn',size,color].join(' ')}><h4>{children}</h4></button>
  )
}

export default Button