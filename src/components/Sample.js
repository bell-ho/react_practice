import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, changeInput, insertUsers } from '../modules/sample';

export function useSample() {
  const dispatch = useDispatch();
  const { users, loading, input } = useSelector((state) => state.sample);

  const onChangeInput = (input) => {
    dispatch(changeInput(input));
  };

  const onInsert = (text) => {
    dispatch(insertUsers(text));
  };

  useEffect(() => {
    dispatch(getUsers(1));
  }, [dispatch]);

  return { input, users, loading, onChangeInput, onInsert };
}

const Sample = () => {
  const { input, users, loading, onChangeInput, onInsert } = useSample();

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const onChange = (e) => {
    onChangeInput(e.target.value);
  };

  return (
    <div>
      <h1>사용자</h1>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} type="text" />
        <button type="submit">등록</button>
      </form>
      {loading && '로딩중'}
      {!loading && users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Sample);
