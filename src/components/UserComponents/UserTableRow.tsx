import { Button, Table } from '@mantine/core';
import { User } from '../../types/UserTypes';

interface UserTableRowProps {
  user: User;
  onClick: () => void;
}

export const UserTableRow: React.FC<UserTableRowProps> = ({
  user,
  onClick,
}) => {
  const { name, email, nat, id } = user;

  return (
    <Table.Tr key={id.value}>
      <Table.Td className="whitespace-nowrap overflow-ellipsis overflow-hidden">
        {`${name.first} ${name.last}`}
      </Table.Td>
      <Table.Td className="hidden sm:table-cell">{email}</Table.Td>
      <Table.Td>{nat}</Table.Td>
      <Table.Td>
        <Button
          variant="filled"
          size="compact-sm"
          onClick={onClick}
          color="violet"
          className="text-xs sm:text-sm"
        >
          View Details
        </Button>
      </Table.Td>
    </Table.Tr>
  );
};

export default UserTableRow;
