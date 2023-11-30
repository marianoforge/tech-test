import React from 'react';
import { useRecoilState } from 'recoil';
import { nameFilterState } from '../state/filters';
import { TextInput } from '@mantine/core';

export const NameFilter: React.FC = () => {
  const [nameFilter, setNameFilter] = useRecoilState(nameFilterState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  return (
    <TextInput
      placeholder="Filter by name"
      value={nameFilter}
      onChange={handleChange}
    />
  );
};
