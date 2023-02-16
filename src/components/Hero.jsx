import React from "react";
import './Hero.css'
import interiorSide from "../assests/interior-side.jpg"
import interior from '../assests/interior.jpg'
import bar from '../assests/bar.jpg'
export default function Hero() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
  return ( 
  <div class="swiper-container mySwiper">
  <div class="swiper-wrapper">
      <div class="swiper-slide">
          <img src={interiorSide} alt="" />
      </div>
      <div class="swiper-slide">
          <img src={interior} alt="" />
      </div>
      <div class="swiper-slide">
          <img src={bar} alt="" />
      </div>

  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>
);
}

