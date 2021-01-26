import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  // at the beginning of the test, the component that we want to test, has to be renderd (or loaded)
  render(<App />);

  // After this we what to screen (or search) for a specific role in the component (like "button", "link", etc.)
  // "Where do I want to test something" "O which place of the component"
  // find a element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  // What do I want to test exactly (Argument - expect()), with which methode (.toHaveStyle, etc.) and what should be the result (Argument - .to HaveStyle())
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disabled when checked", () => {
  render(<App />);
  // look for the button
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button");
  // click the button
  fireEvent.click(checkbox);
  // expect the button to be disabled
  expect(colorButton).toBeDisabled();
  // click the button again
  fireEvent.click(checkbox);
  // check that the checkbox is enables the button again
  expect(colorButton).toBeEnabled();
});
