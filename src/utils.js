import free from './images/ages/free.png'
import a10 from './images/ages/age10.png'
import a12 from './images/ages/age12.png'
import a16 from './images/ages/age16.png'
import a18 from './images/ages/age18.png'

export default function ConvertParentalPating(age) {
  switch (age) {
    case 'L':
      return <img src={free} alt="L" />
    case '10':
      return <img src={a10} alt="10" />
    case '11' || '12' :
      return <img src={a12} alt="12" />
    case '13' || '14' :
      return <img src={a12} alt="14" />
    case '15'|| '16':
      return <img src={a16} alt="16" />
    case '17' || '18':
      return <img src={a18} alt="18" />
    default:
      return <p alt={age}> {age} </p>
  }
}