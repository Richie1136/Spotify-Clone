import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useSpotifyContext } from '../../store/spotify-context'



const Header = () => {
  const [{ user }, dispatch] = useSpotifyContext()

  return (
    <div className='header'>
      <div className='header-left'>
        <SearchIcon />
        <input type='text' placeholder='Search for Artists, Songs, or Podcasts' />
      </div>
      <div className='header-right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header