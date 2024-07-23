import React from 'react';
import styles from './assets/css/mainMenu.module.css';

function mainMenu() {
const menu = (
  <div className={styles.menuContainer}>
    <div className={styles.logo}>
      <a href='' style={{cursor:'pointer'}}><div className={styles.blogo}> 
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="106" className={styles.slogo}>
<g className={styles.text}><text x="6" y="30">BITe</text></g>
<g><circle r="5" cx="86" cy="4" fill="transparent"></circle><circle r="4" cx="86" cy="20" className={styles.black}></circle><ellipse cx="85.4" cy="19.2" rx="2" ry="2" className={styles.white}></ellipse><ellipse cx="85.8" cy="19.6" rx="2.2" ry="2.4" className={styles.black}></ellipse><line x1="91" y1="20" x2="95" y2="20.4" ></line>
<circle r="2" cx="95.6" cy="20.6" className={styles.black}></circle><ellipse cx="95.4" cy="20.2" rx="1" ry="1" className={styles.white}></ellipse><ellipse cx="95.8" cy="20.6" rx="1.2" ry="1.4" className={styles.black}></ellipse><line x1="88" y1="15.4" x2="90" y2="10" ></line>
<circle r="2" cx="90.2" cy="10.2" className={styles.black}></circle><ellipse cx="90" cy="9.8" rx="1" ry="1" className={styles.white}></ellipse><ellipse cx="90.4" cy="10.2" rx="1.2" ry="1.4" className={styles.black}></ellipse><line x1="82" y1="17" x2="78" y2="14.6" ></line>
<circle r="2" cx="78.2" cy="14.8" className={styles.black}></circle><ellipse cx="77.8" cy="14.4" rx="1" ry="1" className={styles.white}></ellipse><ellipse cx="78.2" cy="14.8" rx="1.2" ry="1.4" className={styles.black}></ellipse><line x1="82" y1="22" x2="78" y2="24" s></line>
<circle r="2" cx="78.2" cy="23.8" className={styles.black}></circle><ellipse cx="77.8" cy="23.6" rx="1" ry="1" className={styles.white}></ellipse><ellipse cx="78.2" cy="24" rx="1.2" ry="1.4" className={styles.black}></ellipse><line x1="87" y1="25" x2="88" y2="28" ></line>
<circle r="2" cx="88" cy="28.2" className={styles.black}></circle><ellipse cx="87.8" cy="28" rx="1" ry="1" className={styles.white}></ellipse><ellipse cx="88.2" cy="28.4" rx="1.2" ry="1.4" className={styles.black}></ellipse>
<animateTransform id="op"
      attributeName="transform"
      begin="2s;op.end+5s"
      dur="1s"
      type="rotate"
      from="0 86 20"
      to="360 86 20"
 /></g></svg>
      </div>
      </a>
    </div>
    <div className={styles.menuItemsWrapper}>
      <ul className={styles.menuItems}>
        <li className={styles.menuItem}><a href='#home'>Home</a></li>
        <li className={styles.menuItem}><a href='#services'>Services</a></li>
        <li className={styles.menuItem}><a href='#contact'>Contact</a></li>
      </ul>
    </div>
    <div className={styles.MenuRightContact}>
      <a href="#contact"><button className={styles.menuContact}>I WANT RESULTS</button></a>
    </div>
  </div>
);

return menu
}

export default mainMenu;
