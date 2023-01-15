import React from 'react'
import Header from './components/Header'
import {Task} from './components/task/task'
import {Tasks} from './components/Tasks'
import './styles/global.css'
export interface Itask{
  title:string,
  isCompleted:boolean,
  id:number
}
const App = () => {
  const [tasks,setTasks] = React.useState<Itask[]>([
  ]   
)

console.log(tasks);
  function addTask(taskTitle:string){
    setTasks([...tasks,{
      id:+Math.random(),
      title:taskTitle,
      isCompleted:false
    }])
  }

  function deleteTaskById(taskId:number){
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  function toggleTaskCompletedById(taskId:number){
    const newTasks = tasks.map((task)=>{
      if(task.id == taskId){
        return{
          ...task,
          isCompleted:!task.isCompleted
        }
      }
      return task;
    }
  )
  setTasks(newTasks)
}
  return (
    <>
      
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById}/>

    </>
  )
}

export default App