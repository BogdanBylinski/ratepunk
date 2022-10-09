import React from 'react'
import '../styles/_MainContent.scss'
import EmailContent from './EmailContent'
import invite from "../assets/invite.svg";
import voucher from "../assets/voucher.svg";
import collect from "../assets/collect-coins.svg";
import apple from "../assets/apple.svg";
import chrome from "../assets/chrome.svg"
import star from "../assets/star.svg"

function MainContent() {
  return (
    <div className="main">
      <div className="mainWrapper">

    <div className="container">
        <EmailContent ></EmailContent>
        <div className="container__right">
            <div className="container__right_item">
              <div className="container__right_item--img">
                <img src={invite} alt="invite friends" />
              </div>
              <div className="container__right_item--texts">
                <div className="steps">step 1</div>
                <div className="heading">Invite friends</div>
                <div className="text">Refer friends with your unique referral link. </div>
              </div>
            </div>
            <div className="container__right_item reverse">
              <div className="container__right_item--img">
                <img src={collect} alt="invite friends" />
              </div>
              <div className="container__right_item--texts">
                <div className="steps">step 2</div>
                <div className="heading">collect coins</div>
                <div className="text">Get 1 coin for each friend that installs our extension using your referral link.</div>
              </div>
            </div>
            <div className="container__right_item">
              <div className="container__right_item--img">
                <img src={voucher} alt="invite friends" />
              </div>
              <div className="container__right_item--texts">
                <div className="steps">step 3</div>
                <div className="heading">get voucher</div>
                <div className="text">Redeem for $20 hotel booking voucher once you collect 20 coins.</div>
              </div>
            </div>
            
        </div>
    </div>
    </div>

    <div className="downloadLine">
      <div className="downloadLine__wrapper">
<a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">

      <div className="link">
        <div className="link__img">
          <img src={chrome} alt="chrome browser store" />
        </div>
        <div className="link__text">
          <div className="link__text_top">available in the</div>
          <div className="link__text_bottom">chrome web store</div>
        </div>
      </div>
</a>
<a href="https://apps.apple.com/app/ratepunk/id1607823726">

      <div className="link">
        <div className="link__img">
    <img src={apple} alt="apple app store" />
        </div>
        <div className="link__text">
          <div className="link__text_top">available in the</div>
          <div className="link__text_bottom">apple app store</div>
        </div>
      </div>
</a>
      <div className="starsLine">
        <div className="starsLine__stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div className="starsLine__text">
          <p>Chrome Store reviews</p>
        </div>
      </div>
    </div>
    </div>
      </div>
  )
}

export default MainContent