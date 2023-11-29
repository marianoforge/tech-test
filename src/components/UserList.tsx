import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useUsers } from "../hooks/useUsers";
import { nameFilterState, nationalityFilterState } from "../state/filters";
import { Table, Text, Paper, Skeleton, Box } from "@mantine/core";

import { selectedUserState } from "../state/selectedUserState";
import UserTableRow from "./UserTableRow";
import { User } from "../types/UserTypes";

const UserList: React.FC = () => {
  const setSelectedUser = useSetRecoilState(selectedUserState);
  const nameFilter = useRecoilValue(nameFilterState);
  const nationalityFilter = useRecoilValue(nationalityFilterState);
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useUsers(nameFilter, nationalityFilter);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError && error instanceof Error) {
    return (
      <Text className="text-red" size="md">
        Error: {error.message}
      </Text>
    );
  }

  console.log(users);

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Box className="mt-12">
        <Paper withBorder shadow="sm" p="md">
          <Table striped highlightOnHover>
            <Table.Thead color="ocean-blue">
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Nationality</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {users?.map((user: User) => (
                <UserTableRow
                  user={user}
                  onClick={() => handleRowClick(user)}
                />
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Box>
    </>
  );
};

export default UserList;
