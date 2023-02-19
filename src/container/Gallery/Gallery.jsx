import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Slogan from '../../components/Slogan/Slogan';
import './Gallery.css';
import gallery01 from '../../assets/gallery01.png';
import gallery02 from '../../assets/gallery02.png';
import gallery03 from '../../assets/gallery03.png';
import gallery04 from '../../assets/gallery04.png';
import gallery06 from '../../assets/gallery06.jpg';
import gallery05 from '../../assets/gallery05.jpg';
import gallery07 from '../../assets/gallery07.jpg';
import gallery08 from '../../assets/gallery08.jpg';

/*Array of Gallery iamges*/

const img = [
  {
    id: 1,
    image: gallery02,
    title: 'Chicken Shawarma',
  },
  {
    id: 2,
    image: gallery01,
    title: 'Salade Turquoise',
  },
  {
    id: 3,
    image: gallery04,
    title: 'Patatas Bravas',
  },
  {
    id: 4,
    image: gallery03,
    title: 'Red Wine',
  },
  {
    id: 5,
    image: gallery05,
    title: 'Blu Osa',
  },
  {
    id: 6,
    image: gallery06,
    title: 'Seafood paella',
  },
  {
    id: 7,
    image: gallery07,
    title: 'Salade',
  },
  {
    id: 8,
    image: gallery08,
    title: 'Sotheby&apos,s',
  },
];

/* Function Gallery*/

const Gallery = () => {
  /*Use of React scrollref*/

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  /*End of React scrollref*/
  return (
    <div className="best-gallery flex__center">
      <div className="best-gallery-content">
        <Slogan />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-slogan" style={{ color: 'black', marginTop: '2rem', fontWeight: 'bold' }}>Here, you can see a variety of dishes, and why not choose between the complexities of British culture, sometimes seamlessly blended together, over an Ethiopian-brewed coffee, a bowl of Senegalese black-eyed pea stew, or spicy Corean plantains?</p>
      </div>

      <br />

      <div className="best-gallery-images">
        <div className="best-gallery-images_container" ref={scrollRef}>
          {[img.map(({ image, title, id }) => {
            return (
              <div className="best-gallery-images_card flex__center" key={id}>
                <a href="https://www.instagram.com/top_london_restaurants/?hl=en" target='blank'>
                  <img src={image} alt="img" />
                  <h5> {title} </h5> 
                </a>
                <BsInstagram className="gallery__image-icon" />
              </div>

            )
          })]};
        </div>
        <div className="best-gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );

};

export default Gallery;