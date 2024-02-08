import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("sidebar", () => {
  test("with only first param", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getAllByTestId('sidebar-toggle')
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass('collapsed')
  });
});
