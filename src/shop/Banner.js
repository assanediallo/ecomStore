import '../styles/Banner.css'
import logo from '../assets/logo.webp'
function Banner() {
  return <div className="banner">
    <img src={logo} className="logo" />
    <h1>Deploiement automatic</h1>
  </div>
}
export default Banner