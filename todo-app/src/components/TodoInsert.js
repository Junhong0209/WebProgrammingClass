import styled from "styled-components";

const TodoInsert = () => {
  return (
    <TextForm>
      <TextInput
        type='text' 
        name='text'
        placeholder='Hey, input here-'
      />
      <AddButton type='submit'>
        ADD
      </AddButton>
    </TextForm>
  )
}

const TextForm = styled.form`
  text-align: center;
`;

const TextInput = styled.input`
  border: 0px;
  border-bottom: 1px solid #FED384;
  width: 250px;
  height: 30px;
  margin-top: 50px;
`;

const AddButton = styled.button`
  border: 1px solid #FED384;
  background-color: #FED384;
  border-radius: 5px;
  width: 55px;
  height: 30px;
  margin-left: 20px;
`;

export default TodoInsert;