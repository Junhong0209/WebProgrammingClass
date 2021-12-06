import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

const GeustInput = (props) => {
  const [userName, onChangeUserName] = useState('');
  const [content, onChangeContent] = useState('');
  const ref = useRef();

  const handleNameChange = (e) => {
    onChangeUserName(e.target.value);
  }

  const handleContentChange = (e) => {
    onChangeContent(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !content) return;
    props.onSubmit(userName, content);
    onChangeContent('');
    onChangeUserName('');
  }

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Container>
      <Insert>
        <span>작성자</span>
        <input 
          placeholder='작성자 이름을 넣어주세요'
          type="text"
          name="userName"
          value={userName}
          onChange={handleNameChange}
          ref={ref}
        />
      </Insert>
      <Insert className='content'>
        <Content>내용</Content>
        <input 
          placeholder='내용을 입력해주세요'
          type='text'
          name='content'
          value={content} 
          onChange={handleContentChange}
          ref={ref}
        />
      </Insert>
      <SubmitButton 
        type='submit' 
        onClick={handleSubmit} 
        onKeyPress={handleKeyPress}
      >
        추가
      </SubmitButton>
    </Container>
  )
}

const Container = styled.form`
  margin-left: 80px;
  margin-top: 40px;
`;

const Insert = styled.div`
  margin-bottom: 20px;

  input {
    border: 1px solid #000;
    margin-left: 30px;
    width: 400px;
  }
`;

const Content = styled.span`
  vertical-align: top;
  margin-right: 15px;
`;

const SubmitButton = styled.button`
  position: relative;
  top: -41px;
  right: -520px;
`;

export default GeustInput;