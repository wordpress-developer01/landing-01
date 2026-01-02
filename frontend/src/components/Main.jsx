import styles from './Main.module.css';
import assets from '../assets/assets';

export default function Main() {
  return (
    <div>
         <div className={styles.center}>
        <div className={styles.group_div}>
            <img src={assets.group_profile} alt="group profile" width="80px" />
            <p>Trusted by 10k+ people</p>
        </div>
         </div>

         <div className={styles.center}>
            <h1>Turning imagination into <br /> <span>digital</span> impact.</h1>
            <p>Creating meaningful connections and turning big ideas into <br />
             interactive digital experiences.</p>
             <img src={assets.hero_img} alt="hero img"  width="100%"/>
             <p>Trusted by Leading Companies</p>
         </div>

         <div>
            <div>
                <img src={assets.microsoft_logo} alt="" />
                <img src={assets.zoom_logo} alt="" />
                <img src={assets.rakuten_logo} alt="" />
                <img src={assets.coinbase_logo} alt="" />
                <img src={assets.airbnb_logo} alt="" />
                <img src={assets.google_logo} alt="" />
            </div>

            <div>
                <h1>How can we help?</h1>
                <p>From strategy to execution, we craft digital solutions that move your <br />
                 business forward.</p>
            </div>

            <section>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>

            <div>
                <h1></h1>
                <p></p>
            </div>

            <div>
                <h1></h1>
                <p></p>
            </div>

            <section>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>

            <div>
                <h1></h1>
                <p></p>
            </div>

            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button></button>
            </form>


         </div>
    </div>
  )
}
