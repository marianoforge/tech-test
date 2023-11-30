import { Image } from '@mantine/core';
import elixirLogo from '../assets/logo.svg';

export const LogoComponent: React.FC = () => {
  return (
    <div className="flex md:justify-end mt-2 sm:mt-4 justify-center pb-6">
      <Image src={elixirLogo} className="h-12 sm:h-14 md:h-16" w={'auto'} />
    </div>
  );
};
