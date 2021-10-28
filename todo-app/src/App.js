import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInput />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
