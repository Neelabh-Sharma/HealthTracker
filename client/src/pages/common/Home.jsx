import React, { useState } from "react";
import Sidebar from "../../component/sidebar";
import Header from "../../component/Header";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className="h-screen w-screen overscroll-x-none ">
          <div className="h-full w-full grid grid-cols-6">
            <div className="col-span-1">
              <Sidebar />
            </div>
            <div className="col-span-5">
              <div className="w-full h-20 ">
                <Header />
              </div>
              <div className="h-4/5 w-full  grid grid-row-6 ">
                 <div className="row-span-1 flex flex-row justify-around gap-x-4 pt-8">
                    <div className="h-4/5 w-1/6  rounded  bg-gray-50 drop-shadow-lg">
                      div
                    </div>
                    <div className=" h-4/5 w-1/6 rounded  bg-gray-50 drop-shadow-lg">
                      div
                    </div>
                    <div className=" h-4/5 w-1/6  rounded  bg-gray-50 drop-shadow-lg">
                      div
                    </div>
                    <div className=" h-4/5 w-1/6 rounded  bg-gray-50 drop-shadow-lg">
                      div
                    </div>
                 </div>
                 <div className="row-span-5 p-8">
                    <div className="h-full w-full bg-gray-100 drop-shadow-lg">

                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
