import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Sectiontitle from '../section-title'
import './style.css'

import galimg1 from '../../images/gal/img-1.jpg'
import galimg3 from '../../images/gal/img-3.jpg'
import galimg4 from '../../images/gal/img-4.jpg'
import galimg5 from '../../images/gal/img-5.jpg'
import galimg6 from '../../images/gal/img-6.jpg'
import galimg7 from '../../images/gal/img-7.jpg'
import galimg8 from '../../images/gal/img-8.jpg'
import galimg9 from '../../images/gal/img-9.jpg'
import galimg10 from '../../images/gal/img-10.jpg'
import galimg11 from '../../images/gal/img-11.jpg'
import galimg14 from '../../images/gal/img-14.jpg'
import galimg16 from '../../images/gal/img-16.jpg'
import galimg17 from '../../images/gal/img-17.jpg'
import galimg18 from '../../images/gal/img-18.jpg'
import galimg19 from '../../images/gal/img-19.jpg'
import galimg20 from '../../images/gal/img-20.jpg'
import galimg21 from '../../images/gal/img-21.jpg'
import galimg22 from '../../images/gal/img-22.jpg'
import galimg23 from '../../images/gal/img-23.jpg'
import galimg24 from '../../images/gal/img-24.jpg'
import galimg25 from '../../images/gal/img-25.jpg'
import galimg26 from '../../images/gal/img-26.jpg'
import galimg27 from '../../images/gal/img-27.jpg'
import galimg28 from '../../images/gal/img-28.jpg'
import galimg29 from '../../images/gal/img-29.jpg'
import galimg30 from '../../images/gal/img-30.jpg'
import galimg31 from '../../images/gal/img-31.jpg'
import galimg32 from '../../images/gal/img-32.jpg'

const images = [
  {
    original: galimg1,
    thumbnail: galimg1,
  },
  // {
  //   original: galimg2,
  //   thumbnail: galimg2,
  // },
  {
    original: galimg3,
    thumbnail: galimg3,
  },
  {
    original: galimg4,
    thumbnail: galimg4,
  },
  {
    original: galimg5,
    thumbnail: galimg5,
  },
  {
    original: galimg6,
    thumbnail: galimg6,
  },
  {
    original: galimg7,
    thumbnail: galimg7,
  },
  {
    original: galimg8,
    thumbnail: galimg8,
  }, {
    original: galimg9,
    thumbnail: galimg9,
  }, {
    original: galimg10,
    thumbnail: galimg10,
  },
  {
    original: galimg11,
    thumbnail: galimg11,
  },
  // {
  //   original: galimg12,
  //   thumbnail: galimg12,
  // },
  // {
  //   original: galimg13,
  //   thumbnail: galimg13,
  // },
  { original: galimg14, thumbnail: galimg14, },
  // { original: galimg15, thumbnail: galimg15, },
  { original: galimg16, thumbnail: galimg16, },
  { original: galimg17, thumbnail: galimg17, },
  { original: galimg18, thumbnail: galimg18, },
  { original: galimg19, thumbnail: galimg19, },
  { original: galimg20, thumbnail: galimg20, },
  { original: galimg21, thumbnail: galimg21, },
  { original: galimg22, thumbnail: galimg22, },
  { original: galimg23, thumbnail: galimg23, },
  { original: galimg24, thumbnail: galimg24, },
  { original: galimg25, thumbnail: galimg25, },
  { original: galimg26, thumbnail: galimg26, },
  { original: galimg27, thumbnail: galimg27, },
  { original: galimg28, thumbnail: galimg28, },
  { original: galimg29, thumbnail: galimg29, },
  { original: galimg30, thumbnail: galimg30, },
  { original: galimg31, thumbnail: galimg31, },
  { original: galimg32, thumbnail: galimg32, },

];

class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="Gallery-section section-padding">
        <Sectiontitle section={'Nuestra galería'} />
        <div className="container">
          <div className="col">
            <ImageGallery items={images} useTranslate3D={true} showThumbnails={true} />
          </div>
        </div>
      </div >
    );
  }
}

export default Gallery;