import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';

export function useTodos() {
  const dispatch = useDispatch();
  const { todos, input } = useSelector((state) => state.todos);

  const onChangeInput = (input) => {
    dispatch(changeInput(input));
  };
  const onToggle = (id) => {
    dispatch(toggle(id));
  };
  const onRemove = (id) => {
    dispatch(remove(id));
  };
  const onInsert = (text) => {
    dispatch(insert(text));
  };
  return { input, todos, onChangeInput, onToggle, onRemove, onInsert };
}

export const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = () => {
  const { input, todos, onChangeInput, onToggle, onRemove, onInsert } = useTodos();

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} type="text" />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
