// Navbar.test.js
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'; // Import your component

describe('Navbar Component', () => {
  test('should render Navbar', () => {
    render(<Navbar />);

    // Check if the navbar is rendered correctly
    const navbarElement = screen.getByText(/home/i); // Check if "Home" text is found in the Navbar
    expect(navbarElement).toBeInTheDocument();
  });

  test('should have a login link', () => {
    render(<Navbar />);
    
    // Check if there's a link with "Login"
    const loginLink = screen.getByText(/login/i);
    expect(loginLink).toBeInTheDocument();
  });
});
