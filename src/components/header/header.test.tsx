import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders header text', () => {
   render(<Header />);
  const headerElement = screen.getByText('RESUME');
  expect(headerElement).toBeInTheDocument();
});
