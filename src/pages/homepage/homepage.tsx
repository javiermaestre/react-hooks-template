/* React imports */
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <h1 className="cover-heading">Cover your page.</h1>
      <p className="lead">
        Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your
        own fullscreen background photo to make it your own.
      </p>
      <p className="lead">
        <button type="button" className="btn btn-lg btn-secondary">
          Learn more
        </button>
      </p>
    </div>
  );
};

export default Homepage;
