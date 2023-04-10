import free from './images/ages/free.png'
import a10 from './images/ages/age10.png'
import a12 from './images/ages/age12.png'
import a16 from './images/ages/age16.png'
import a18 from './images/ages/age18.png'

export function ConvertParentalPating(age) {
  const convertAge = parseInt(age);

  switch (true) {
    case (convertAge < 10 || age === 'L'):
      return <img src={free} alt="L" />
    case (convertAge === 10):
      return <img src={a10} alt="10" />
    case (convertAge <= 12):
      return <img src={a12} alt="12" />
    case (convertAge <= 14):
      return <img src={a12} alt="12" />
    case (convertAge <= 16):
      return <img src={a16} alt="16" />
    case (convertAge <= 18):
      return <img src={a18} alt="18" />
    default:
      return <p alt={age}> {age} </p>
  }
}

export function CaptalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}