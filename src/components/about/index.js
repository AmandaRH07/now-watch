import tmdbLogo from '../../images/theMovieDbLogo.svg'
import Header from '../header';
import './style.css';

const About = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <img src={tmdbLogo} alt="The Movie DB Logo" className='credits' />

        <div>
          <p>Este produto usa a API do TMDB mas não é certificada pelo TMDB</p>
          <p>This product uses the TMDB API but is not endorsed or certified by TMDB</p>
        </div>
      </div>
    </div>
  )
}

export default About;