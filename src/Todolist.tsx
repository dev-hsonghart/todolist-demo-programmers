import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Timer';

type Todo = {
  id: number;
  item: string;
  isChecked: boolean;
};

const Todolist: React.FC = () => {
  const title: string = '오늘 할일';
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      item: '개발 공부',
      isChecked: false,
    },
    {
      id: 2,
      item: '물마시기',
      isChecked: false,
    },
    { id: 3, item: '밥먹기', isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>('');
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item,
      );
    });
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      // 아무것도 입력안하고 동작하는 것을 방지
      setTodos([...todos, { id: Date.now(), item: newTodo, isChecked: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (itemId: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== itemId)); // 삭제하려는 id는 제외하고 새로운 배열로 만들어라.
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="App-content">
      <h1>{title}</h1>
      <div>
        <input
          type="text"
          placeholder="할일을 입력해주세요"
          className="input"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />

        <Button
          variant="primary"
          onClick={() => {
            addTodo();
          }}
        >
          추가하기
        </Button>
      </div>
      <ul className="board">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheckedChange(todo.id);
              }}
            />
            <span onClick={() => handleTodoClick(todo)}>
              {todo.isChecked === true ? (
                <del>{todo.item}</del>
              ) : (
                <span> {todo.item}</span>
              )}
            </span>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => removeTodo(todo.id)}
            >
              삭제
            </Button>
          </li>
        ))}
      </ul>
      <Clock></Clock>
    </div>
  );
};

export default Todolist;
