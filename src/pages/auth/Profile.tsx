import { Outlet } from "react-router-dom"
import AccountSidebar from "../../components/account/AccountSidebar"

const Profile = () => {
  return (
    <div className="w-[85%] mx-auto py-10 flex items-center gap-3 xl:flex-row flex-col">
      <AccountSidebar />
      <Outlet />
    </div>
  )
}

export default Profile;