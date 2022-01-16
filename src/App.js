import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import DummyPage from './pages/DummyPage';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';

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
        <Header />
        <Routes>{pageRoutes}</Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
