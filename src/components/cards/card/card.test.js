import CardConfig from "."
import { render } from "@testing-library/react"

const props = {
  type: "movie",
  data: [{
    "imdbID": "tt1837492",
    "tmdbID": "66788",
    "imdbRating": 75,
    "imdbVoteCount": 297377,
    "tmdbRating": 76,
    "backdropPath": "/c4CSgKL6QfkJxsWcGYDyTxpbzpW.jpg",
    "backdropURLs": {
      "300": "https://image.tmdb.org/t/p/w300/c4CSgKL6QfkJxsWcGYDyTxpbzpW.jpg",
      "780": "https://image.tmdb.org/t/p/w780/c4CSgKL6QfkJxsWcGYDyTxpbzpW.jpg",
      "1280": "https://image.tmdb.org/t/p/w1280/c4CSgKL6QfkJxsWcGYDyTxpbzpW.jpg",
      "original": "https://image.tmdb.org/t/p/original/c4CSgKL6QfkJxsWcGYDyTxpbzpW.jpg"
    },
    "originalTitle": "13 Reasons Why",
    "genres": [
      18,
      9648,
      53
    ],
    "countries": [
      "US"
    ],
    "year": 2017,
    "firstAirYear": 2017,
    "lastAirYear": 2020,
    "episodeRuntimes": [
      57
    ],
    "cast": [
      "Dylan Minnette",
      "Christian Navarro",
      "Alisha Boe",
      "Brandon Flynn",
      "Justin Prentice",
      "Miles Heizer",
      "Ross Butler"
    ],
    "significants": [
      "Brian Yorkey"
    ],
    "title": "13 Reasons Why",
    "overview": "After a teenage girl's perplexing suicide, a classmate receives a series of tapes that unravel the mystery of her tragic choice.",
    "video": "QkT-HIMSrRk",
    "posterPath": "/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
    "posterURLs": {
      "92": "https://image.tmdb.org/t/p/w92/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
      "154": "https://image.tmdb.org/t/p/w154/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
      "185": "https://image.tmdb.org/t/p/w185/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
      "342": "https://image.tmdb.org/t/p/w342/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
      "500": "https://image.tmdb.org/t/p/w500/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
      "780": "https://image.tmdb.org/t/p/w780/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
      "original": "https://image.tmdb.org/t/p/original/nel144y4dIOdFFid6twN5mAX9Yd.jpg"
    },
    "seasons": 4,
    "episodes": 49,
    "age": 17,
    "status": 4,
    "tagline": "",
    "streamingInfo": {
      "netflix": {
        "us": {
          "link": "https://www.netflix.com/title/80117470/",
          "added": 1600283847,
          "leaving": 0
        }
      }
    },
    "originalLanguage": "en"
  }],
}

const renderComponent = (props) => {
  render(
    <CardConfig {...props} />
  )
}

describe('<CardConfig/>', () => {
  it('Should render Card', () => {
    expect(<CardConfig />).toMatchSnapshot()
  })

  it('Should call HandleGenresCards', () => {
    const container = renderComponent(props)
  })
})