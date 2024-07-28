import HomePage from './components/pages/home/HomePage';
import { ThemeProvider } from './components/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
