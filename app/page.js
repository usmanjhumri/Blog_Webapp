import { useState } from "react";

const Home = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const openSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  const closeSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <>
      <h1 className="md:hidden sm:hidden xs:hidden">usman</h1>
      <div class="text-center">
        <button
          // onClick={openSideBar}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          // data-drawer-target="drawer-navigation"
          // data-drawer-show="drawer-navigation"
          // aria-controls="drawer-navigation"
        >
          Show navigation
        </button>
      </div>

      <div
        // data-drawer-target="drawer-navigation"
        // data-drawer-show="drawer-navigation"
        // aria-controls="drawer-navigation"
        className=" fixed top-0 bottom-0 md:hidden  duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow"
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
              Blog
            </h1>

            <button
              onClick={closeSideBar}
              type="button"
              // data-drawer-hide="drawer-navigation"
              // aria-controls="drawer-navigation"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
          </div>
          <hr className="my-2 text-gray-600" />
          <div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md 
  px-4 duration-300 cursor-pointer  bg-gray-700"
            >
              <i className="bi bi-search text-sm" />
              <input
                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                placeholder="Serach"
              />
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-house-door-fill" />
              <span className="text-[15px] ml-4 text-gray-200">Home</span>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-bookmark-fill" />
              <span className="text-[15px] ml-4 text-gray-200">Bookmark</span>
            </div>
            <hr className="my-4 text-gray-600" />
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-envelope-fill" />
              <span className="text-[15px] ml-4 text-gray-200">Messages</span>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill" />
              <div
                className="flex justify-between w-full items-center"
                onclick="dropDown()"
              >
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down" />
                </span>
              </div>
            </div>
            <div
              className=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto"
              id="submenu"
            >
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Social
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Personal
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Friends
              </h1>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-box-arrow-in-right" />
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
