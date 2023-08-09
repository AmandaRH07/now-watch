import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import MenuOptions from "."

const renderComponent = () => (
  render(
    <BrowserRouter>
      <MenuOptions />
    </BrowserRouter>
  )
)

describe('<MenuOptions/>', () => {

  it('Should render MenuOptions', () => {
    const {container} = renderComponent();

    expect(container).toMatchSnapshot();
  })
})