import './sass/app.css';
import {useState} from "react";
import {FaTrashCan} from "react-icons/fa6";
import {FaCheck} from "react-icons/fa";
let id:number = 0;

export default function App() {
    const [Todos, setTodos] = useState([]);
    const [Input, setInput] = useState("");

    function createNewTodo() {
        const td = {
            key: id++,
            todo: Input,
        }

        if(!Input.trim()) return;

        setTodos([...Todos, td]);
        setInput("");
    }

    function remTodo(id:number) {
        const a = Todos.filter(todo => todo.key !== id);
        setTodos(a);
    }

    return (
    <main>
      <div className="Todo">
        <h1>Todos</h1>
        <div className="Add">
          <input
              value={Input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What you want to do ?"/>
          <button onClick={createNewTodo}>Add</button>
        </div>
          <div className="List">
              <ul>
                  {
                      Todos.map((todo) => {
                          return (
                              <li key={todo.key}>
                                  <span className="Delete">
                                      <button onClick={() => {
                                          remTodo(todo.key)
                                      }}><FaTrashCan/></button>
                                  </span>
                                  <p>{todo.todo}</p>
                              </li>
                          );
                      })
                  }
              </ul>
          </div>
      </div>
    </main>
  )
}


