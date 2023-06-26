import './ButtonAddItm.css'
type propButon={
  theme:'lghit'|'dark',
  onClick?:()=>void
}

const ButtonAddItmes = ({theme,onClick}:propButon) => {
  return (
   <button onClick={onClick} className={['btn',theme].join(' ')}>
     <img src="/src/assets/icon-plus.svg" alt="icoAdd"/> 
     <h4>Add New Itme</h4>
   </button>
  )
}

export default ButtonAddItmes;
