import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { nameFilterState, nationalityFilterState } from '../../state/filters';
import { Table, Text, Paper, Box, Loader } from '@mantine/core';
import {
  selectedUserState,
  userDetailsVisibilityState,
} from '../../state/selectedUserState';
import UserTableRow from './UserTableRow';
import { User } from '../../types/UserTypes';
import { useUsers } from '../../hooks/useUsers';

export const UserList: React.FC = () => {
  const setSelectedUser = useSetRecoilState(selectedUserState);
  const setIsDetailsVisible = useSetRecoilState(userDetailsVisibilityState);

  const nameFilter = useRecoilValue(nameFilterState);
  const nationalityFilter = useRecoilValue(nationalityFilterState);

  // Fetch all users without filters
  const { data: users, isLoading, isError, error } = useUsers();

  // Client-side filtering
  const filteredUsers = users?.filter((user: User) => {
    const fullName = `${user.name.first} ${user.name.last}`;
    const matchesName = nameFilter
      ? fullName.toLowerCase().includes(nameFilter.toLowerCase())
      : true;
    const matchesNationality = nationalityFilter.length
      ? nationalityFilter.includes(user.nat)
      : true;

    return matchesName && matchesNationality;
  });

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    setIsDetailsVisible(true);
  };

  if (isError && error instanceof Error) {
    return (
      <Text className="text-red" size="md">
        Error: {error.message}
      </Text>
    );
  }

  return (
    <>
      <Box className="mt-4 md:mt-12">
        <Paper withBorder shadow="sm" p="2 md:p-4">
          {isLoading ? (
            <Box className="flex flex-row justify-center">
              <Loader color="blue" />
            </Box>
          ) : (
            <Table striped highlightOnHover>
              <Table.Thead color="ocean-blue">
                <Table.Tr>
                  <Table.Th className="hidden sm:table-cell">Name</Table.Th>
                  <Table.Th className="hidden sm:table-cell">Email</Table.Th>
                  <Table.Th className="hidden sm:table-cell">
                    Nationality
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {filteredUsers?.map((user: User) => (
                  <UserTableRow
                    key={user.login.uuid}
                    user={user}
                    onClick={() => handleRowClick(user)}
                  />
                ))}
              </Table.Tbody>
            </Table>
          )}
        </Paper>
      </Box>
    </>
  );
};
