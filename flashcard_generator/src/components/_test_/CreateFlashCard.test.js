import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import CreateFlashCard from "../Create_Flashcard/CreateFlashCard";

const data = (component) =>
  render(<Provider store={store}>{component}</Provider>);
afterEach(() => {
  cleanup;
});
describe(CreateFlashCard, () => {
  beforeEach(() => {
    data(<CreateFlashCard />);
  });

  test("should be group name", () => {
    const groupname = screen.getByLabelText(/group name/i);
    expect(groupname).toBeInTheDocument();
  });
  test("should be  description", () => {
    const description = screen.getByLabelText(/add description/i);
    expect(description).toBeInTheDocument();
  });
  test("should be image of group", () => {
    const groupimage = screen.getByText("Upload Image");
    expect(groupimage).toBeInTheDocument();
  });
  test("should be term", () => {
    const term = screen.getByText(/enter term/i);
    expect(term).toBeInTheDocument();
  });
  test("should be definition", () => {
    const term = screen.getByText(/term definition/i);
    expect(term).toBeInTheDocument();
  });
  test("should be term image", () => {
    const termimage = screen.getByText(/select image/i);
    expect(termimage).toBeInTheDocument();
  });
  test("should be addmore button", () => {
    const addmorebutton = screen.getByText(/add more/i);
    expect(addmorebutton).toHaveTextContent(/add more/i);
  });

  test("should be create button", () => {
    const create = screen.getByRole("button", { name: "Create" });
    expect(create).toHaveTextContent(/create/i);
  });
});
