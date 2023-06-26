import './ButtonAdd.css'
type ButtonAddProp={
     size:'larg'|'small',
     onClick?:()=>void
}
const ButtonAdd = ({size,onClick}:ButtonAddProp) => {
  return (
    <button onClick={onClick} className={['btnAdd',size].join(' ')}>
     <div><img src="/src/assets/icon-plus.svg"alt="addIcon"/></div>
     <h4>&nbsp;New<h4 style={{display:`${size ==='small'?'none':'flex'}`}}>&nbsp;Invoice</h4></h4>
    </button>
  )
}

export default ButtonAdd