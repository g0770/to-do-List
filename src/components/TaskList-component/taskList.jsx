import React from "react";
import TaskItem from '../TaskItem-component/taskItem'
import './taskList.css'

const TaskList = ({tasks,deleteTask}) => {
    return (

        tasks.map(task => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask}/>
        ))

    );
}
export default TaskList