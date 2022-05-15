import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import {
  Checkbox,
  IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { DeleteOutlined } from '@mui/icons-material';

export function useTodos() {}

const Todos = ({ item, onRemove, onToggle, offReadOnlyMode, onUpdate }) => {
  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={() => onToggle(item.id)} />
      <ListItemText>
        <InputBase
          inputProps={{
            'aria-label': 'naked',
          }}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => onRemove(item.id)} aria-label="Delete Todo">
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todos;
