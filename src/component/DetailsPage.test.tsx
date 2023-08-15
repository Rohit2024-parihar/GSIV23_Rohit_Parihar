import React from "react";
import { fireEvent, render,screen} from "@testing-library/react";
import { DetailsPage } from "./DetailsPage";
import { MemoryRouter } from "react-router-dom";

test("renders details Page of movie", () => {
    const route = "/";
  render(
    <MemoryRouter initialEntries={[route]} >
      <DetailsPage/>
      </MemoryRouter>
  );
  fireEvent.click(screen.getByTestId('btn'))
});
