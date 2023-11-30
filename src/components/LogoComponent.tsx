import { Image } from '@mantine/core';
import elixirLogo from '../assets/logo.svg';

export const LogoComponent: React.FC = () => {
  return (
    <div className="flex justify-end mt-4">
      <Image src={elixirLogo} h={50} w={'auto'} />
    </div>
  );
};
