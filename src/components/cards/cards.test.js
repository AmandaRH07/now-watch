import Cards from "."
import { render } from "@testing-library/react"

const renderComponent = () => (
  render(
    <Cards />
  )
)

describe('<Cards/>', () => {

  it('Should render Cards', () => {
    const {container} = renderComponent();

    console.log("container", container);
    expect(container).toMatchSnapshot();
  })
})