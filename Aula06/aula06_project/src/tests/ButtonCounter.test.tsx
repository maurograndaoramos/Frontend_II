import { render, screen, fireEvent } from '@testing-library/react';
import ButtonTest from '../components/ButtonTest';
import "@testing-library/jest-dom"

test("ButtonCounter is clicked", () => {
    render(<ButtonTest />);
    const button = screen.getByRole("button");
    const counter = screen.getByText("0");

    expect(counter).toBeInTheDocument();
    fireEvent.click(button);
    expect(counter).toHaveTextContent("1");
    fireEvent.click(button);
    expect(counter).toHaveTextContent("2");
    fireEvent.click(button);
    expect(counter).toHaveTextContent("3");
});