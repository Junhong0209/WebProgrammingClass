import styled from "styled-components";

import TodoTitle from './TodoTitle';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';

const TodoTemplate = () => {
  return (
    <Container>
      <TodoTitle>To Do List</TodoTitle>
      <TodoInsert />
      <TodoItemList />
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  width: 700px;
  margin: auto;
  margin-top: 50px;
  border-radius: 15px;
  height: 850px;
`;

export default TodoTemplate;