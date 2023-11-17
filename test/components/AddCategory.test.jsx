import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("test on AddCategory", () => {
  const inputValue = "Deku";

  test("should change value input text", () => {
    const onNewValue = jest.fn();
    render(<AddCategory onNewValue={onNewValue} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test("should call onNewCategory whit value", () => {
    const onNewValue = jest.fn();
    render(<AddCategory onNewValue={onNewValue} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewValue).toHaveBeenCalledWith(inputValue);
  });

  test("should call onNewCategroy whitout value", () => {
    const onNewValue = jest.fn();
    render(<AddCategory onNewValue={onNewValue} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewValue).toHaveBeenCalledTimes(0);
    expect(onNewValue).not.toHaveBeenCalled();
  });
});
