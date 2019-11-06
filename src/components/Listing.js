import React, { useState, useEffect } from "react";
import samplePhoto from "../static/img/sample_photo.png";
import listingData from "../data/listing.json";
import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

const Listing = props => {
  const [listing, setListing] = useState(listingData);
  // console.log(listingData);
  return (
    <div className="listings my-5">
      <div className="mb-4">
        <h4 className="d-unset">LATEST JOBS IN CEBU</h4>
        <span className="float-right">
          <i className="fa fa-search text-muted"></i>
          <input
            type="text"
            className="input-lg pb-2"
            placeholder="Search here..."
          />
        </span>
      </div>
      <Table responsive>
        <tbody>
          {listing.map((listItem, index) => (
            <tr className="bg-white">
              <td>
                <img
                  src={samplePhoto}
                  className="img-fluid float-left mr-2"
                  alt="logo-sample"
                />
                <h5 className="pt-2">{listItem.title}</h5>
                <div>${listItem.price}</div>
              </td>
              <td>
                <small>
                  <i class="far fa-clock mr-1"></i>
                  Expire: {listItem.expiry}
                </small>
              </td>
              <td>
                <small>
                  <i class="far fa-calendar-check mr-1"></i>
                  {listItem.date}
                </small>
              </td>
              <td>
                <Link
                  className="btn btn-outline-info"
                  to={`job#${slugify(listItem.title)}`}
                >
                  Grab Now!
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {listing.map((listItem, index) => (
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
            <a
              className="btn btn-outline-info"
              href={`/job/${slugify(listItem.title)}`}
            >
              Grab Now!
            </a>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Listing;
