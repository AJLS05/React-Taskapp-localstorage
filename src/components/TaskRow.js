export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className='d-flex justify-content-between align-items-center'>
        {task.name}
        <input
          className='form-check-input mt-0'
          type='checkbox'
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}
