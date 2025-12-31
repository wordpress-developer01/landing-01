import assets from '../assets/assets';

function Header() {
  return (
    <div>
        <header>
            <div className="logo"> 
                <img src={assets.logo} alt="logo" />
            </div>
            <div className="navbar">
                <nav>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">Contact Us</a></li>
                </nav>
            </div>
            <div className="buttons">
                <button><img src={assets.moon_icon} alt="" /></button>
                <button>Connect <img src={assets.arrow_icon} alt="arrow" /></button>
            </div>
        </header>
    </div>
  )
}


export default Header