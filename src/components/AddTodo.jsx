import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState, useRef } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    formRef.current.reset();
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-20">Add Todo Lists</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col w-1/2 bg-slate-300 p-4 m-auto mt-10"
        ref={formRef}
      >
        <label htmlFor="todo" className="mb-4">
          Enter todo
        </label>
        <input
          className="p-2"
          id="todo"
          type="text"
          placeholder="enter todo"
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <button className="border-2 mt-8 border-black" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
