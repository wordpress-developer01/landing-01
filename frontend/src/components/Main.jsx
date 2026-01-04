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
            <div className={styles.display}>
                <img src={assets.microsoft_logo} alt="" />
                <img src={assets.zoom_logo} alt="" />
                <img src={assets.rakuten_logo} alt="" />
                <img src={assets.coinbase_logo} alt="" />
                <img src={assets.airbnb_logo} alt="" />
                <img src={assets.google_logo} alt="" />
            </div>

            <div className={styles.center}>
                <h1>How can we help?</h1>
                <p>From strategy to execution, we craft digital solutions that move your <br />
                 business forward.</p>
            </div>

            <section className={styles.section}>
                <div>
                    <div>
                        <img src={assets.ads_icon} alt="ads" />
                    </div>
                    <div>
                    <h3>Advertising</h3>
                    <p>We turn bold ideas into powerful digital <br />
                     solutions that connect, engage...</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={assets.content_icon} alt="" />
                    </div>
                    <div>
                    <h3>Content writing</h3>
                    <p>We help you create a marketing <br />
                     strategy that drives results.</p>
                     </div>
                </div>
                <div>
                    <div>
                        <img src={assets.marketing_icon} alt="" />
                    </div>
                    <div>
                    <h3>Content marketing</h3>
                    <p>We help you execute your plan and <br />
                     deliver results.</p>
                     </div>
                </div>
                <div>
                    <div>
                      <img src={assets.social_icon} alt="" />
                    </div>
                    <div>
                    <h3>Social media</h3>
                    <p>We help you build a strong social media <br />
                     presence and engage with your <br />
                      audience.</p>
                      </div>
                </div>
            </section>

            <div className={styles.center}>
                <h1>Our latest work</h1>
                <p>From strategy to execution, we craft digital solutions that move your <br />
                 business forward.</p>
            </div>

            <div className={styles.center}>
                <h1>Meet the team</h1>
                <p>A passionate team of digital experts dedicated to your brands <br />
                 success.</p>
            </div>

            <section className={styles.sectwo}>
                <div>
                    <div>
                        <img src={assets.one} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>Haley Carter</h5>
                     <p>CEO & founder</p>
                    </div> 
                </div>
                <div>
                    <div>
                        <img src={assets.two} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>James Walker</h5>
                     <p>Ads manager</p>
                    </div> 
                </div>
                <div>
                     <div>
                        <img src={assets.three} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div>
                    <div>
                        <img src={assets.four} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div>
                    <div>
                        <img src={assets.five} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div>
                    <div>
                        <img src={assets.six} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div>
                    <div>
                        <img src={assets.seven} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div>
                    <div>
                        <img src={assets.eight} alt="" width="100%"/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
            </section>

            <div className={styles.center}>
                <h1>Reach out to us</h1>
                <p>From strategy to execution, we craft digital solutions that move your <br />
                 business forward.</p>
            </div>

            <form action="">
                <input type="text" placeholder='enter your name'/>
                <input type="email" placeholder='enter your email'/>
                <textarea name="text" id="" cols="30" placeholder='enter your message'></textarea>
                <button className='btn'>Submit</button>
            </form>


         </div>
    </div>
  )
}
