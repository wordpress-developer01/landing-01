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
            <div className={styles.info_hero}>
            <h1>Turning imagination into <br /> <span className={styles.gr}>digital</span> impact.</h1>
            </div>
            <div className={styles.info_two}>
            <p>Creating meaningful connections and turning big ideas into <br />
             interactive digital experiences.</p>
             </div>
             <img src={assets.hero_img} alt="hero img"  width="100%"/>
             <p>Trusted by Leading Companies</p>
         </div>

         <div>
            <div className={styles.displayo}>
                <img src={assets.microsoft_logo} alt="" width="100%" />
                <img src={assets.zoom_logo} alt="" width="100%"/>
                <img src={assets.rakuten_logo} alt="" width="100%"/>
                <img src={assets.coinbase_logo} alt="" width="100%"/>
                <img src={assets.airbnb_logo} alt="" width="100%"/>
                <img src={assets.google_logo} alt="" width="100%"/>
            </div>

            <div className={styles.center}>
                <h1>How can we help?</h1>
                <p>From strategy to execution, we craft digital solutions that move your <br />
                 business forward.</p>
            </div>

            <section className={styles.section}>
                <div className={styles.display}>
                    <div>
                        <img src={assets.ads_icon} alt="ads" />
                    </div>
                    <div>
                    <h3>Advertising</h3>
                    <p>We turn bold ideas into powerful digital <br />
                     solutions that connect, engage...</p>
                    </div>
                </div>
                <div className={styles.display}>
                    <div>
                        <img src={assets.content_icon} alt="" />
                    </div>
                    <div>
                    <h3>Content writing</h3>
                    <p>We help you create a marketing <br />
                     strategy that drives results.</p>
                     </div>
                </div>
                <div className={styles.display}>
                    <div>
                        <img src={assets.marketing_icon} alt="" />
                    </div>
                    <div>
                    <h3>Content marketing</h3>
                    <p>We help you execute your plan and <br />
                     deliver results.</p>
                     </div>
                </div>
                <div className={styles.display}>
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

            <div className={styles.displayo}>
                <div>
                    <img src={assets.work_dashboard_management} alt="dashboard" width="100%" />
                    <h3>Dashboard management</h3>
                    <p>We help you execute your plan and <br /> deliver results.</p>
                </div>
                <div>
                    <img src={assets.work_mobile_app} alt="mobile"  width="100%"/>
                    <h3>Mobile app marketing</h3>
                    <p>We turn bold ideas into powerful <br />
                     digital solutions that connect, <br />
                      engage...</p>
                </div>
                <div>
                    <img src={assets.work_fitness_app} alt="fitness" width="100%" />
                    <h3>Fitness app promotion</h3>
                    <p>We help you create a marketing <br />
                     strategy that drives results.</p>
                </div>
            </div>

            <div className={styles.center}>
                <h1>Meet the team</h1>
                <p>A passionate team of digital experts dedicated to your brands <br />
                 success.</p>
            </div>

            <section className={styles.sectwo}>
                <div className={styles.cardform}>
                    <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.one} alt=""/>
                    </div>
                    <div>
                    <h5>Haley Carter</h5>
                     <p>CEO & founder</p>
                    </div> 
                </div>
                <div className={styles.cardform}>
                    <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.two} alt=""/>
                    </div>
                    <div>
                    <h5>James Walker</h5>
                     <p>Ads manager</p>
                    </div> 
                </div>
                <div className={styles.cardform}>
                     <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.three} alt=""/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div className={styles.cardform}>
                    <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.four} alt=""/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div className={styles.cardform}>
                    <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.five} alt=""/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div className={styles.cardform}>
                    <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.six} alt=""/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div className={styles.cardform}>
                    <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.seven} alt=""/>
                    </div>
                    <div>
                    <h5>Jessica Morgan</h5>
                     <p>Vice president</p>
                    </div> 
                </div>
                <div className={styles.cardform}>
                    <div className={styles.divimg}>
                        <img className={styles.imgclass} src={assets.eight} alt=""/>
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
            
            <div className={styles.form}>
            <form action=''>
                <label htmlFor="Your name">Your name  </label> 
                <input className={styles.input} type="text" placeholder='enter your name'/> <br />
                <label htmlFor="Your email">Your email  </label> 
                <input className={styles.input} type="email" placeholder='enter your email'/> <br/>
                <label htmlFor="your message">your mess </label>
                <textarea className={styles.input} name="text" id="" cols="30" placeholder='enter your message'></textarea>
                <button className='btn'>Submit</button>
            </form>
            </div>


         </div>
    </div>
  )
}
