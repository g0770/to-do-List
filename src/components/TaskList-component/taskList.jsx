import React from "react";
import TaskItem from '../TaskItem-component/taskItem'
import './taskList.css'

const TaskList = ({tasks}) => {
    return (
        <div className="notitas notaNueva">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}
export default TaskList