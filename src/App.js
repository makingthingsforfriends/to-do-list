import "./App.css";

function App() {
  const toDos = [
    { type: "task", title: "do homework", completed: false },
    { type: "task", title: "make dinner", completed: false },
    {
      type: "list",
      tasks: [
        { type: "task", title: "chop potatoes", completed: false },
        { type: "task", title: "wash tomatoes", completed: false },
        { type: "task", title: "bake veggies", completed: false },
        {
          type: "list",
          tasks: [
            { type: "task", title: "30 min potatoes", completed: false },
            { type: "task", title: "heat leftovers", completed: false },
          ],
        },
      ],
    },
    { type: "task", title: "wash dishes", completed: false },
  ];

  function renderToDos(toDos) {
    const toDoTree = toDos.map((task) => {
      if (task.type === "task") {
        return (
          <div className="list-toDo">
            <span className="title">{task.title}</span>
          </div>
        );
      } else {
        return <div className="list">{renderToDos(task.tasks)}</div>;
      }
    });
    return <div className="list">{toDoTree}</div>;
  }

  return (
    <div className="App">
      <h1>All my to-dos</h1>
      {renderToDos(toDos)}
    </div>
  );
}

export default App;
