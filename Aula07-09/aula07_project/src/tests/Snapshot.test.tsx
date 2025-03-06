import { render } from "@testing-library/react";
import Counter2 from "../components/Counter2";

test("Must match snapshot", () => {
    const { container } = render(<Counter2 />);
    expect(container).toMatchSnapshot();
});
