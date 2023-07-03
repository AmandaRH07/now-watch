import CardConfig from "."
import { render } from "@testing-library/react"

const props =
{
  type: "series",
  title : "101 Dalmatians: The Series",
  streamingInfo: {
    br: {
      disney: [
        {
          type: "subscription",
          link: "https://www.disneyplus.com/series/101-dalmatians-series/1ry2z2HF6ad9",
        }
      ],
    }
  },
  firstAirYear: 1997,
  advisedMinimumAudienceAge: 0,
  genres: [
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 6,
      name: "Short"
    },
    {
      id: 12,
      name: "Adventure"
    }
  ],
  posterURLs: [{
    original: "https://image.tmdb.org/t/p/original/3XnznfCQvfAKDUnuQLaXtkb36hL.jpg"
  }],
}

const renderComponent = () => (
  render(
    <CardConfig
      cardsMapData={props} />
  )
)

describe('<CardConfig/>', () => {
  it('Should render Card', () => {
    const {container} = renderComponent();

    console.log("container", container);
    expect(container).toMatchSnapshot();
  })
})