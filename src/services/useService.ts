export const fetchUsers = async () => {
  const apiUrl = new URL('https://randomuser.me/api/');
  apiUrl.searchParams.append('results', '20');

  try {
    const response = await fetch(apiUrl.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
