// import React from "react";

import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClicks = () => {
    setCount(count + 1);
  };
  return (
    <>
      <section className="container">
        <h3 className="text-3xl text-orange-500 text-center">Weather App</h3>
        <div className="inner-container">
          <div className="search-box flex align-middle border-2 justify-end ">
            <div className="flex w-full input-box">
              Total count {count}
              <input type="text" required className=" border-2 w-full " maxLength={37} />
              <label htmlFor="search">Enter country</label>
            </div>
            <button type="button" className="bg-black w-[20%]" onClick={handleClicks}>
              <i class="fi fi-rs-global-research text-white cursor-pointer"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
