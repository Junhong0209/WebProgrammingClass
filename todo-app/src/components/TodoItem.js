import styled from "styled-components";
import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from "react";

const TodoItem = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('asdf');

  return (
    <Container>
      <DoneButton>
        {checked ? AiOutlineCheck : null}
      </DoneButton>
      <Topic
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? '#ccc' : '#000'
        }}
      >
        {text}
      </Topic>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 5px;
  border: 2px solid #A7A7A7;
  width: 500px;
  margin: 0 auto;
  background-color: #F4F4F4;
`;

const DoneButton = styled.div``;

const Topic = styled.div``;

export default TodoItem;