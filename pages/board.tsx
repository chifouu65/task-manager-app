import React, {useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Row } from 'react-bootstrap'
import BoardSection from '../components/BoardSection';
import { Task } from '../graphql/types';

const AllTasksQuery = gql `
    query {
        tasks {
            id
            title
            description
            status
        }
    }
`
const Board = () => {
    const { data, loading, error } = useQuery(AllTasksQuery, {
        onCompleted: data =>{
            console.log(data);
        }
    })

    const sections: Array<String> = ['Backlog', 'In-Progress', 'Review', 'Done'];

    if(loading) return <p>Loading. . .</p>
    if(error) return <p>Error</p>

    return (
        <div className='pt-3 h-100 d-flex flex-column'>
            <Row>
                <h1>Project Title</h1>
            </Row>

            <div className="board-container d-flex flex-row flex-grow-1">
                { sections.map((section: String, index: number) => {
                    let filteredData: Array<Task> = data ? data.tasks.filter((task: Task) => {return task.status === section}) : []
                    return (
                        <BoardSection
                        title='BackLog'
                        tasks={filteredData}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Board;