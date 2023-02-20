import React from "react";
import Top from '../assets/heroimg.png';
import {Image} from 'semantic-ui-react';

export default function Hero() {
  return <div>
      <Image src={Top} style={{width:'100%', opacity:'80%', display:'absolute', zIndex:'0'}}></Image>
  </div>;
}
