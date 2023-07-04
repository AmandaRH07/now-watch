import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import Header from "."

const renderComponent = () => (
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
)

describe('<Header/>', () => {

  it('Should render Header', () => {
    const {container} = renderComponent();

    console.log("container", container);
    expect(container).toMatchSnapshot();
  })
})