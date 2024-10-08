import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Sectiontitle from '../section-title'
import './style.css'

import galimg1 from '../../images/gal/img-1.jpg'
import galimg2 from '../../images/gal/img-2.jpg'
import galimg3 from '../../images/gal/img-3.jpg'
import galimg4 from '../../images/gal/img-4.jpg'
import galimg5 from '../../images/gal/img-5.jpg'
import galimg6 from '../../images/gal/img-6.jpg'


const images = [
  {
    original: galimg1,
    thumbnail: galimg1,
  },
  {
    original: galimg2,
    thumbnail: galimg2,
  },
  {
    original: galimg3,
    thumbnail: galimg3,
  },
  {
    original: galimg3,
    thumbnail: galimg3,
  },
  {
    original: galimg3,
    thumbnail: galimg3,
  },
  {
    original: galimg3,
    thumbnail: galimg3,
  },
  {
    original: galimg3,
    thumbnail: galimg3,
  },
  {
    original: galimg3,
    thumbnail: galimg3,
  },{
    original: galimg3,
    thumbnail: galimg3,
  },{
    original: galimg3,
    thumbnail: galimg3,
  },
  {
    original: galimg3,
    thumbnail: galimg3,
  },{
    original: galimg3,
    thumbnail: galimg3,
  },{
    original: galimg3,
    thumbnail: galimg3,
  },
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