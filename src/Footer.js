import React from 'react'
import './Footer.css';

function Footer() {


  return (
   
    <footer class="amazon-footer">
      <div class="amazon-footer-container">
        <div class="amazon-footer-lists">
          <div class="amazon-row">
            <div class="amazon-col  amazon-col--30">
              <a href="/" class="amazon-footer-logo"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" class="amazon-footer-logo-image" /></a>
            </div>
            <div class="amazon-col  amazon-col--20">
              <h4 class="amazon-footer-title">Our Products</h4>
              <ul class="amazon-footer-list">
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">
Amazon Music
Stream millions
of songs</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">AmazonGlobal
Ship Orders
Internationally</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">ComiXology
Thousands of
Digital Comics</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Prime Video Direct
Video Distribution
Made Easy	</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">	Amazon Advertising
Find, attract, and
engage customers</a></li>
              </ul>
            </div>
            <div class="amazon-col  amazon-col--20">
              <h4 class="amazon-footer-title">Other Services</h4>
              <ul class="amazon-footer-list">
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Sell products on Amazon</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Sell on Amazon Business</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Sell apps on Amazon</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Become an Affiliate</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Advertise Your Products</a></li>
              </ul>
            </div>
            <div class="amazon-col  amazon-col--30">
              <h4 class="amazon-footer-title">Your Orders</h4>
              <p class="amazon-footer-text">Your Account</p>
            </div>
          </div> 
        </div>
        <div class="amazon-sub-footer">
          <div class="amazon-row">
            <div class="amazon-col  amazon-col--50">
              <p class="amazon-footer-text">Copyright © {[ "now"|Date("Y") ]}</p>
            </div>
            <div class="amazon-col  amazon-col--50">
              <ul class="amazon-footer-list">
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Terms &amp; Conditions</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Cookies &amp; Internet Advertising</a></li>
                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Privacy Notice</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
  


export default Footer