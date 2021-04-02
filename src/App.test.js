import { render, screen } from '@testing-library/react';
import App from './App';

test('renders empty app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your code/i);
  expect(linkElement).toBeInTheDocument();
});
