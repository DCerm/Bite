import React from 'react';
import styles from './assets/css/bite-style.module.css';
import { MdLanguage, MdOutlineImportantDevices, MdOutlinePhonelink, MdOutlineQueryStats, MdOutlineCall, MdOutlineForum, MdOutlineMarkAsUnread, MdOutlineRadar, MdOutlinePhone, MdFacebook, MdInfoOutline } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const footer = (
  <>
    <section>
    <div>
    <div className={styles.spacer50}></div> 
    <div className={styles.columns + ' ' + styles.footerGrid}>
        <div className={styles.columns3}>
           <h5 className={styles.footerH}>BITe Agency</h5>
           <div className={styles.spacer30}></div> 
           <p className={styles.footerP}>
               BITe agency harnesses digital technologies to give you real results that grow your business.
               Our consumer psychology based methods ensure you aren't just spending money on digital technology,
               but earning good returns on your investments. With BITe, you can get a larger chunk of your market
               – no matter what level you are at.
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
                        Your marketing efforts go to waste when your ads and post get skipped. We cut down the waste with creative advertising.
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
                         Leave us a message right away. Take your business to the next level with innovative digital solutions. Get a larger market share with BITe.
                     </p>
                </div>
            </div>
            </a>
        </div>
    </div>
    <div className={styles.spacer50}></div> 
  </div>
  </section>
  <div className={styles.copyright+' '+styles.center}>©2024 BITe Agency | All Rights Reserved.</div>
  <div className={styles.mspacer}></div><div className={styles.mspacer}></div><div className={styles.mspacer}></div><div className={styles.mspacer}></div>
  </>
  );
  
return footer;
}

export default Footer;