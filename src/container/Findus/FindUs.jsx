import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="content">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Find Up
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>
          Opening HoursSG
        </p>
        <p className="p__cormorant">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__cormorant">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button" type="button" style={{ marginTop: '2rem' }}>
        Visit us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;