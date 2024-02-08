import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("button", () => {
  test("test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test("clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug()
  });
});
