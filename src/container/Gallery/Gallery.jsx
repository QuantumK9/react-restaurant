import { Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import React from 'react';
import Slogan from '../../components/Slogan/Slogan';
import gallery01 from '../../assets/gallery01.png';
import gallery02 from '../../assets/gallery02.png';
import gallery03 from '../../assets/gallery03.png';
import gallery05 from '../../assets/gallery05.jpg';
import gallery07 from '../../assets/gallery07.jpg';
import gallery06 from '../../assets/gallery06.jpg';
import gallery04 from '../../assets/gallery04.png';
import gallery08 from '../../assets/gallery08.jpg';
import gallery09 from '../../assets/gallery09.jpg';
import gallery10 from '../../assets/gallery10.jpg';
import gallery11 from '../../assets/gallery11.jpg';
import gallery12 from '../../assets/gallery12.jpg';
import gallery13 from '../../assets/gallery13.png';
import gallery14 from '../../assets/gallery14.jpg';
import gallery15 from '../../assets/gallery15.jpg';
import gallery16 from '../../assets/gallery16.jpg';
import gallery17 from '../../assets/gallery17.jpg';
import gallery18 from '../../assets/gallery18.jpg';
import gallery19 from '../../assets/gallery19.jpg';
import gallery20 from '../../assets/gallery20.jpg';
import './Gallery.css';

/*Array of Gallery iamges*/


const img = [
  {
    image: gallery01,
    id: 1,
    title: 'Chicken Shawarma',
  },
  {
    id: 2,
    image: gallery02,
    title: 'Salade Turquoise',
  },
  {
    id: 3,
    image: gallery03,
    title: 'Patatas Bravas',
  },
  {
    id: 4,
    image: gallery04,
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
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p-slogan" style={{ color: 'var(--color-darkhaki)', marginTop: '2rem', fontWeight: 'bold' }}>Here, you can see a variety of dishes and drinks, and why not choose between the complexities of British culture, sometimes seamlessly blended together, over an Ethiopian-brewed coffee, a bowl of Senegalese black-eyed pea stew, or spicy Corean plantains?</p>
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

 
          <div className='row-menu' >
            <Container text>
              {/* <h3 class="ui header"></h3> */}
              <Header as='h2'>DISHES</Header>
              <div class="ui divider"></div>
              <div class="ui two column doubling stackable grid container">
                <div className="row">
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'>Bourbon Street</Header>
                      <div className="text-center"><img src={gallery09} alt="img" />
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="ui card">
                      <Header as='h3'><p>Chicken Bryan</p></Header>
                      <div className="text-center"><img src={gallery10} alt="img" /></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'><p>Garden Bar</p></Header>
                      <div className="text-center"><img src={gallery11} alt="img" /></div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="ui card">
                      <Header as='h3'><p> The Ultimate Feast</p></Header>
                      <div className="text-center"><img src={gallery12} alt="img" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Container text>
              {/* <h3 class="ui header"></h3> */}
              <Header as='h2'>DESSERT</Header>
              <div class="ui divider"></div>
              <div class="ui two column doubling stackable grid container">
                <div className="row">
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'>Nopou Peul</Header>
                      <div className="text-center"><img src={gallery13} alt="img" /></div>
                    </div>
                  </div>
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'><p>Choco Cake</p></Header>
                      <div className="text-center"><img src={gallery14} alt="img" /></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'><p>Rosa D</p></Header>
                      <div className="text-center"><img src={gallery15} alt="img" /></div>
                    </div>
                  </div>
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'><p> CheeK Chese</p></Header>
                      <div className="text-center"><img src={gallery16} alt="img" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Container text>
              {/* <h3 class="ui header"></h3> */}
              <Header as='h2'>WINE</Header>
              <div class="ui divider"></div>
              <div class="ui two column doubling stackable grid container">
                <div className="row">
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'>Rose</Header>
                      <div className="text-center"><img src={gallery17} alt="img" /></div>
                    </div>
                  </div>
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'><p>Red Wine</p></Header>
                      <div className="text-center"><img src={gallery18} alt="img" /></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'><p>Corona</p></Header>
                      <div className="text-center"><img src={gallery19} alt="img" /></div>
                    </div>
                  </div>
                  <div className="column">
                    <div class="ui card">
                      <Header as='h3'><p> Liquor</p></Header>
                      <div className="text-center"><img src={gallery20} alt="img" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
{/* END of semantic-ui-react */}

      <div className="custom-button">
        <Link to="/Menu" style={{ transform: 'rotate(360deg)' }}>
          <button type="button" >View More</button>
        </Link>
      </div>
    </div>
  );
};


export default Gallery;