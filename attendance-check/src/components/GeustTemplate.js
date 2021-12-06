import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import GeustInput from './GeustInput';
import GeustList from './GeustList';

const GeustTemplate = () => {
  const [guests, setGuests] = useState([]);

  const nextId = useRef(2);

  const handleSubmit = (userName, content) => {
    const guest = {
      id: nextId.current,
      userName,
      content
    };
    setGuests(guests.concat(guest));
    nextId.current += 1;
  }

  const onRemove = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  }

  return (
    <Container>
      <GeustInput onSubmit={handleSubmit} />
      <GeustList guests={guests} onRemove={onRemove} />
    </Container>
  )
}

const Container = styled.div`
  width: 700px;
  height: 800px;
  border: 1px solid #040404;
  margin: 0 auto;
  margin-top: 60px;
`;

export default GeustTemplate;