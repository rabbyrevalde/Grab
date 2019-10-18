import React, { useState, useEffect } from "react";
import samplePhoto from "../static/img/sample_photo.png";
import { Button } from "reactstrap";
import listingData from "../data/listing.json";

const Listing = props => {
  const [listing, setListing] = useState(listingData);
  // console.log(listingData);
  return (
    <div className="listings">
      {listing.map((listItem, index) => (
        <div className="listing" key={index}>
          <div className="listing-item">
            <img
              src={samplePhoto}
              className="img-fluid float-left mr-2"
              alt="logo-sample"
            />
            <h5>{listItem.title}</h5>
            <div>${listItem.price}</div>
          </div>
          <div className="listing-item">
            <small>
              <i class="far fa-clock mr-1"></i>
              Expire: {listItem.expiry}
            </small>
          </div>
          <div className="listing-item">
            <small>
              <i class="far fa-calendar-check mr-1"></i>
              {listItem.date}
            </small>
          </div>
          <div className="listing-item">
            <Button color="info">Grab Now!</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
