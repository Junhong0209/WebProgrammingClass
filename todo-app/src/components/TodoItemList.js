import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoItemList = () => {
  return (
    <List>
      <TodoItem />
    </List>
  )
}

const List = styled.div`
  margin-top: 50px;
`;

export default TodoItemList;