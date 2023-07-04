import { render } from "@testing-library/react"
import Home from "."

const renderComponent = () => (
  render(
      <Home />
  )
)

describe('<Home/>', () => {

  it('Should render Home', () => {
    const {container} = renderComponent();

    console.log("container", container);
    expect(container).toMatchSnapshot();
  })
})