import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import BankAccount from './BankAccount';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <Counter></Counter><br></br>
      <BankAccount></BankAccount><br></br>
      <Todo></Todo>
    </div>
  );
}

export default App;
