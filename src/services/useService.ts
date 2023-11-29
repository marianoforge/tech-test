const BASE_URL = "https://randomuser.me/api/";

export const fetchUsers = async (
  nameFilter: string,
  nationalityFilter: string[]
) => {
  const apiUrl = new URL("https://randomuser.me/api/");
  apiUrl.searchParams.append("results", "20");

  if (nameFilter) {
    apiUrl.searchParams.append("name", nameFilter);
  }
  if (nationalityFilter.length > 0) {
    apiUrl.searchParams.append("nat", nationalityFilter.join(","));
  }

  try {
    const response = await fetch(apiUrl.toString());
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
