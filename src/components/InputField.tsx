import React from "react";

import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
// const InputField = ({todo, setTodo}:Props)=>{}
// is another syntax for the same thing
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input-box"
      />
      <button className="input-submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
