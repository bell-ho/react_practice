import { useCallback, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { call, signout } from "./service/ApiService";
import Container from "@mui/material/Container";
import AddTodo from "./components/AddTodo";
import { AppBar, Button, Grid, Paper, Toolbar, Typography } from "@mui/material";
import List from "@mui/material/List";
import Todos from "./components/Todos";

export default function App() {
  const getTodos = async () => {
    const todos = await call("/todo", "GET", null);
    return todos;
  };

  const [items, setItems] = useState([]);
  const { isLoading, isError, data, error } = useQuery("todos", getTodos, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      setItems(data.data);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const queryClient = useQueryClient();

  const saveTodo = useMutation((newTodo) => call("/todo", "POST", newTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const add = useCallback(
    async (title) => {
      let item = {
        id: "ID-" + items.length,
        title,
        done: false,
      };
      await saveTodo.mutate(item);
    },
    [saveTodo]
  );

  const removeTodo = useMutation((id) => call(`/todo/${id}`, "DELETE", null), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const onRemove = useCallback(
    async (id) => {
      await removeTodo.mutate(id);
    },
    [removeTodo]
  );

  const toggleTodo = useMutation((updateTodo) => call(`/todo`, "PUT", updateTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onToggle = useCallback(
    async (item) => {
      let updateItem = {
        id: item.id,
        title: item.title,
        done: !item.done,
      };
      await toggleTodo.mutate(updateItem);
    },
    [toggleTodo]
  );

  const nav = (
    <AppBar position="static">
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item>
            <Typography variant="h6">할 일</Typography>
          </Grid>
          <Grid>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <div className="App">
          {nav}
          <Container maxWidth="md">
            <AddTodo add={add} />
            <Paper style={{ margin: 16 }}>
              {items.map((item, idx) => (
                <List>
                  <Todos item={item} key={idx} onRemove={onRemove} onToggle={onToggle} />
                </List>
              ))}
            </Paper>
          </Container>
        </div>
      )}
    </>
  );
}
