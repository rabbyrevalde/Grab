import React, { useState } from "react";
import samplePhoto from "../../static/img/sample_photo.png";
import listingData from "../../data/listing.json";
import { Link } from "react-router-dom";

import { Table } from "reactstrap";

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
        <h4 className="d-unset">Lorem impsum Lorem</h4>
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
                <h6 className="pt-2">{listItem.title}</h6>
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
    </div>
  );
};

export default Listing;
