// src/App.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';  // We need to wrap the component with Router
import App from './App';

jest.mock('./Pages/Home', () => ({ default: () => <div>Home Page</div> }));
jest.mock('./Pages/Login', () => ({ default: () => <div>Login Page</div> }));
jest.mock('./Pages/Signup', () => ({ default: () => <div>Signup Page</div> }));

describe('App Component', () => {
  test('renders Navbar and Home route correctly', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    // Check if Navbar is rendered
    expect(screen.getByText(/Navbar/)).toBeInTheDocument();

    // Check if Home page is rendered
    expect(await screen.findByText('Home Page')).toBeInTheDocument();
  });

  test('navigates to Login page when clicking on Login route', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Trigger navigation to the login page
    window.history.pushState({}, 'Login Page', '/login');

    // Wait for Login Page to be rendered after lazy loading
    expect(await screen.findByText('Login Page')).toBeInTheDocument();
  });

  test('navigates to Signup page when clicking on Signup route', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Trigger navigation to the signup page
    window.history.pushState({}, 'Signup Page', '/signup');

    // Wait for Signup Page to be rendered after lazy loading
    expect(await screen.findByText('Signup Page')).toBeInTheDocument();
  });

  test('shows loading state while lazy loading a page', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Check if the "Loading..." text is displayed during lazy loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
