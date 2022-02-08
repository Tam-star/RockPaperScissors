import { fireEvent, render, screen } from "@testing-library/react";
import RulesButton from "./RulesButton";

beforeEach(() => {
  document.body.innerHTML = null;
});

test("test appearance and disappearance of rules modal when clicking on rules button", () => {
  render(<RulesButton />);
  const showRules = screen.getByRole('button', {name: /RULES/i})
  fireEvent.click(showRules);
  expect(screen.getByTestId('rules-modal')).toBeInTheDocument()
  const closeModal = screen.getByRole('button', {name: /close rules/i})
  fireEvent.click(closeModal);
  expect(screen.queryByTestId('rules-modal')).not.toBeInTheDocument()
});
