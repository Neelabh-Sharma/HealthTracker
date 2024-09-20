import React from "react";

function Header() {
  return (
    <div className="h-full w-full bg-gray-50 drop-shadow-lg ">
      <div className="h-full w-full flex flex-row justify-evenly items-center">
        <div className=""></div>
        <div className="text-3xl font-sans	font-bold capitalize 	">
          <i class="fa-solid fa-bars-progress fs-6 me-4"></i>
          Health Tracker
        </div>
        <div className="">
          <button
            type="button"
            class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <i class="fa-solid fa-receipt me-2"></i>
            Add Record
          </button>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
