import './Body.css'
import Header from '../header/Header'

const Body = ({ spotify }) => {
  return (
    <div className='body'>
      <Header spotfiy={spotify} />
    </div>
  )
}

export default Body