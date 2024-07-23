import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Loader from './loader.js';
import mainMenu from './mainMenu.js';
import styles from './assets/css/bite-style.module.css';
import gear from './assets/settings.png';
import Toggle from './toggle.js';
import contactForm from './contactForm.js';
import Footer from './footer.js';
const isOsSettingDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function Content() {
const [isDark, setIsDark] = useState(isOsSettingDarkTheme);
let mode='';
return (
<div className={styles.BiteApp} data-theme={isDark ? "dark" : "light"}>
      <div className={styles.appMenu}>
        <div className={styles.appMenuItems}>
           <a href="#home">Home</a>
           <a href="#services"><div>Services</div></a>
           <a href="#contact"><div>Contact</div></a>
        </div>
        <div className={styles.bottomAligned}>
           <div className={styles.toggle + ' ' + styles.flcenter}>
           <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />{isDark? mode="Light mode" :  mode="Dark mode"}
           </div>
        </div>
       </div>
      <div className={styles.appScreen} id="home">
        <div className={styles.actual}>
         {mainMenu()} 
         
            {/*/////////////////////////////////////HERO///////////////////////////////////////////////////////////*/}
          <section><div className={styles.hero}>
                <div className={styles.heroLeft}>
                    <h1>Get Actual Results with <br /> Innovation + Technology<span style={{color:'#8093f1'}}>.</span></h1>    
                </div>
                <div className={styles.heroRight}>
                      <svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
                           <polyline  className={styles.chart} fill="none" stroke-miterlimit="10" strokeWidth="15"   points="10,400 100,250 250,300 360,50" />
                           <polygon points="340,45 376,60 385,0" className={styles.polygon} opacity="0"> 
                                <animate attributeType="CSS" attributeName="opacity" from="0" to="1" begin="1.3s" dur="0.35s" fill="freeze"/>
                           </polygon>
                      </svg>
                </div>
            </div></section>
            
              {/*///////////////////////////////////////BEYOND DESIGN/////////////////////////////////////////////////////////*/}
            <section><div className={styles.afterHero}>
                <div className={styles.columns + ' ' + styles.reverse + ' ' + styles.mc}>
               <div className={styles.columns50}>
                 <div className={styles.mspacer}>
                 <a href="#contact"><button className={styles.contactButton}>I want results now &nbsp;&nbsp;
                         <svg height="10" width="70" xmlns="http://www.w3.org/2000/svg">
                             <path strokeWidth="2" fill="none" className={styles.buttonArrow} d="M0,5 L60,5 L60,0 L70,5 L60,10 L60,5"/>
                         </svg></button>
                    </a>
               </div></div>
               <div className={styles.columns50}>
                <div className={styles.spacer50}></div>
               <p>
               Beyond design, we build products that <i style={{backgroundColor:'#9fddfe', padding:'0 5px', color:'#1f1f1f', marginRight:'3px'}}>understand</i> 
               the psychology of your customers and speak uniquely with them.
               This significantly improves performance and conversions across all your digital footprints.
               </p>
               </div>
             </div>
          </div></section>
            <div className={styles.spacer50}></div>
            
            {/*////////////////////////////////HARNESS TECH////////////////////////////////////////////////////////////////*/}
             <section className={styles.slideIn}><div className={styles.pad +' ' + styles.border + ' ' + styles.lightBulb}>
                <div className={styles.spacer50}></div>
                  <h1 className={styles.boldHeader}>We harness technology <img className={styles.spin + ' ' + styles.gear} src={gear}/> to grow your business and make you money.</h1>
                   
                         <div className={styles.columns + ' ' + styles.top}>
                             <div className={styles.columns50}>
                                  
                              </div>
                            
                                <div className={styles.columns50 + ' ' + styles.mc}>
                                <div className={styles.spacer50}></div>
                           <p>
                            Our innovative approach helps you <i style={{backgroundColor:'#9fddfe', padding:'0 5px', color:'#1f1f1f', marginRight:'3px'}}>connect</i> 
                            with your target audience, drive conversions and build relationships.
                            </p>
                            <p>
                            We use a strong blend of creativity, technical proficiency and understanding of user psychology to build products / 
                            content that resonates with your audience and drive conversions. 
                            </p>
                            <div className={styles.spacer20}></div>
                            <a href="#contact"><button className={styles.contactButton}>I want results now &nbsp;&nbsp;
                                  <svg height="10" width="70" xmlns="http://www.w3.org/2000/svg">
                                     <path strokeWidth="2" fill="none" className={styles.buttonArrow} d="M0,5 L60,5 L60,0 L70,5 L60,10 L60,5"/>
                                  </svg></button>
                            </a>
                          <div className={styles.spacer50}></div>
                        </div>
                   </div>
                </div>
            </section>
            
        {/*////////////////////////////////AFTER PARTNERING////////////////////////////////////////////////////////////////*/}
             <section><div className={styles.spacer50}></div><div className={styles.spacer20}></div>
                  <div className={styles.borderBottom}>
                   <h3 className={styles.bigHeading + ' ' + styles.center}>After partnering with us, our clients typically experience...</h3>
                   <div className={styles.spacer30}></div>
                   <div className={styles.columns + ' ' + styles.mHide}>
                       <div className={styles.columns25 + ' ' + styles.center}>
                          <p> <span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>+</span> 60% </span><br/>increase in traffic</p>
                       </div>
                       <div className={styles.columns25 + ' ' + styles.center}>
                           <p><span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>+</span> 70% </span><br/>leads generated</p>
                       </div>
                       <div className={styles.columns25 + ' ' + styles.center}>
                           <p><span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>-</span> 30% </span><br/>reduction in bounce rates</p>
                       </div>
                       <div className={styles.columns25 + ' ' + styles.center}>
                           <p><span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>+</span> 40%</span><br/>increase in conversions</p>
                       </div></div>
                       
                       {/*Mobile counters*/}
                        <div className={styles.mcolumns + ' ' + styles.dHide}>
                       <div className={styles.columns25 + ' ' + styles.center}>
                          <p> <span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>+</span> 60% </span><br/>increase in traffic</p>
                       </div>
                       <div className={styles.columns25 + ' ' + styles.center}>
                           <p><span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>+</span> 70% </span><br/>leads generated</p>
                       </div></div>
                       <div className={styles.mcolumns + ' ' + styles.dHide}>
                       <div className={styles.columns25 + ' ' + styles.center}>
                           <p><span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>-</span> 30% </span><br/>reduction in bounce rates</p>
                       </div>
                       <div className={styles.columns25 + ' ' + styles.center}>
                           <p><span className={styles.counter}><span className={styles.purple + ' ' + styles.counterIcon}>+</span> 40%</span><br/>increase in conversions</p>
                       </div></div>
           
           <div id="services" className={styles.spacer50}></div><div className={styles.spacer20}></div></div>
           </section>
    
            {/*////////////////////////////////HOW WE GET RESULTS////////////////////////////////////////////////////////////////*/}
            <section><div className={styles.spacer50}></div>
                  <div className={styles.borderBottom}>
                   <h3 className={styles.bigHeading + ' ' + styles.mcenter}>Here is how we will get you results</h3>
                   <div className={styles.spacer30}></div>
                   <div className={styles.columns + ' ' + styles.grid}>
                       <div className={styles.columns3 + ' ' + styles.center}>
                           <div className={styles.gridBox + ' ' + styles.blueBg}>
                             <h6 className={styles.smHeading}>Creative websites that sell,<br/> always</h6>
                             <div className={styles.spacer20}></div>
                               
                                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      <rect x="10" y="10" width="280" height="180" rx="15" ry="15" fill="lightgrey" stroke="#lightgrey" strokeWidth="1" />
      <rect x="20" y="20" width="260" height="160" rx="10" ry="10" fill="#f4f4ed" />
      <rect x="20" y="20" width="260" height="20" fill="#8093f1" />
      <circle cx="30" cy="30" r="5" fill="red" />
      <circle cx="45" cy="30" r="5" fill="yellow" />
      <circle cx="60" cy="30" r="5" fill="green" />
      <rect x="30" y="50" width="240" height="30" fill="#b388eb" />
      <rect x="30" y="50" width="240" height="25" fill="#9fddfe">
        <animate attributeName="fill" values="" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="150" y="70" fontFamily="Rosario" fontSize="15" fill="black" textAnchor="middle">
        Creative websites!
        <animate attributeName="fill" values="black" dur="2s" repeatCount="indefinite" />
      </text>
      <rect x="30" y="85" width="240" height="85" fill="#f4f4ed" />
      <text x="40" y="135" fontFamily="Nunito" fontSize="12" fill="black">
        Optimised for conversions,
        <animate attributeName="y" id="cw" from="135" to="105" dur="3s" begin="4s;cw.end+5s" repeatCount="" fill="freeze"/>
      </text>
      <text x="40" y="150" fontFamily="Nunito" fontSize="12" fill="black">
        Captivating designs,
        <animate attributeName="y" from="150" to="120" dur="3s" begin="4s;cw.end+5s" repeatCount="" fill="freeze"/>
      </text>
      <text x="40" y="165" fontFamily="Nunito" fontSize="12" fill="black">
        Lightening fast performance
        <animate id="" attributeName="y" from="165" to="135" dur="3s" begin="4s;cw.end+5s" repeatCount="" fill="freeze"/>
      </text>
    </svg>
                           </div>
                       </div>
                       <div className={styles.columns3 + ' ' + styles.center}>
                           <div className={styles.gridBox + ' ' + styles.purpleBg}>
                             <h6 className={styles.smHeading}>Content that connects with your customers</h6>
                             <div className={styles.spacer20}></div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      <rect x="10" y="10" width="280" height="180" rx="20" ry="20" fill="lightgrey" />
      <rect x="20" y="20" width="260" height="160" rx="15" ry="15" fill="#f4f4ed" />
      <rect x="20" y="20" width="260" height="20" fill="#8093f1" />
      <circle cx="30" cy="30" r="5" fill="#ff7675" />
      <circle cx="45" cy="30" r="5" fill="#ffeaa7" />
      <circle cx="60" cy="30" r="5" fill="#55efc4" />

      {/* Left section */}
      <g>
        <rect x="30" y="60" width="100" height="40" rx="10" ry="10" fill="#dfe6e9" />
        <text x="80" y="85" fontFamily="Nunito" fontSize="10" fill="#2d3436" textAnchor="middle">
          Engaging
        </text>
        <animateTransform attributeName="transform" type="translate" from="0 50" to="0 0" begin="scroll" dur="1s" fill="freeze" />
      </g>

      {/* Right section */}
      <g>
        <rect x="170" y="60" width="100" height="40" rx="10" ry="10" fill="#dfe6e9" />
        <text x="220" y="85" fontFamily="Nunito" fontSize="10" fill="#2d3436" textAnchor="middle">
          Content
        </text>
        <animateTransform attributeName="transform" type="translate" from="0 -50" to="0 0" begin="scroll" dur="1s" fill="freeze" />
      </g>

      {/* Bottom section */}
      <g>
        <rect x="50" y="120" width="200" height="40" rx="10" ry="10" fill="#9fddfe" />
        <text x="150" y="145" fontFamily="Nunito" fontSize="10" fill="#2d3436" textAnchor="middle">
          across your digital footprints
        </text>
        <animateTransform attributeName="transform" type="translate" from="-50 0" to="0 0" begin="scroll" dur="1s" fill="freeze" />
      </g>
    </svg>
                           </div>
                       </div>
                       <div className={styles.columns3 + ' ' + styles.center}>
                           <div className={styles.gridBox + ' ' + styles.lavBg}>
                             <h6 className={styles.smHeading}>Creative advertising to reach the right people</h6>
                             <div className={styles.spacer20}></div>
                               <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      {/* Background */}
      <rect x="10" y="10" width="280" height="180" rx="20" ry="20" fill="#f4f4ed" />
      <rect x="20" y="20" width="260" height="160" rx="15" ry="15" fill="#f4f4ed" />
 

      {/* Central circle representing creative advertising */}
      <circle cx="150" cy="100" r="40" fill="#dfe6e9">
        <animateTransform id="ac" attributeName="transform" type="scale" from="0.5" to="1" begin="4s" dur="1s" fill="freeze" />
      </circle>
      <text x="150" y="105" fontFamily="Nunito" fontSize="10" fill="#2d3436" textAnchor="middle">
        Creative Advertising
      </text>

      {/* Facebook icon */}
      <g>
        <circle cx="75" cy="60" r="20" fill="#3b5998" />
        <text x="75" y="70" fontFamily="Arial" fontSize="25" fontWeight="500" fill="white" textAnchor="middle">f</text>
        <animateTransform id="fb" attributeName="transform" type="translate" from="0 30" to="0 0" begin="4s;fb.end+3s" dur="1s" fill="freeze" />
      </g>

      {/* Instagram icon */}
      <g>
        <circle cx="225" cy="60" r="20" fill="#E1306C" />
        <rect x="215" y="50" width="20" height="20" fill="#fff" rx="5" ry="5" />
        <circle cx="225" cy="60" r="5" fill="#E1306C" />
        <circle cx="234" cy="50" r="2" fill="#E1306C" />
        <animateTransform id="ig" attributeName="transform" type="translate" from="0 -30" to="0 0" begin="4s;ig.end+3s" dur="1s" fill="freeze" />
      </g>

      {/* YouTube icon */}
      <g>
        <rect x="55" y="130" width="40" height="28" rx="5" ry="5" fill="#FF0000" />
        <polygon points="65,136.5 87,144 65,151.5" fill="white" />
        <animateTransform attributeName="transform" type="translate" from="30 0" to="0 0" begin="4s;ig.end+3s" dur="1s" fill="freeze" />
      </g>

      {/* Google icon */}
      <g>
        <circle cx="235" cy="140" r="20" fill="#4285F4" />
        <text x="235" y="147" fontFamily="Arial" fontSize="20" fill="white" textAnchor="middle">G</text>
        <animateTransform attributeName="transform" type="translate" from="-30 0" to="0 0" begin="4s;ig.end+3s" dur="1s" fill="freeze" />
      </g>

    </svg>
                           </div>
                       </div>
                </div><div className={styles.spacer20}></div>
                    <div className={styles.gridBox + ' ' + styles.blueBg + ' ' + ' ' + styles.columns}>
                              <div className={styles.columns20}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <style>
      {`
        .envelope { fill: #8093f1; }
        .flap { fill: #f4f4ed; }
        .background { fill: #9fddfe; }
      `}
    </style>
    <rect x="10" y="30" width="80" height="40" className="envelope" />
    <polygon points="10,30 50,60 90,30" className="flap">
      <animate id="crm" attributeName="points" values="10,30 50,60 90,30; 10,50 50,30 90,50; 10,30 50,60 90,30" dur="5s" begin="4s;crm.end+5s" />
    </polygon>
    <rect x="10" y="10" width="80" height="20" className="background" />
  </svg>
                              </div>
                              <div className={styles.columns80 + ' ' + styles.mcenter + ' ' + styles.gridBox  + ' ' + styles.mnopad}>
                                 <h6 className={styles.smHeading}>Customer relationship management (CRM)</h6>
                                 <div className={styles.spacer20}></div>
                                  <p className={styles.footerP}>We help you stay top of mind of your customers to keep them coming back.<br/>
                                  It's only half the results if you don't build a relationship that brings them back.
                                  </p>
                             </div>                               
                    </div>
                    
                       <div className={styles.spacer20}></div>
                       <div className={styles.center}>
                       <a href="#contact"><button className={styles.contactButton}>I want results now &nbsp;&nbsp;
                         <svg height="10" width="70" xmlns="http://www.w3.org/2000/svg">
                             <path strokeWidth="2" fill="none" className={styles.buttonArrow} d="M0,5 L60,5 L60,0 L70,5 L60,10 L60,5"/>
                         </svg></button>
                    </a>
                <div className={styles.spacer50}></div>
              </div>
        </div>
            </section>
         {/*////////////////////////////////BRANDS////////////////////////////////////////////////////////////////*/}
            <section style={{overflow:"hidden"}}><div className={styles.spacer50}></div>
                  <div className={styles.borderBottom + ' ' + styles.center}>
                      <h3 className={styles.bigHeading}>We've done it for brands like yours, let's do it for you too.</h3>
                      <div className={styles.spacer30}></div>   
                      <div className={styles.columns + ' ' + styles.grid + ' ' + styles.slider + ' ' + styles.fcenter  + ' ' + styles.row}>
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720591164/benfik-removebg-preview_kmwd9q.png" />
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1718744619/Screenshot_2023-10-10_at_04.57.55-removebg-preview_qticfa.png" />
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1705443462/vivaLuxe-logo.webp" />
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1708076254/IMG_0186-removebg-preview.png" />
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594535/finalbionic-01_vrydus.png" />
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594374/Image-PNG-Transparent-Exact-Large_xyiqfd.png" />
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592917/Lasht-n-2900-x-850-px-4_i19kcd.svg" />
                          <img src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592643/Raven-Gold_logo-removebg-preview-1-e1664598593566_mj6gvx.png" />
                          {/*repeat for loop*/}
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720591164/benfik-removebg-preview_kmwd9q.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1718744619/Screenshot_2023-10-10_at_04.57.55-removebg-preview_qticfa.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1705443462/vivaLuxe-logo.webp" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1708076254/IMG_0186-removebg-preview.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594535/finalbionic-01_vrydus.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594374/Image-PNG-Transparent-Exact-Large_xyiqfd.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592917/Lasht-n-2900-x-850-px-4_i19kcd.svg" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592643/Raven-Gold_logo-removebg-preview-1-e1664598593566_mj6gvx.png" />
                           {/*repeat for loop*/}
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720591164/benfik-removebg-preview_kmwd9q.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1718744619/Screenshot_2023-10-10_at_04.57.55-removebg-preview_qticfa.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1705443462/vivaLuxe-logo.webp" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1708076254/IMG_0186-removebg-preview.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594535/finalbionic-01_vrydus.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594374/Image-PNG-Transparent-Exact-Large_xyiqfd.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592917/Lasht-n-2900-x-850-px-4_i19kcd.svg" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592643/Raven-Gold_logo-removebg-preview-1-e1664598593566_mj6gvx.png" />
                          {/*repeat for loop*/}
                          <img className={styles.mHide} className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720591164/benfik-removebg-preview_kmwd9q.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1718744619/Screenshot_2023-10-10_at_04.57.55-removebg-preview_qticfa.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1705443462/vivaLuxe-logo.webp" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1708076254/IMG_0186-removebg-preview.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594535/finalbionic-01_vrydus.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720594374/Image-PNG-Transparent-Exact-Large_xyiqfd.png" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592917/Lasht-n-2900-x-850-px-4_i19kcd.svg" />
                          <img className={styles.mHide} src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1720592643/Raven-Gold_logo-removebg-preview-1-e1664598593566_mj6gvx.png" />
                      </div> 
                      <div id="contact" className={styles.spacer50}></div>
                 </div>  
            </section>
     {/*////////////////////////////////CONTACT////////////////////////////////////////////////////////////////*/}
            <section><div className={styles.spacer50}></div>
                  <div className={styles.borderBottom}>
                      
                      <div className={styles.spacer30}></div>   
                      <div className={styles.columns + ' ' + styles.grid + ' ' + styles.fcenter + ' ' + styles.reverse + ' ' + styles.top}>
                          <div className={styles.columns70}>
                          <div className={styles.mspacer}></div>
                              {contactForm()}
                          </div>
                          <div className={styles.columns30 + ' ' + styles.sticky}>
                              <h3 className={styles.smHeading}>Real results start here</h3>
                              <div className={styles.spacer20}></div>
                              <p>
                                   Whatever you are looking to achieve, whether it is to get more traffic, reduce bounce rates
                                   or get more people to schedule a consultation with you, we
                                    <i style={{backgroundColor:'#9fddfe', padding:'0 5px', color:'#1f1f1f', marginRight:'3px'}}>guarantee</i> 
                                   we can improve your present outcomes by at least 30% within a period of 60 days. 
                                   If we don’t, we’ll work for you till we do.
                              </p>
                              
                          </div>
                      </div> 
                      <div className={styles.spacer50}></div>
                 </div>  
            </section>
            {/*/////////////////FOOTER///////////////////*/}
            {Footer()}
            
           {/*close actual app screen*/}
    </div>
   </div>
</div>
);
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecontent: <Loader/>};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecontent: <Content/>})
    }, 3000)
  }
  
  render() {
    return (
      <>{this.state.favoritecontent}</>
    );
  }
}

const preloader = ReactDOM.createRoot(document.getElementById('Bite'));
preloader.render(<App/>);