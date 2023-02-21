import React from 'react';
import Slogan from '../../components/Slogan/Slogan';
import MenuItem from '../../components/Menuitem/MenuItem';
import menu from '../../assets/menu.png';
import menu01 from '../../assets/menu01.png';
import menu02 from '../../assets/menu02.png';
import menu03 from '../../assets/menu03.png';
import './BestMenu.css';


// import Swiper core and required modules
import { Pagination, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-flip";
import "swiper/css/pagination";


/*data to map through each article*/

const wines = [
  {
    title: 'Vinosia Primitivo del salento',
    price: '£11.57',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '£59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '£44',
    tags: 'FR | 750 ml',
  },
  {

    title: 'Rhino Pale Ale',
    price: '£31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '£26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '£20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '£16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '£10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '£31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '£26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },];


/*Fonction bestMenu*/

const BestMenu = () => (
  <div className="best-specialMenu flex__center section__padding" id="menu">
    <div className="best-specialMenu-title">
      <Slogan title="Best Menu Good Appetite" />
      <h1 className="headtext__cormorant">Today&apos;s Menu </h1>
    </div>
    <div className="best-specialMenu-menu">
      <div className="best-specialMenu-menu_wine  flex__center">
        <p className="best-specialMenu-menu_heading">Wine & Beer</p>
        <div className="best-specialMenu_menu_items">

          {/* Mapping through the wine array to render each component */}

          {wines.map((wine, index) => (
            <MenuItem key={wine.title + index} image={wine.image} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

         {/* Today's MENU SWIPER */}


         <Swiper
        // install Swiper modules
        effect={"flip"}
        spaceBetween={30}
        slidesPerView={3}        
        pagination={{ clickable: true }}
        modules={[EffectFlip, Pagination]}
      >
        <SwiperSlide><img src={menu} alt="menu-img" />Paella </SwiperSlide>
        <SwiperSlide><img src={menu01} alt="menu-img" />Spanakopita</SwiperSlide>
        <SwiperSlide><img src={menu02} alt="menu-img" />Baklava</SwiperSlide>
        <SwiperSlide><img src={menu03} alt="menu-img" />Arancini</SwiperSlide>
      </Swiper>

      <div className="best-specialMenu-menu_cocktails  flex__center">
        <p className="best-specialMenu-menu_heading">Cocktails</p>
        {/* Mapping through the cocktails array */}

        <div className="best-specialMenu_menu_items">
          {cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    </div>

);

export default BestMenu;
