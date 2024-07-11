import React, { useState, useRef, lazy } from 'react';
import styles from './assets/css/contactForm.module.css'
import emailjs from '@emailjs/browser';
import  Swal from 'sweetalert2';
import './assets/css/alert.css';


export function MyForm() {
  const [inputs, setInputs] = useState({});
  const form = useRef();
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
          
    emailjs
      .sendForm('service_794sl1o', 'template_oadknqz', form.current, {
        publicKey: 'vB4RH1aFeI87Kt3O-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Thank you!",
            customClass: "myAlert",
            text: "Your details have been received. You will get a response from us within 24 hours",
            icon: "success",
            timer: "3000",
            timerProgressBar: true,
            timerProgressBarColor:"#9fddfe"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Something went wrong",
            customClass: "myAlert",
            text: "Please try filling the form again.",
            icon: "error",
          });
        },
      );
  };
  
  const handleSubmit = (e) => {
   /*console.log(JSON.stringify(inputs)); // Show inputs as JSON string*/
  };


  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form} >
        <fieldset>
          <legend>Personal Information</legend>
          <div className={styles.spacer20}></div>
          <div className={styles.flex}>
            <label className={styles.columns50}>First Name <span style={{color:'red'}}>*</span> <br/>
                <input
				  type="text"
				  name="FIRSTNAME"
				  value={inputs.FIRSTNAME || ""}
				  onChange={handleChange}
				  placeholder="Your First Name"
				  required
				/>
      		</label>
      		<label className={styles.columns50}>Last Name <span style={{color:'red'}}>*</span>  <br/>
                <input
				  type="text"
				  name="LASTNAME"
				  value={inputs.LASTNAME || ""}
				  onChange={handleChange}
				  placeholder=" Your Last Name"
				  required
				/>
      		</label>
      	   </div>
      	   <div className={styles.flex}>
      	   <label className={styles.columns50}>Email Address <span style={{color:'red'}}>*</span>  <br/>
                <input
				  type="mail"
				  name="EMAIL"
				  value={inputs.EMAIL || ""}
				  onChange={handleChange}
				  placeholder="Your Email Address"
				  required
				/>
      		</label>
      		<label className={styles.columns50}>Phone <span style={{color:'red'}}>*</span> <br/>
                <input
				  type="tel"
				  name="PHONE"
				  value={inputs.PHONE || ""}
				  onChange={handleChange}
				  placeholder="Your Phone Number"
				  required
				/>
      		</label>
     		</div>
      	</fieldset>
<div className={styles.spacer50}></div>
      	<fieldset>
          <legend>Business Information</legend>
          <div className={styles.spacer20}></div>
          <div className={styles.flex}>
            <label className={styles.columns50}>Company Name <span style={{color:'red'}}>*</span> <br/>
                <input
				  type="text"
				  name="COMPANYNAME"
				  value={inputs.COMPANYNAME || ""}
				  onChange={handleChange}
				  placeholder="Your Company/Business Name"
				  required
				/>
      		</label>
      		<label className={styles.columns50}>Company Email <span style={{color:'red'}}>*</span>  <br/>
                <input
				  type="mail"
				  name="COMPANYEMAIL"
				  value={inputs.COMPANYEMAIL || ""}
				  onChange={handleChange}
				  placeholder="Your Organisation/Business Email Address"
				  required
				/>
      		</label>
      	   </div>
      	  <div className={styles.flex}>
      	  <div  className={styles.columns50}>
      	   <p>Do you have a website?<span style={{color:'red'}}>*</span></p><br/>
      	      <label for="yes" >Yes
			  <input type="radio" id="yes" name="WEBSITE" value="YES" onChange={handleChange}
				  required/>
			  </label>
			<label for="no" >No
			  <input type="radio" id="no" name="WEBSITE" value="NO"
				  onChange={handleChange}
				  required
				/>
				</label>
				<br/>
		    </div>
      		<label className={styles.columns50}>Website link <br/>
                <input
				  type="url"
				  name="WEBSITELINK"
				  value={inputs.WEBSITELINK || ""}
				  onChange={handleChange}
				  placeholder="Please input the link to your website."
				/>
      		</label>
     		</div>
     		<div  className={styles.columns100}>
     		<div className={styles.divider}></div>
      	   <p><strong>Which service(s) do you require?</strong> (Select all that apply)<span style={{color:'red'}}>*</span></p><br/>
      	          		<div className={styles.flex}>
      	      <label for="web" >Creative website design
			  <input type="checkbox" id="web" name="SERVICE1" value="WEBSITE DESIGN" className={styles.checkbox}
			    onChange={handleChange}
			  />
			  </label></div>
			     		<div className={styles.flex}>
			<label for="webred" >Optimise my current website for conversions. (Website redesign)
			  <input type="checkbox" id="webred" name="SERVICE2" value="WEBSITE REDESIGN" className={styles.checkbox}
				  onChange={handleChange}
				/>
				</label>
				</div>
				     		<div className={styles.flex}>
				<label for="content" >Content that connects with my audience
			  <input type="checkbox" id="content" name="SERVICE3" value="CONTENT" className={styles.checkbox}
			    onChange={handleChange}
			  />
			  </label></div>
			     		<div className={styles.flex}>
			<label for="mark" >Help me reach my <i style={{backgroundColor:'#9fddfe', padding:'0 5px', color:'#1f1f1f', marginRight:'3px'}}>actual</i> customers. (Creative marketing)
			  <input type="checkbox" id="mark" name="SERVICE4" value="CREATIVE MARKETING" className={styles.checkbox}
				  onChange={handleChange}
				/>
				</label></div>
				     		<div className={styles.flex}>
			<label for="rel" >Build a relationship with my customers</label>
			  <input type="checkbox" id="rel" name="SERVICE5" value="CRM" className={styles.checkbox}
				  onChange={handleChange}
				/>	
		    </div>
	        </div>
      		<div className={styles.divider}></div>
      		  <label for="bud" >What is your monthly marketing budget?<span style={{color:'red'}}>*</span></label>
			  <select id="bud" name="BUDGET" 
				  onChange={handleChange}
				  required>
				  <option>Select a budget value</option>
				  <option>Less than a $1000</option>
				  <option>$1000 - $2000</option>
				  <option>$2000 - $5000</option>
				  <option>$5000 - $10000</option>
				  <option>More than $10000</option>
				</select>
			
			<label for="details" >Please give specific details concerning your business needs
			  <br/><textarea id="details" name="DETAILS" rows="3" className={styles.textarea}
				  onChange={handleChange}
				/>
				</label>	
      	</fieldset>
      <input className={styles.submit} type="submit" />
    </form>
  );
}

function contactForm() {
  return <MyForm />;
}

export default contactForm;