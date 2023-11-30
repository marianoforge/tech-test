import { useQuery } from 'react-query';
import { fetchUsers } from '../services/useService';

export const useUsers = () => {
  return useQuery('users', () => fetchUsers(), {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
  });
};
