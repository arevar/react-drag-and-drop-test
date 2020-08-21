import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  width: 200px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 8px;
  /* color: black; */
  background-color: ${(props) => (props.isDragging ? "#ffffffb3" : "white")};
`;

const Handle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: #ff8c8c;
  margin-right: 8px;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provided.dragHandleProps} />
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
