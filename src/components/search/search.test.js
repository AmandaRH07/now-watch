import { BrowserRouter } from "react-router-dom"
import SearchComponent from "."
import { render } from "@testing-library/react"
import { FilterProvider } from "../../contexts/filter-context"

const renderComponent = () => (
  render(
    <BrowserRouter>
      <FilterProvider>
        <SearchComponent />
      </FilterProvider>
    </BrowserRouter>
  )
)

describe('<SearchComponent/>', () => {

  it('Should render SearchComponent', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  })
})