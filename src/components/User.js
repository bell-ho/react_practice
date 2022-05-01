import React from 'react';
import { useQuery } from 'react-query';

export function useUser() {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
  );
}

const User = () => {
  return <div></div>;
};

export default User;
