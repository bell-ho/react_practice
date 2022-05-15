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

  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items],
  );

  const onToggle = useCallback(
    (id) => {
      setItems(items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
    },
    [items],
  );

  const onUpdate = useCallback(
    (newItem) => {
      const { id, title } = newItem;
      setItems(
        items.map((item) =>
          item.id === id
            ? {
                ...item,
                readOnly: !item.readOnly,
                title: title,
              }
            : item,
        ),
      );
    },
    [items],
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
                  onUpdate={onUpdate}
                />
              ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
