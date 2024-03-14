import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row g-3 d-flex align-items-center'>
      <div className='col-8 d-flex justify-content-end'>
        <input
          type='text'
          placeholder='Enter new task'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='col-4 d-flex d-flex justify-content-end'>
        <button className='btn btn-secondary'>Save task</button>
      </div>
    </form>
  )
}
