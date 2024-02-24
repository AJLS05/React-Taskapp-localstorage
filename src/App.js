import { useEffect, useState } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { Container } from './components/Container'
import { VisibilityControl } from './components/VisibilityControl'

function App () {
  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setshowCompleted] = useState(false)

  function createNewTask (taskName) {
    if (!Array.from(taskItems).find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const toggleTask = task => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    )
  }

  return (
    <main className='bg-dark vh-100 text-white'>
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} doneValue={false} />
        <VisibilityControl
          isChecked={showCompleted}
          setshowCompleted={(checked) => setshowCompleted(checked)}
          cleanTask={cleanTask}
        />
        {
          showCompleted === true && (
            <TaskTable
              tasks={taskItems}
              toggleTask={toggleTask}
              doneValue
            />
          )
        }
      </Container>
    </main>
  )
}

export default App
