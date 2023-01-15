import React, { ReactHTMLElement } from 'react'
import styles from './task.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Itask } from '../../App'
import { Tasks } from '../Tasks'

interface Props {
  task: Itask;
  onDelete: (taskId:number) => void;
  onComplete:(taskId:number) => void;
}
export  function Task({task,onDelete,onComplete}:Props) {
  const [check, setCheck] = React.useState(false)
  const [completed, setCompleted] = React.useState(task.isCompleted)
  
return (
<div className={styles.containerGeral}>      
    <div onClick={()=>onComplete(task.id)}>
      {task.isCompleted?
        <div 
          onClick={()=>onComplete(task.id)} className={styles.Teste}>
          <AiFillCheckCircle className={styles.checkedIcon} size={20}/>
        </div>
        :
        <div className={styles.divCheck}  style={{border:task.isCompleted ?'':'2px solid blue'}}> 
        </div>}
    </div> 

    {task.isCompleted?
      <p className={styles.taskCompleted}>{task.title}</p>
      :
      <p>{task.title}</p>
    }
    
    <BsTrash size={"1.2rem"} onClick={()=> onDelete(task.id)}/>
</div>

)
}

export default Task