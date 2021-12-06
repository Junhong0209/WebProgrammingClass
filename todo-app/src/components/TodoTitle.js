import styled from "styled-components";

const TodoTitle = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 32px;
  color: #FED384;
  font-weight: bold;
`;

export default TodoTitle;