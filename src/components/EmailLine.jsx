/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import saveEmail from './functions/saveEmail'
import success from '../assets/success.svg'

function EmailLine() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(0)
    const isValid =(emailToValidate)=>{
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regEmail.test(emailToValidate) && email.length > 0){
           saveEmail({"email":email});
           setError(2);
        }
        else{
          setError(1)
        }
    }
    const componentStyle = ()=>{
      if(error === 1){
        return(
        {opacity:"1"}
        )
      } 
      else {
        return(
          {opacity:"0"}
        )
      }
    }

    if(error !== 2){

        return (
            <div className="container__left_item">

        {
            <div className="container__left_errorMessage" style={componentStyle()}>Ivalid email address</div>
        }
        <label htmlFor="id_email">
      <input
        className='container__left_input'
        type="email"
        name="email"
        id="id_email"
        autoComplete="off"
        value={email}
        onChange={(e)=>{setEmail(e.target.value);setError(0)}}
        placeholder='Enter your email address'
        /></label>
    <button className='container__left_button' onClick={()=>isValid(email)}>Get Referal Link</button>
        </div>
  )
}
if(error===2){
    return(
        <div className="container__left_item">
        {
            <div className="container__left_successMessage" >
                <img src={success} alt="success" />
                <p>Your email is confirmed</p>
            </div>
        }
        <div className="container__left_referralLink">

        <label htmlFor="id_referral">
      <input
        className='container__left_input'
        name="referral"
        id="id_referral"
        value={'https://ratepunk.com/referral'}
        disabled
        /></label>
    <button className='container__left_button' onClick={() =>  navigator.clipboard.writeText('https://ratepunk.com/referral')}>Copy</button>
        </div>
        </div>

    )
}
}

export default EmailLine