import styled from "@emotion/styled";

const GeustItem = ({ guest, onRemove }) => {
  const { id, userName, content } = guest;

  return (
    <Container key={id}>
      <User>{userName}</User>
      <Text>{content}</Text>
      <Delete>
        <DeleteButton onClick={() => onRemove(id)}>삭제</DeleteButton>
      </Delete>
    </Container>
  )
}

const Container = styled.div``;

const User = styled.span`

`;

const Text = styled.span`
  padding-left: 110px;
`;

const Delete = styled.span`
  position: relative;
  top: -20px;
  padding-left: 400px;
`;

const DeleteButton = styled.button`
`;

export default GeustItem;