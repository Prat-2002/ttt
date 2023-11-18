import ProfileContent from "./components/body"
import ProfileContent2 from "./components/body2"
import ProfileContent3 from "./components/body3"
import Header from "./components/header"
import Profile from "./components/profile"

export default function App(){
  return(
    <>
    <Header />
    <Profile/>
    <ProfileContent/>
    <hr/>
    <ProfileContent2 />
    <hr />
    <ProfileContent3/>
    </>
  )
}
