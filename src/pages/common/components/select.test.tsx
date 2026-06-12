import { render, screen } from "@testing-library/react";
import { Select } from "./select";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];

describe("Select component", () => {
  it("Should be disabled when disabled prop is true", () => {
    render(
      <Select
        disabled={true}
        options={options}
        label="teste"
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("Should not be disabled when disabled prop is false", () => {
    render(
      <Select
        disabled={false}
        options={options}
        label="teste"
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole("combobox")).not.toBeDisabled();
  });

  it("Should have the correct cursor when disabled", () => {
    render(
      <Select
        label="Teste"
        options={options}
        onChange={() => {}}
        disabled={true}
      />,
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("cursor-not-allowed");
  });

  it("Should render options correctly", () => {
    render(
      <Select
        disabled={false}
        options={options}
        label="teste"
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Option 1" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Option 2" }),
    ).toBeInTheDocument();
  });
});
