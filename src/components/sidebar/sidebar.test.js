import Sidebar from "."

describe('<Sidebar/>', () => {

  it('Should render Sidebar', () => {
    expect(<Sidebar  />).toMatchSnapshot()
  })
})