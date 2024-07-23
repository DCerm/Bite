import React from 'react';
import styles from './assets/css/loader.module.css'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


function Loader() {
const Preloader = (
<div className={styles.loader}>
<div className={styles.svg_logo_wrapper}>
<svg className={styles.animlogo} height="200" width="530" xmlns="http://www.w3.org/2000/svg">
 <g transform="rotate(0 430 100)">
  <circle r="25" cx="265" cy="100" fill="transparent">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="265"
      to="430" 
      fill="freeze" />
  </circle>
  <circle r="20" cx="265" cy="100" fill="#000">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="265"
      to="430"
      fill="freeze" />
  </circle>
  <ellipse cx="262" cy="96" rx="10" ry="10" fill="#fff">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="262"
      to="427" 
      fill="freeze" />
  </ellipse>
  <ellipse cx="264" cy="98" rx="11" ry="12" fill="#">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="264"
      to="429" 
      fill="freeze" />
  </ellipse>
  <line x1="290" y1="100" x2="310" y2="102" className={styles.svg_logo_lines}>
    <animate
      attributeName="x1"
      begin="1s"
      dur=".5s"
      from="290"
      to="455" 
      fill="freeze" />
    <animate
      attributeName="x2"
      begin="1s"
      dur=".5s"
      from="310"
      to="475" 
      fill="freeze" />
  </line>
  <circle r="10" cx="313" cy="103" fill="#000">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="313"
      to="478" 
      fill="freeze" />
  </circle>
  <ellipse cx="312" cy="101" rx="5" ry="5" fill="#fff">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="312"
      to="477" 
      fill="freeze" />
  </ellipse>
  <ellipse cx="314" cy="103" rx="6" ry="7" fill="#">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="314"
      to="479" 
      fill="freeze" />
  </ellipse>
  <line x1="275" y1="77" x2="285" y2="50" className={styles.svg_logo_lines}>
    <animate
      attributeName="x1"
      begin="1s"
      dur=".5s"
      from="275"
      to="440" 
      fill="freeze" />
    <animate
      attributeName="x2"
      begin="1s"
      dur=".5s"
      from="285"
      to="450" 
      fill="freeze" />
  </line>
  <circle r="10" cx="286" cy="51" fill="#000">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="286"
      to="451" 
      fill="freeze" />
  </circle>
  <ellipse cx="285" cy="49" rx="5" ry="5" fill="#fff">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="285"
      to="450" 
      fill="freeze" />
  </ellipse>
  <ellipse cx="287" cy="51" rx="6" ry="7" fill="#">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="287"
      to="452" 
      fill="freeze" />
  </ellipse>
  <line x1="245" y1="85" x2="225" y2="73" className={styles.svg_logo_lines}>
    <animate
      attributeName="x1"
      begin="1s"
      dur=".5s"
      from="245"
      to="410" 
      fill="freeze" />
    <animate
      attributeName="x2"
      begin="1s"
      dur=".5s"
      from="225"
      to="390" 
      fill="freeze" />
  </line>
  <circle r="10" cx="226" cy="74" fill="#000">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="226"
      to="391" 
      fill="freeze" />
  </circle>
  <ellipse cx="224" cy="72" rx="5" ry="5" fill="#fff">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="224"
      to="389" 
      fill="freeze" />
  </ellipse>
  <ellipse cx="226" cy="74" rx="6" ry="7" fill="#">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="226"
      to="391" 
      fill="freeze" />
  </ellipse>
  <line x1="245" y1="110" x2="225" y2="120" className={styles.svg_logo_lines}>
    <animate
      attributeName="x1"
      begin="1s"
      dur=".5s"
      from="245"
      to="410" 
      fill="freeze" />
    <animate
      attributeName="x2"
      begin="1s"
      dur=".5s"
      from="225"
      to="390" 
      fill="freeze" />
  </line>
  <circle r="10" cx="226" cy="119" fill="#000">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="226"
      to="391" 
      fill="freeze" />
  </circle>
  <ellipse cx="224" cy="118" rx="5" ry="5" fill="#fff">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="224"
      to="389" 
      fill="freeze" />
  </ellipse>
  <ellipse cx="226" cy="120" rx="6" ry="7" fill="#">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="226"
      to="391" 
      fill="freeze" />
  </ellipse>
  <line x1="270" y1="125" x2="275" y2="140" className={styles.svg_logo_lines}>
    <animate
      attributeName="x1"
      begin="1s"
      dur=".5s"
      from="270"
      to="435" 
      fill="freeze" />
    <animate
      attributeName="x2"
      begin="1s"
      dur=".5s"
      from="275"
      to="440" 
      fill="freeze" />
  </line>
  <circle r="10" cx="275" cy="141" fill="#000">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="275"
      to="440" 
      fill="freeze" />
  </circle>
  <ellipse cx="274" cy="140" rx="5" ry="5" fill="#fff">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="274"
      to="439" 
      fill="freeze" />
  </ellipse>
  <ellipse cx="276" cy="142" rx="6" ry="7" fill="#">
    <animate
      attributeName="cx"
      begin="1s"
      dur=".5s"
      from="276"
      to="441" 
      fill="freeze" />
  </ellipse>
   <animateTransform
      attributeName="transform"
      begin="3s"
      dur=".8s"
      type="rotate"
      from="0 430 100"
      to="360 430 100"
      repeatCount="" />
 </g>
 <g className={styles.text}>
  <text x="30" y="150" opacity="0">BITe
    <animate attributeType="CSS" attributeName="opacity" from="0" to="1" begin="2s" dur="1s" fill="freeze"/>
  </text>
 </g>
 </svg> 
</div>
</div>
);
return Preloader
}

export default Loader;
