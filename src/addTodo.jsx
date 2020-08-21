import React from 'react';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from './task'
import initialData from './initial-data'

const TodoList = styled.div`

`


class AddTodo extends React.Component {
        state = initialData

    render() {
        return (
            <TodoList>
                {this.state.columns.taskIds}
                <input placeholder='enter task'></input>
                <button type='submit'>add</button>
            </TodoList>
        );
    }
}

export default AddTodo