import { TaskRow } from "./TaskRow.js";

export const TaskTable = ({tasks, toggleTask, doneValue}) => {

    const taskTableRows = (doneValue) => {
      return(
        Array.from(tasks)
        .filter(task => task.done === doneValue)
        .map((task) => {
            return(
                <TaskRow task={task} name={task.name} toggleTask={toggleTask}/>
            );
        }) 
      )
    }

    return(
        <table className="table table-dark table-stripped table-bordered bordered-secondary">
      <thead>
        <tr className="table-primary ">
          <th>
            Tasks            
          </th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(doneValue)
        }
      </tbody>
    </table>
    )
}