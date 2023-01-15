import React from 'react'
import styles from './header.module.css'
import todoLogo from '../../assets/todoLogo.svg'
import vector from "../../assets/vector.svg";
import {BiPlusCircle} from 'react-icons/bi'

interface Props{
  onAddTask: (taskTitle:string)=> void
}
const Header = ({onAddTask}:Props) => {
  const [title,setTitle] = React.useState('')
function onChangeTitle(event:React.ChangeEvent<HTMLInputElement>){
  setTitle(event.target.value)
}
 function handleSubmit(event: any){
  event.preventDefault()
  if(title!=='')
  onAddTask(title)
  setTitle('')
 }
  return (
    <header className={styles.header}>  
      <img src={todoLogo}/>
      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Adicione uma nova tarefa'      
          value={title}
          onChange={onChangeTitle}
          
        />
          <button >
            <p>Criar</p> 
            <BiPlusCircle size={20}/>
          </button>
      </form>
    </header>
  )
}

export default Header