# React Restaurant 
Mediterranean food restaurant
import React from 'react';
import { Link } from 'react-router-dom';


import { Container, Header } from 'semantic-ui-react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHeading from '../../components/SubHeading/SubHeading';
import MenuItem from '../../components/Menuitem/MenuItem';
import wine1 from '../../assets/wine.jpg';
import w2 from '../../assets/sp.png';
import w3 from '../../assets/w3.png';
import w4 from '../../assets/w4.png';
import w5 from '../../assets/w5.png';
import menu from '../../assets/menu.png';
import images from '../../constant/images' 
import './BestMenu.css';



const wines = [
    {
      image: 'images.wine1',
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
   
  
  
  
  
  


const BestMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

     <div style={{ marginTop: 15 }}>

      <Link to="/gallery">
        <button type="button" className="custom__button">View More</button>
      </Link>

    </div>
  </div>
);

export default BestMenu;
