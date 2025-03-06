import TestExample from '../components/TestExample';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Component render", () => {
    render(<TestExample intValue={0} />);
    expect(screen.getByText(/Hello, World/i)).toBeInTheDocument();
});