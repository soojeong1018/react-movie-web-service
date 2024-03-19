import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const onChange = (event) => setToDo(event.target.value);
    const [toDos, setToDos] = useState([]);
    const onSubmit = (event) => {
      event.preventDefault();
      if (toDo === "") {
          return;
      }

      setToDos(currentArr => [toDo, ...currentArr]);
      setToDo("");
    };
    console.log(toDos);

    return (
        <div>
            <h1>Todos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    value={toDo}
                    placeholder="Write your to do..."/>
                <button>Add To Do</button>
            </form>
        </div>
    );
}

export default App;
