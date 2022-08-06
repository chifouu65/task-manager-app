import React, {useState} from "react";
import { Card, Form, Button } from 'react-bootstrap'

const TaskComponent : React.FC<Task> = ({ title, description, id }) => {
    return (
        <>
        <Card className="task-container">
            <Card.Body>{title}</Card.Body>
        </Card>
        </>
    )
}

export default TaskComponent