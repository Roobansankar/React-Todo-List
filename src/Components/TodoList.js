import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './FormTodo';
import { Card } from 'react-bootstrap';
import TodoData from './TodoData';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []); 

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isDone: false }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='text-center mb-4'>TODO LIST</h1>

        <FormTodo addTodo={addTodo} />
        <br></br>

        <div className='todos'>
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body style={{ backgroundColor: 'white' }}>
                <TodoData todo={todo} index={index} markTodo={markTodo} deleteTodo={deleteTodo} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
