import { BrowserRouter } from "react-router-dom"
import SearchComponent from "."
import { render } from "@testing-library/react"

const renderComponent = () => (
  render(
    <BrowserRouter>
      <SearchComponent />
    </BrowserRouter>
  )
)

describe('<SearchComponent/>', () => {

  it('Should render SearchComponent', () => {
    const {container} = renderComponent();

    console.log("container", container);
    expect(container).toMatchSnapshot();
  })
})