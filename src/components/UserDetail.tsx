import { Text } from "@mantine/core";

interface UserDetailProps {
  title: string;
  value: string;
  className?: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ title, value, className }) => (
  <Text fw={700} className={className}>
    {title}: <span className="text-pink font-normal">{value}</span>
  </Text>
);

export default UserDetail;
