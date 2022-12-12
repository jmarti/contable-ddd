import {useCallback, useState} from 'react'
import './App.css'
import {MyExpensesState} from 'presentation/expenses/ExpensesState';

let state = new MyExpensesState();

function UI() {
    const [, updateState] = useState({});
    const forceUpdate = useCallback(() => updateState({}), []);

    state.subscribe(forceUpdate);

    let [newExpenseName, setNewExpenseName] = useState("");

    return (<>
        <ul>
            {state.expenses.map((expense, index) => {
                return <li key={index}>{expense.description}</li>
            })}
        </ul>

        <input type="text" value={newExpenseName} onChange={(e) => setNewExpenseName(e.target.value)} />
        <button onClick={(e) => state.addExpense(newExpenseName)}>Add</button>
    </>)
}

function App() {
    const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UI />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
