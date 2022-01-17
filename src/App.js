import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import DummyPage from './pages/DummyPage';
import Layout from './components/ui/Layout';

import { pages } from './config/pageConfig';
import { theme } from './components/ui/Theme';

function App() {
  const pageRoutes = pages.map((page) => {
    return (
      <Route
        key={page.title}
        exact
        path={page.path}
        element={<DummyPage text={page.title} />}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>{pageRoutes}</Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
