import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, MantineProvider, createTheme } from '@mantine/core';

import { RecoilRoot } from 'recoil';

import '@mantine/core/styles.css';
import Home from './pages/Home';

const queryClient = new QueryClient();

export const theme = createTheme({
  fontFamily: 'Sora',
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Container fluid w={1500}>
            <Home />
          </Container>
        </RecoilRoot>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
