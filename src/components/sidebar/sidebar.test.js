import { render } from "@testing-library/react"
import Sidebar from "."

const renderComponent = () => {
  return (
    render(
      <Sidebar />)
  )
}

describe('<Sidebar/>', () => {

  it('Should render Sidebar', () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot()
  })
})