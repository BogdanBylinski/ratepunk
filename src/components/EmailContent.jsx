/* eslint-disable no-useless-escape */
import React from 'react'
import "../styles/_EmailContent.scss"
import EmailLine from './EmailLine'

function EmailContent() {

    
    
  return (
    <div className="container__left">
      <div className="container__left_item">

        <div className="container__left_heading">Refer friends and get rewards</div>    
        <div className="container__left_text">Refer your lore friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs pur extension. Minimum cash-out at 20 coins.</div>
      </div>
      <EmailLine></EmailLine>
    <div className="container__left_smallText">Limit on max reward apply</div>
    </div>
  )
}

export default EmailContent