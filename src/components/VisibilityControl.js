export const VisibilityControl = ({ isChecked, setshowCompleted, cleanTask }) => {
  const handleDelete = () => {
    if (window.confirm('Delete it?')) {
      cleanTask()
      setshowCompleted(false)
    }
  }

  return (
    <div className='d-flex justify-content-between align-items-center bg-secondary text-white text-center p-2 border-secondary rounded-top'>
      <div className='form-check form-switch '>
        <input
          name='showCompleted'
          className='form-check-input'
          type='checkbox'
          checked={isChecked}
          onChange={(e) => setshowCompleted(e.target.checked)}
        />
        <label>Show Task Done</label>
      </div>
      <button onClick={handleDelete} className='btn btn-danger btn-sm'>
        Clear
      </button>
    </div>
  )
}
