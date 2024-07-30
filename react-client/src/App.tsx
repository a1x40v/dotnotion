import HomePage from './components/pages/home/HomePage';
import LoginPage from './components/pages/login/LoginPage';
import { ThemeProvider } from './components/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
