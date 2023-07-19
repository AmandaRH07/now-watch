import Cards from "."
import { render } from "@testing-library/react"
import { FilterContext, FilterProvider } from "../../contexts/filter-context"

const renderComponent = () =>
  render(
    <FilterProvider>
      <Cards />
    </FilterProvider>
  )

describe('<Cards/>', () => {
  it('Should render Cards', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  })
})

describe('<Cards/> with params', () => {
  const renderComponentProps = (props) =>
    render(
      <FilterContext.Provider value={{
        ...props
      }}>
        <Cards />
      </FilterContext.Provider>


    )

  it('Should render Cards', () => {
    const props = {
      filterGenre: [
        'Animacao16'
      ],

      filterService: [
        "apple",
        "prime",
        "disney",
        "hbo",
        "netflix"
    ],
      filterType: 'all',
      setResponseData: jest.fn()
    }
    const { container } = renderComponentProps(props);
    expect(container).toMatchSnapshot();
  })
})
