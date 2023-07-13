import Cards from "."
import { render } from "@testing-library/react"
import { FilterProvider } from "../../contexts/filter-context"

const renderComponent = () => (
  render(
    <FilterProvider>
    <Cards />
    </FilterProvider>
  )
)

describe('<Cards/>', () => {

  it('Should render Cards', () => {
    const {container} = renderComponent();

    console.log("container", container);
    expect(container).toMatchSnapshot();
  })
})