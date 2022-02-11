import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <SearchIcon />
        <input type='text' placeholder='Search for Artists, Songs, or Podcasts' />
      </div>
      <div className='header-right'>

      </div>
    </div>
  )
}

export default Header