import React from 'react';
import ReactDOM from 'react-dom/client';
import light from './assets/css/bite-style.module.css';
import dark from './assets/css/bite-styleDark.module.css';
import { isOsSettingDarkTheme } from './darkTheme.js';
import { MdLanguage, MdOutlineImportantDevices, MdOutlinePhonelink, MdOutlineQueryStats, MdOutlineCall, MdOutlineForum, MdOutlineMarkAsUnread, MdOutlineRadar, MdOutlinePhone, MdFacebook, MdInfoOutline } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


let isDarkTheme='';
let styles='';
let Mode='';
let mode='';
  if (isOsSettingDarkTheme) {
    isDarkTheme=true;
    } else {
      isDarkTheme=false;
  }
  if (isDarkTheme) {
    styles = dark;
  } else {
    styles = light;
  }
  
function Footer() {
  const footer = (
    <section>
    <div className={styles.spacer50}></div> 
    <div className={styles.columns + ' ' + styles.footerGrid}>
        <div className={styles.columns3}>
           <h5 className={styles.footerH}>BITe Agency</h5>
           <div className={styles.spacer30}></div> 
           <p className={styles.footerP}>
               BITe agency harnesses digital technologies to give you real results that grow your business.
               Our consumer psychology based methods ensure you aren't just spending money on digital technology,
               but earning good returns on your investments. With BITe, you can get a larger chunk of your market
               – no matter where you are in the world.
           </p>
           <div className={styles.spacer20}></div>
           <div className={styles.columns + ' ' + styles.grid + ' ' + styles.social + ' ' + styles.mcolumns}>
              <a href="https://web.facebook.com/biteagency.pro"><FaFacebook/></a> 
              <a href="https://www.instagram.com/biteagency.pro/"><FaInstagram/></a> 
              <a href=""><FaLinkedin/></a>
           </div>
        </div>
        <div className={styles.columns3 + ' ' + styles.footerGridBox}>
          <a href="">
            <div className={styles.columns + ' ' + styles.mcolumns  + ' ' + styles.grid + ' ' + styles.divItem}>
                <div className={styles.columns20 + ' ' + styles.footerIcons}>
                   <MdOutlineQueryStats/>
                </div>
                 <div className={styles.columns80}>
                     <h6 className={styles.smHeading}>About us</h6>
                     <p className={styles.footerSmP}>
                        Fostering business growth through digital technologies. We are out to help you get a larger market chunk. Here's how
                     </p>
                </div>
            </div>
            </a>
            <a href="">
            <div className={styles.columns + ' ' + styles.mcolumns  + ' ' + styles.grid + ' ' + styles.divItem}>
                <div className={styles.columns20 + ' ' + styles.footerIcons}>
                   <MdOutlinePhonelink />
                </div>
                 <div className={styles.columns80}>
                     <h6 className={styles.smHeading}>Websites that sell</h6>
                     <p className={styles.footerSmP}>
                        Customer need focused, creatively designed, lightening fast performance.
                     </p>
                </div>
            </div>
            </a>
            <a href="">
            <div className={styles.columns + ' ' + styles.mcolumns  + ' ' + styles.grid + ' ' + styles.divItem}>
                <div className={styles.columns20 + ' ' + styles.footerIcons}>
                   <MdOutlineForum />
                </div>
                 <div className={styles.columns80}>
                     <h6 className={styles.smHeading}>Persuasive content</h6>
                     <p className={styles.footerSmP}>
                        The sales process begins when you connect with your customers. We identify needs and address them, persuasively.
                     </p>
                </div>
            </div>
            </a>
        </div>
        <div className={styles.columns3 + ' ' + styles.footerGridBox}>
          <a href="">
            <div className={styles.columns + ' ' + styles.mcolumns  + ' ' + styles.grid + ' ' + styles.divItem}>
                <div className={styles.columns20 + ' ' + styles.footerIcons}>
                   <MdOutlineRadar />
                </div>
                 <div className={styles.columns80}>
                     <h6 className={styles.smHeading}>Ads that count</h6>
                     <p className={styles.footerSmP}>
                        If your ads and post get skipped, you just wasted money. We cut the waste with creative advertising.
                     </p>
                </div>
            </div>
            </a>
            <a href="">
            <div className={styles.columns + ' ' + styles.mcolumns  + ' ' + styles.grid + ' ' + styles.divItem}>
                <div className={styles.columns20 + ' ' + styles.footerIcons}>
                   <MdOutlineMarkAsUnread />
                </div>
                 <div className={styles.columns80}>
                     <h6 className={styles.smHeading}>CRM</h6>
                     <p className={styles.footerSmP}>
                        Make the most of your advertising dollars with returning customers.
                     </p>
                </div>
            </div>
            </a>
            <a href="#contact">
            <div className={styles.columns + ' ' + styles.mcolumns  + ' ' + styles.grid + ' ' + styles.divItem}>
                <div className={styles.columns20 + ' ' + styles.footerIcons}>
                   <MdOutlineCall />
                </div>
                 <div className={styles.columns80}>
                     <h6 className={styles.smHeading}>Ready for real results?</h6>
                     <p className={styles.footerSmP}>
                         Leave us a message right away. We are the BITe for your larger market chunk.
                     </p>
                </div>
            </div>
            </a>
            <div className={styles.mspacer}></div> <div className={styles.mspacer}></div> <div className={styles.mspacer}></div> <div className={styles.mspacer}></div>      
        </div>
    </div>
    <div className={styles.spacer50}></div> 
    <div className={styles.mspacer}></div> <div className={styles.mspacer}></div> <div className={styles.mspacer}></div> 
    <div className={styles.dHide}>© Bite Agency</div>
  </section>
  );
  
return footer;
}

export default Footer;