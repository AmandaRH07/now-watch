import { BrowserRouter } from "react-router-dom"
import { render, fireEvent } from "@testing-library/react"
import Header from "."
import * as router from 'react-router'

const renderComponent = () => (
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
)

describe('<Header/>', () => {
  it('Should render Header', () => {
    const {container} = renderComponent();
    expect(container).toMatchSnapshot();
  })

  it('Should click on icon and redirect to the component', () => {
    const navigate = jest.fn() 
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)

    const { getByText } = renderComponent();
    const btn = getByText(/Now Watch/);
    fireEvent.click(btn);
    expect(navigate).toHaveBeenCalledWith('/')
  })
})