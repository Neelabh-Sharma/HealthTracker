import React, { useState } from "react";
import Sidebar from "../../component/sidebar";
import Header from "../../component/Header";
import { useNavigate } from "react-router-dom";
function Checkup() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className="h-screen w-screen overscroll-x-none ">
          <div className="h-full w-full grid grid-cols-6">
            <div className="col-span-1">
              <Sidebar />
            </div>
            <div className="col-span-5">
              <div className="w-full h-20">
                <Header />
              </div>
              <div className="w-full ">home</div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Checkup;
