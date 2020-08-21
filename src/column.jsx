import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";
import AddTodo from "./addTodo";
import "./column.css";

const Container = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  width: 300px;
  height: 400px;
  margin: 8px;
  border-radius: 10px;
  background-color: #ffffff61;
  background-repeat: no-repeat;
  background-size: 600px;
`;

const Title = styled.h3`
  padding: 8px;
  color: black;
`;

const TaskList = styled.div`
  padding: 28px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isDraggingOver ? "white" : "#ffffff3b"};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    const { column } = this.props;

    return (
      <Container>
        {column.id === "column-1" && <AddTodo />}
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
