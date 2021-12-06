import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #435364
  }
`;

export default App;
