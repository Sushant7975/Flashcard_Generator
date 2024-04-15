import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import Body from "../Body/Body";
const data = (component) =>
  render(<BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>);

describe(Body, () => {

    data(<Body/>)

    it('should contain navlinks ', () => {
        expect(screen.getByText(/create new/i)).toBeInTheDocument()
        expect(screen.getByText(/myflash cards/i)).toBeInTheDocument()
    })
})