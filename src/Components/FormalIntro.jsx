import React from 'react';

export default function FormalIntro() {
  return (
    <div id="user-detail-intro">
      <h3>A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / React.js / Node.js and some other cool libraries and frameworks.</h3>
      <style jsx>{`
        @media (max-width: 768px) {
          #user-detail-intro {
            font-size: 1.2rem;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          #user-detail-intro {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 420px) {
          #user-detail-intro {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
