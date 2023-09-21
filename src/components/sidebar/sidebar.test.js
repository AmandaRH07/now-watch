import { fireEvent, render } from "@testing-library/react"
import Sidebar from "."
import { FilterProvider, FilterContext } from "../../contexts/filter-context"
import React from "react"

const setCheckboxService = jest.fn(() => { })
const setCheckboxType = jest.fn(() => { })
const setCheckboxGenre = jest.fn(() => { })
const setFilterService = jest.fn(() => { })
const setFilterType = jest.fn(() => { })
const setFilterGenre = jest.fn(() => { })
const setResponseHasMore = jest.fn(() => { })
const setResponseNextCursor = jest.fn(() => { })

const props = {
  checkboxType: [
    "movie",
    "serie",
  ],
  checkboxService: {
    apple: false,
    prime: false,
    disney: false,
    hbo: false,
    netflix: false
  },
  checkboxGenre: [
    "Acao28",
    "Animacao16",
    "Biografia1",
    "Comedia38",
    "Documentario99",
    "Drama18",
    "FiccaoCientifica878",
    "Romance10749",
    "Terror27"
  ],

  setCheckboxService,
  setCheckboxType,
  setCheckboxGenre,
  setFilterService,
  setFilterType,
  setFilterGenre,
  setResponseHasMore,
  setResponseNextCursor,
}

const checkboxServiceData = [
  ["Apple TV", setCheckboxService],
  ["Amazon Prime", setCheckboxService],
  ["Disney Plus", setCheckboxService],
  ["HBO Max", setCheckboxService],
  ["Netflix", setCheckboxService],
  ["Filmes", setCheckboxType],
  ["Séries", setCheckboxType],
  ["Ação", setCheckboxGenre],
  ["Animação", setCheckboxGenre],
  ["Biografia", setCheckboxGenre],
  ["Comédia", setCheckboxGenre],
  ["Documentario", setCheckboxGenre],
  ["Drama", setCheckboxGenre],
  ["Ficção Científica", setCheckboxGenre],
  ["Romance", setCheckboxGenre],
  ["Terror", setCheckboxGenre],
]

jest.spyOn(React, 'useState')
  .mockImplementation(initState => [initState, setCheckboxService])

const renderComponentProps = (props) => {
  return (
    render(
      <FilterContext.Provider value={{ ...props }}>
        <Sidebar />
      </FilterContext.Provider>
    )
  )
}

describe('<Sidebar/>', () => {
  const renderComponent = () => {
    return (
      render(
        <FilterProvider>
          <Sidebar />
        </FilterProvider>
      )
    )
  }

  it('Should render Sidebar', () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot()
  })
})

describe('<Sidebar/> functions', () => {
  describe.each(checkboxServiceData)('Should call handleChangeCheckboxesValues', (a, b) => {
    it(`Should be called passing through ${a}`, () => {
      const { getAllByText } = renderComponentProps(props);
      const btnAddLoad = getAllByText(a);
      fireEvent.click(btnAddLoad[0]);

      expect(b).toBeCalled()
    })
  })

  it(`Should be called passing through handleCleanFilter`, () => {
    const newProps = {
      ...props,
      checkboxService: {
        apple: true,
        prime: true,
        disney: true,
        hbo: true,
        netflix: true
      },

    }
    const { getAllByText } = renderComponentProps(newProps);
    const btnAddLoad = getAllByText("Limpar");
    fireEvent.click(btnAddLoad[0]);

    expect(setCheckboxService).toBeCalled()
    expect(setFilterService).toBeCalled()
    expect(setFilterType).toBeCalled()
    expect(setFilterGenre).toBeCalled()
  })

  it(`Should be called passing through handleSaveFilter`, () => {
    const { getAllByText } = renderComponentProps(props);
    const btnAddLoad = getAllByText("Enviar");
    fireEvent.click(btnAddLoad[0]);

    expect(setFilterService).toBeCalled()
    expect(setFilterType).toBeCalled()
    expect(setFilterGenre).toBeCalled()
  })
})