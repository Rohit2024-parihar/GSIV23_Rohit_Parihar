import React from "react"
import { render} from "@testing-library/react"
import App from "./App"
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./app/store";

jest.mock("axios")

test("renders learn react link", () => {
  render(
    <Provider store={store}>
  <App />
  </Provider>
  )
})
