// src/Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from "./Button";
import '@testing-library/jest-dom';

test('renders button with label', () => {
  render(<Button label="Click Me" />);

  // Assert that the button is in the document and has the correct label
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Click Me');
});

test('calls the onClick function when clicked', () => {
  const handleClick = jest.fn(); // Mock the onClick function
  render(<Button label="Click Me" onClick={handleClick} />);

  const button = screen.getByRole('button');
  fireEvent.click(button);  // Simulate a click event
  
  expect(handleClick).toHaveBeenCalledTimes(1); // Assert that onClick was called
});
