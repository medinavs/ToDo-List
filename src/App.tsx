
import { Header } from './componentes/Header'

import styles from './App.module.css'
import './global.css'
import { Input } from './componentes/Input'
import { HeaderList } from './componentes/TaskList/HeaderList'
import { EmptyList } from './componentes/TaskList/EmptyList'

import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import { Tasks } from './componentes/Task'
import  Button  from './componentes/Button'
import { PlusCircle } from '@phosphor-icons/react'


export interface ITaskProps {
  id: string
  text: string
  isComplete: boolean
}

export function App() {

  const [tasks, setTasks] = useState<ITaskProps[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCount = tasks.reduce((acc, task) => {
    if (task.isComplete) {
      return acc + 1
    }

    return acc
  }, 0)


  function handleCreateNewTask() {
    if (!inputValue){
      return;
    }

    const newTask: ITaskProps = {
      id: uuidv4(),
      text: inputValue,
      isComplete: false
    }

    setTasks((task) => [...task, newTask])

    setInputValue('')
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks);
  }

  function handleCheckTask({id, value}: {id: string; value: boolean}) {
    const checkedTasks: ITaskProps[] = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: value
        }
      }
  
      return task;
    })
  
    setTasks(checkedTasks)
  }


  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.inputContainer}>
          
          <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          />

          <Button onClick={handleCreateNewTask} >
          Criar
          <PlusCircle size={16}/> 
          </Button>
        </div>
        
        <div className={styles.tasksList}>
          <HeaderList
          tasksCount={tasks.length}
          completedTasks={checkedTasksCount}
          />

        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => (
              <Tasks 
              key={task.id} 
              value={task}
              removeTask={handleRemoveTask}
              checkTask={handleCheckTask}
              />
            ))}
          </div>
        ) : (
          <EmptyList />
        )}
        </div>
        </div>
      </div>

  )
}
