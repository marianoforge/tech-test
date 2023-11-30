import React from 'react';
import { UserList } from '../components/UserComponents/UserList';
import { NameFilter } from '../components/NameFilter';
import { NationalityFilter } from '../components/NationalityFilter';
import { UserDetails } from '../components/UserComponents/UserDetails';
import { Box, SimpleGrid, Title } from '@mantine/core';
import { LogoComponent } from '../components/LogoComponent';

const Home: React.FC = () => {
  return (
    <>
      <Box className="mt-4 md:mt-8 text-center">
        <Title
          className="text-pink uppercase text-lg md:text-xl lg:text-2xl"
          order={1}
        >
          Elixir's Users List
        </Title>
      </Box>
      <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <NameFilter />
        <NationalityFilter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserList />
        <UserDetails />
      </div>
      <LogoComponent />
    </>
  );
};

export default Home;
