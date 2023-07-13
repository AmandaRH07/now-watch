import { render } from "@testing-library/react"
import Sidebar from "."
import { FilterProvider } from "../../contexts/filter-context"

const renderComponent = () => {
  return (
    render(
      <FilterProvider>
        <Sidebar />
      </FilterProvider>
    )
  )
}

describe('<Sidebar/>', () => {

  it('Should render Sidebar', () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot()
  })
})