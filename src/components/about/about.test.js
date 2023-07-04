import { BrowserRouter } from "react-router-dom"
import About from "."
import { render } from "@testing-library/react"

const renderComponent = () => (
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  )
)

describe('<About/>', () => {

  it('Should render About', () => {
    const {container} = renderComponent();

    console.log("container", container);
    expect(container).toMatchSnapshot();
  })
})