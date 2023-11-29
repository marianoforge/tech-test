import React from "react";
import UserList from "../components/UserList";
import NameFilter from "../components/NameFilter";
import NationalityFilter from "../components/NationalityFilter";
import UserDetails from "../components/UserDetails";
import { Box, SimpleGrid, Title } from "@mantine/core";
import LogoComponent from "../components/LogoComponent";

const Home: React.FC = () => {
  return (
    <>
      <Box className="mt-8 text-center">
        <Title className="text-pink uppercase" order={1}>
          Elixir's Users List
        </Title>
      </Box>
      <SimpleGrid cols={2} className="mt-12">
        <NameFilter />
        <NationalityFilter />
      </SimpleGrid>
      <SimpleGrid cols={2}>
        <UserList />
        <UserDetails />
      </SimpleGrid>
      <LogoComponent />
    </>
  );
};

export default Home;
