import React from 'react';
import { Box, Paper, Title, Text, Image } from '@mantine/core';
import { UserDetail } from './UserDetail';
import useUserDetails from '../../hooks/useSelectedUserDetails';
import { useRecoilValue } from 'recoil';
import { userDetailsVisibilityState } from '../../state/selectedUserState';

export const UserDetails: React.FC = () => {
  const isDetailsVisible = useRecoilValue(userDetailsVisibilityState);
  const { userDetails, userImage, userFullName, errorMessage } =
    useUserDetails();

  return (
    <>
      <Box className="mt-4 md:mt-12">
        <Paper withBorder shadow="sm" p="md">
          <Title
            className="text-pink uppercase text-center text-lg md:text-xl"
            order={2}
          >
            User Details
          </Title>
        </Paper>

        <Paper
          withBorder
          shadow="sm"
          p="md"
          className={`mt-2 transition-opacity duration-700 ${
            isDetailsVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {errorMessage && (
            <Text color="red" className="text-center">
              Error retrieving user details. Please try again later.
            </Text>
          )}
          {!userDetails ? (
            <Text className="text-center">
              Please select a user from the list to see the details.
            </Text>
          ) : (
            <>
              <Box className="flex flex-col md:flex-row justify-center gap-6 items-center text-pink mt-4">
                <Image
                  src={userImage}
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                  alt="user image"
                  radius="md"
                />
                <Title>{userFullName}</Title>
              </Box>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {userDetails.map((detail: any) => (
                  <UserDetail
                    key={detail.title}
                    title={detail.title}
                    value={detail.value}
                  />
                ))}
              </div>
            </>
          )}
        </Paper>
      </Box>
    </>
  );
};
