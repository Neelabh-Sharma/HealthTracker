import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Sidebar() {
  return (
    <div className="h-full md:container md:mx-auto drop-shadow-lg  overscroll-none bg-gray-50 ">
      <div className="h-full w-full grid grid-row-12 ">
        <div className="row-span-1">
          <div className="font-sans font-semibold uppercase ms-4 cursor-pointer text-2xl mt-8">
            <i class="fa-solid fa-bars-progress  me-2"></i>
            DashBoard
          </div>
        </div>
        <div className="row-span-8">
          <div className=" flex flex-col gap-y-8 mt-6">
            <div className="font-sans  capitalize ms-4 cursor-pointer  text-xl  hover:bg-gray-100">
              <Link to="/">
                <i class="fa-solid fa-laptop-medical me-2"></i>
                Health Status
              </Link>
            </div>
            <div className="font-sans capitalize ms-4 cursor-pointer  text-xl hover:bg-gray-100 ">
              <Link to="/expensive">
                <i class="fa-solid fa-chart-simple me-2"></i>
                expensive
              </Link>
            </div>
            <div className="font-sans capitalize ms-4 cursor-pointer  text-xl hover:bg-gray-100 ">
              <Link to="/doctorConsult">
                <i class="fa-solid fa-user-doctor me-2"></i>
                Doctors Consult
              </Link>
            </div>
            <div className="font-sans capitalize ms-4 cursor-pointer  text-xl hover:bg-gray-100">
              <Link to="/checkup">
                <i class="fa-solid fa-heart-pulse me-2"></i>
                Check Up
              </Link>
            </div>
            <div className="font-sans capitalize ms-4  cursor-pointer text-xl hover:bg-gray-100 ">
              <Link to="/recomendation">
                <i class="fa-solid fa-comment-medical me-2"></i>
                Recommendation
              </Link>
            </div>
          </div>
        </div>
        <div className="row-span-3">
          <div className="flex flex-col gap-y-4">
            <div className="font-sans capitalize ms-4 cursor-pointer  text-xl hover:bg-gray-100 ">
              <Link to="/setting">
                <i class="fa-solid fa-gear me-2"></i>
                Settings
              </Link>
            </div>
            <div className="font-sans capitalize ms-4 cursor-pointer  text-xl  hover:bg-gray-100 ">
              <Link to="/help">
                <i class="fa-regular fa-message me-2"></i>
                Help
              </Link>
            </div>
            <div className="font-sans capitalize ms-4  cursor-pointer text-xl hover:bg-gray-100 ">
              <Link to="/login">
                <i class="fa-solid fa-user me-2"></i>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
