import './App.css';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer>
        <TodoFormContainer></TodoFormContainer>
        {/* FILTER OPTIONS contain Filter Container */}
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
