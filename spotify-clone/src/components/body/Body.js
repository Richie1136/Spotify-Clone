import './Body.css'
import Header from '../header/Header'

const Body = ({ spotify }) => {
  return (
    <div className='body'>
      <Header spotfiy={spotify} />
      <div className='body-info'>
        <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7_screen.jpg?ts=1561547030' alt='' />
        <div className='body-info_Text'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  )
}

export default Body