// src/hooks/useUsers.ts
import { useQuery } from "react-query";
import { fetchUsers } from "../services/useService";

export const useUsers = (nameFilter: string, nationalityFilter: string[]) => {
  return useQuery(
    ["users", nameFilter, nationalityFilter],
    () => fetchUsers(nameFilter, nationalityFilter),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      retry: 2,
    }
  );
};
