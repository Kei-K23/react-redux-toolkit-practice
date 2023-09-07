import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-center mt-10">Todo lists</h2>
      <ul className="flex justify-center flex-col w-3/4 m-auto mt-6 ">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="flex justify-between items-center mb-4 py-2 px-6 bg-slate-500 text-slate-200"
          >
            <p>
              <span>{index + 1}.</span> {todo.text}
            </p>
            <button
              className="bg-red-600 p-1 rounded-xl ml-4"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
