import React, { useCallback, useState } from 'react';
import { Button, Grid, Paper, TextField } from '@mui/material';

const AddTodo = ({ add }) => {
  const [title, setTitle] = useState('');

  const onInputChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onButtonClick = useCallback(() => {
      add(title);
      setTitle('');
  }, [add, title]);

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField placeholder="gogo" fullWidth onChange={onInputChange} value={title} />
        </Grid>
        <Grid xs={1} md={1} item>
          <Button onClick={onButtonClick} fullWidth color="secondary" variant="outlined">
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;
