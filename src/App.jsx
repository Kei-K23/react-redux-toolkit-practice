import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="text-2xl">
      <AddTodo />
      <Todo />
    </div>
  );
};

export default App;
