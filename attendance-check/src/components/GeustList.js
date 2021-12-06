import GeustItem from "./GuestItem";
import styled from '@emotion/styled';
import { useEffect } from "react";

const GeustList = ({ guests, onRemove }) => {
  useEffect(() => {
    console.log(guests);
  }, [guests]);

  return (
    <Container>
      <Title>
        <User>작성자</User>
        <Text>내용</Text>
      </Title>
      {
        guests && guests.map((guest) => (
          <GeustItem 
            key={guest.id}
            guest={guest}
            onRemove={onRemove} 
          />
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  margin-left: 80px;
`;

const Title = styled.div`
  margin-bottom: 40px;
`;

const User = styled.span`
  font-size: 24px;
`;

const Text = styled.span`
  font-size: 24px;
  padding-left: 100px;
`;

export default GeustList;