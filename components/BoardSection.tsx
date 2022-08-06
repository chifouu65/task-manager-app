import { from } from "@apollo/client";
import React, { useState } from "react";
import TaskComponent from './TaskComponent';
import { Col, Button, Card, Form, Container } from 'react-bootstrap';
import { Task } from "../graphql/types";

interface BooardSectionProps {
    title: String
    tasks: Array<Task>
}

const BoardSection : React.FC<BooardSectionProps> = ({ title, tasks }) => {
    return (
        <>
        <Col md={3} className="d-flex flex-colum p-2">
            <div className="board-section-header d-flex flex-row align-item-center">
                <h3 className="me-auto">{title}</h3>
                <i className="fa-solid fa-plus"></i>
            </div>
            <Container className="p-0 d-flex flex-column h-100">
                {tasks  &&
                    tasks.map((task: Task, index: number) => {
                        return (
                            <TaskComponent
                            title={task.title}
                            description={task.description}
                            id={task.id}
                            key={task.id}
                            />
                        )
                    })}

                    {tasks.length > 0 &&
                    <Button className="add-wrapper">
                        <i className="fa-solid fa-plus">Add Task</i>
                    </Button>}
            </Container>
        </Col>
        </>
    )
}

export default BoardSection