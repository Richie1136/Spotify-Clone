import SideBarOption from '../sidebaroption/SideBarOption'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className='sidebar-logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
      <SideBarOption title='Home' />
      <SideBarOption title='Search' />
      <SideBarOption title='Your Library' />
    </div>
  )
}

export default Sidebar