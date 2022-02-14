import './Body.css'
import Header from '../header/Header'
import { useSpotifyContext } from '../../store/spotify-context'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'



const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useSpotifyContext()
  console.log(discover_weekly.name)

  return (
    <div className='body'>
      <Header spotfiy={spotify} />
      <div className='body-info'>
        {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
        <div className='body-info_Text'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body-songs'>
        <div className='body-icons'>
          <PlayCircleFilledIcon />
          <FavoriteIcon />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
      </div>
    </div>
  )
}

export default Body