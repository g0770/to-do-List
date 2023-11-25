import React from "react";
import TaskItem from '../TaskItem-component/taskItem'
import './taskList.css'

const TaskList = ({tasks}) => {
    return (

        tasks.map(task => (
            <TaskItem key={task.id} task={task} />
        ))

    );
}
export default TaskList