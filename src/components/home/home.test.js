import { render } from "@testing-library/react"
import Home from "."
import { BrowserRouter } from "react-router-dom"
import { FilterProvider } from "../../contexts/filter-context"

const renderComponent = () => (
  render(
    <BrowserRouter>
      <FilterProvider>
        <Home />
      </FilterProvider>
    </BrowserRouter>
  )
)

describe('<Home/>', () => {

  it('Should render Home', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  })
})