import React from 'react';
import image from './ImagesFile/profile.jpg';
import Tilt from 'react-parallax-tilt'
export default function Image() {
  return (

    <div
      id="myimage"
      style={{
        maxWidth: '255px',
        margin: 'auto',
      }}
    >
      <Tilt>
      <img
        className="home-img"
        src={image}
        alt="profile image"
        style={{
          borderRadius: '50%',
          width: '100%',
          height: 'auto',
        }}
      />
      </Tilt>
      <style>
        {`
        @media only screen and (min-width: 768px) {
          #myimage {
            max-width: 300px;
          }
        }
      `}
      </style>
    </div>
  );
}
