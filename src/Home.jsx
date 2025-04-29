import React, { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container ps-5 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center h-screen"></div>
      <div className="text-3xl font-bold text-gray-800">
        {" "}
        <h1>Counter Application</h1>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
           
          </a>
        </div>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increament
        </button>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
        </p>
        <p>
          <button onClick={() => setCount((count) => count - 1)}>
            Decreament
          </button>
        </p>
      </div>
    </div>
  );
};
