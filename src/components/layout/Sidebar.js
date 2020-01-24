import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="my-5">
      <h4 className="my-3 border-bottom pb-2">Impsum Nanatsu</h4>
      <div className="job-categories">
        <ul className="list-unstyled">
          <li className="text-uppercase">
            <Link to="#">ACCOUNTING / FINANCE JOBS</Link>
          </li>
          <li className="text-uppercase">
            <Link to="#">IT/COMPUTER JOBS</Link>
          </li>
          <li className="text-uppercase">
            <Link to="#">MARITIME/SEABASED JOBS</Link>
          </li>
          <li className="text-uppercase">
            <Link to="#">SKILLED WORK/TECHNICAL JOBS</Link>
          </li>
          <li className="text-uppercase">
            <Link to="#">OTHER JOBS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
