import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store';
import LoginPage from './pages/LoginPage';
import InvoicesPage from './pages/InvoicesPage';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const queryClient = new QueryClient();

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
}

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/invoices"
              element={
                <PrivateRoute>
                  <InvoicesPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
