import React, { useCallback, useEffect, useState } from 'react';
import Sample from './components/Sample';

import Todos from './components/Todos';
import { Container, List, Paper } from '@mui/material';
import AddTodo from './components/AddTodo';
import { call } from './service/ApiService';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';

export function useTodos() {
  const getTodos = async () => {
    const todos = await call('/todo', 'GET', null);
    return todos;
  };

  useEffect(() => {
    getTodos();
  });
  const query = useQuery('todos', getTodos);

  return { query };
}

const App = () => {
  const { query } = useTodos();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!query.isLoading) {
      setItems(query.data.data);
    }
  });

  const queryClient = useQueryClient();
  const saveTodo = useMutation((newTodo) => call('/todo', 'POST', newTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const add = useCallback(
    async (title) => {
      let item = {
        id: 'ID-' + items.length,
        title,
        done: false,
      };
      await saveTodo.mutate(item);
    },
    [saveTodo],
  );

  const removeTodo = useMutation((id) => call(`/todo/${id}`, 'DELETE', null), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const onRemove = useCallback(
    async (id) => {
      await removeTodo.mutate(id);
    },
    [removeTodo],
  );

  const toggleTodo = useMutation((data) => call(`/todo`, 'PUT', data), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const onToggle = useCallback(
    async (id) => {
      let data = items.find((item) => item.id === id);
      data.done = !data.done;
      await toggleTodo.mutate(data);
    },
    [toggleTodo],
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={add} />
        <Paper style={{ margin: 16 }}>
          <List>
            {!query.isLoading &&
              items.map((item, idx) => (
                <Todos
                  item={item}
                  key={idx}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
