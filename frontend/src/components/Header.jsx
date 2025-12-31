import assets from '../assets/assets';
import styles from './Header.module.css';

function Header() {
  return (
    <div>
        <header className={styles.header}>
            <div className="logo"> 
                <img src={assets.logo} alt="logo" />
            </div>
            <div className={styles.navbar}>
                <nav>
                    <ul className={styles.ul}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.btndiv}>
                <button className={styles.moon}><img src={assets.moon_icon} alt="" /></button>
                <button className={styles.btn}>Connect <img src={assets.arrow_icon} alt="arrow" /></button>
            </div>
        </header>
    </div>
  )
}


export default Header