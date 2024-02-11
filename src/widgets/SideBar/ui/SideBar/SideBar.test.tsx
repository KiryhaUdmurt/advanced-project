import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/ComponentRender/componentRender";
import { SideBar } from "./SideBar";

describe("sidebar", () => {
  test("with only first param", () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
