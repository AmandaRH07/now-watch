import Cards from "."

describe('<Cards/>', () => {

  it('Should render Cards', () => {
    expect(<Cards  />).toMatchSnapshot()
  })
})