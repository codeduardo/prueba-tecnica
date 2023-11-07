import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
describe("<App/>", () => {
  //   test("should work ", () => {
  //     const { getByText } = render(<App />);
  //     // screen.debug();
  //     expect(
  //       // getByText("Lista de elementos"))
  //       getByText(/elementos/i)
  //     ).toBeDefined();
  //   });
  test("should add items and remove them", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();
    await user.type(input, "Jueguitos");
    await user.click(button!);

    const list = screen.getByRole("list");
    expect(list).toBeDefined();

    expect(list.childNodes.length).toBe(1);

    const item = screen.getByText("Jueguitos");
    const itemButtom = item.querySelector("button");

    await user.click(itemButtom!);
    expect(list.childNodes.length).toBe(0);
  });
});
