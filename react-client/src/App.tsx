import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './components/pages/home/HomePage';
import LoginPage from './components/pages/login/LoginPage';
import { ThemeProvider } from './components/ThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePageLayout from './components/pages/home/HomePageLayout';
import SignUpForm from './components/pages/signup/SignUpForm';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomePageLayout>
        <HomePage />
      </HomePageLayout>
    ),
  },
  { path: '/login', Component: LoginPage },
  { path: '/signup', Component: SignUpForm },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
