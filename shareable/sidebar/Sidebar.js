import Profile from './profile/Profile'
import MainAccount from './main-account/MainAcount'

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <Profile />
      <MainAccount />
    </div>
  )
}

export default Sidebar
