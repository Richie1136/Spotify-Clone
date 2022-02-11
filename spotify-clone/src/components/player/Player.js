import './Player.css'
import Body from '../body/Body';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

const Player = ({ spotify }) => {
  return (
    <div className='player'>
      <div className='player-body'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  )
};

export default Player;
