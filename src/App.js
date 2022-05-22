import { useCallback, useEffect, useState } from "react";

// react-router components
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import { call } from "./service/ApiService";
import Container from "@mui/material/Container";
import AddTodo from "./components/AddTodo";
import { Paper } from "@mui/material";
import List from "@mui/material/List";
import Todos from "./modules/todos";

export default function App() {
  const { pathname } = useLocation();

  const [items, setItems] = useState([]);

  const queryClient = useQueryClient();

  const saveTodo = useMutation((newTodo) => call("/todo", "POST", newTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const removeTodo = useMutation((id) => call(`/todo/${id}`, "DELETE", null), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items]
  );

  const onToggle = useCallback(
    (id) => {
      setItems(items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
    },
    [items]
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
            : item
        )
      );
    },
    [items]
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
}
