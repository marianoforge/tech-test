import { Text } from '@mantine/core';

interface UserDetailProps {
  title: string;
  value: string;
  className?: string;
}

export const UserDetail: React.FC<UserDetailProps> = ({
  title,
  value,
  className,
}) => (
  <Text
    fw={700}
    className={`${className} text-sm md:text-base text-left md:text-left`}
  >
    {title}: <span className="text-pink font-normal">{value}</span>
  </Text>
);
