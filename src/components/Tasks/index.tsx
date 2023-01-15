import React from 'react'
import styles from './tasks.module.css'
import {HiOutlineClipboardList} from 'react-icons/hi'
import { Itask } from '../../App'
import {Task} from '../task/task'
import { BsTropicalStorm } from 'react-icons/bs'

interface Props {
  tasks:Itask[];
  onDelete: (taskId:number) => void;
  onComplete:(taskId:number) => void;
}
  export function Tasks({tasks,onDelete,onComplete}:Props) {
  const taskQuantity = tasks.length
  const completedTasks = tasks.filter((task)=> task.isCompleted).length
  return (
  <div className={styles.containerGeral}>
    <div className={styles.container}> 
        <p>
          Tarefas criadas<span>{taskQuantity}</span>
        </p>
        <p>
          Concluídas <span>{completedTasks} de {taskQuantity}</span>
        </p>             
    </div>
    <hr/>
      { taskQuantity==0
      ?
      <div className={styles.noTasks}>
        <HiOutlineClipboardList size={56}/>
        <p>
          Você ainda não tem tarefas cadastradas
        </p>
        <p>
          Crie tarefas e organize seus itens a fazer
        </p> 
      </div>:null }
         
      {tasks.map((task)=>(
        <Task onDelete={onDelete} 
        key={task.id}
        task={task}
        onComplete={onComplete}
        />
      ))}
  </div> 
)
}
