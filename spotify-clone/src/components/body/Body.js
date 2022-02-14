import './Body.css'
import Header from '../header/Header'
import { useSpotifyContext } from '../../store/spotify-context'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from '../songrow/SongRow'



const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useSpotifyContext()
  console.log(discover_weekly)

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
          <PlayCircleFilledIcon className='body-shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {/* {discover_weekly?.tracks.items.map(item => {
          return <SongRow track={item.track} />
        })} */}
      </div>
    </div>
  )
}

export default Body