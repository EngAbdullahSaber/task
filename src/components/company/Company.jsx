import React from "react";
import img from "../../images/news/4.png";

const Company = ({ data, title }) => {
  return (
    <div className="container mx-auto py-4">
      <h2 className="flex justify-center text-gray-600 font-extrabold text-2xl">
        {title}
        <img src={img} className="px-2 " />
      </h2>
      <div className="flex justify-around items-center">
        {data.map((item) => {
          return (
            <div key={item.index}>
              <img src={item.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Company;
