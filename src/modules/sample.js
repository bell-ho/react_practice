import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

const CHANGE_INPUT = 'sample/CHANGE_INPUT';
const CHANGE_INPUT_SUCCESS = 'sample/CHANGE_INPUT_SUCCESS';

const INSERT_USERS = 'sample/INSERT_USERS';
const INSERT_USERS_SUCCESS = 'sample/INSERT_USERS_SUCCESS';

export const getUsers = createAction(GET_USERS);

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 100;
export const insertUsers = createAction(INSERT_USERS, (username) => ({
  id: id++,
  username: username,
}));

const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);
const changeInputSaga = createRequestSaga(CHANGE_INPUT);
const insertUsersSaga = createRequestSaga(INSERT_USERS);

export function* sampleSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
  yield takeLatest(INSERT_USERS, insertUsersSaga);
  yield takeLatest(CHANGE_INPUT, changeInputSaga);
}

const initialState = {
  users: null,
  input: '',
};

const sample = handleActions(
  {
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    [CHANGE_INPUT_SUCCESS]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [INSERT_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: state.users.concat(action.payload),
    }),
  },
  initialState,
);

export default sample;
