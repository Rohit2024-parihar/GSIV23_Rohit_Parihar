import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ListPage from "./ListPage";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn().mockReturnValue(null),
    unobserve: jest.fn().mockReturnValue(null),
    disconnect: jest.fn().mockReturnValue(null),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("renders list of movies", () => {
  const route = "/details";
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <ListPage />
      </MemoryRouter>
    </Provider>
  );
  fireEvent.change(screen.getByTestId("searchBox"), {
    target: { value: "password123" },
  });
});
