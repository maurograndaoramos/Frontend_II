import Greeting from "../components/Greeting";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Component render", () => {
    render(<Greeting nome="João"/>);
    expect(screen.getByText(/Olá, João!/i)).toBeInTheDocument();
});

