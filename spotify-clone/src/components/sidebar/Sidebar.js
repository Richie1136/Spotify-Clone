import SideBarOption from '../sidebaroption/SideBarOption'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useSpotifyContext } from '../../store/spotify-context'


const Sidebar = () => {

  const [{ playLists }, dispatch] = useSpotifyContext()

  return (
    <div className='sidebar'>
      <img className='sidebar-logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
      <SideBarOption Icon={HomeIcon} title='Home' />
      <SideBarOption Icon={SearchIcon} title='Search' />
      <SideBarOption Icon={LibraryMusicIcon} title='Your Library' />
      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />
      {playLists?.items?.map(playlist => {
        return <SideBarOption key={playlist.id} title={playlist.name} />
      })}
    </div>
  )
}

export default Sidebar