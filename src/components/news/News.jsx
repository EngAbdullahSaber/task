import React from "react";
import img from "../../images/news/4.png";
import img1 from "../../images/news/1.png";
import img2 from "../../images/news/2.png";
import img3 from "../../images/news/3.png";

const News = () => {
  const newsData = [
    {
      title: "عنوان الخبر",
      desc: " تقرير التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة جدة حيث تقرير  التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة #جدة حيث تمكنت #جمعية نماء ",
      button: "المزيد...",
    },
    {
      title: "عنوان الخبر",
      desc: " تقرير التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة جدة حيث تقرير  التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة #جدة حيث تمكنت #جمعية نماء ",
      button: "المزيد...",
    },
    {
      title: "عنوان الخبر",
      desc: " تقرير التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة جدة حيث تقرير  التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة #جدة حيث تمكنت #جمعية نماء ",
      button: "المزيد...",
    },
  ];
  const newsData2 = [
    {
      title: "عنوان الخبر",
      desc: " تقرير التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة جدة حيث تقرير  التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة #جدة حيث تمكنت #جمعية نماء ",
      button: "المزيد...",
      img: img2,
    },

    {
      title: "عنوان الخبر",
      desc: " تقرير التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة جدة حيث تقرير  التوزيع ليوم الثلاثاء 7 ابريل لعدد من احياء محافظة #جدة حيث تمكنت #جمعية نماء ",
      button: "المزيد...",
      img: img3,
    },
  ];
  return (
    <div className="py-6 bg-blue-400">
      <h2 className="flex justify-center text-white py-6 font-extrabold text-2xl">
        المركز الاعلامى
        <img src={img} className="px-2 " />
      </h2>
      <div className="md:w-[80%] xs:w-[90%] flex md:flex-row xs:flex-col  mx-auto bg-white rounded-2xl p-2">
        <div className=" px-4 w-full ">
          {newsData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col  pt-10 w-full border-b-2 border-yellow-600"
              >
                <h2 className="text-right text-xl text-blue-400 font-semibold py-2">
                  {item.title}
                </h2>
                <p className="text-sm text-right font-medium text-gray-600">
                  {item.desc}
                </p>
                <button className="text-blue-400 font-medium text-left px-3">
                  {item.button}
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <img src={img1} className="w-full h-full" />
        </div>
      </div>
      <div className="flex  md:flex-row xs:flex-col justify-between md:w-[80%] xs:w-[90%] mx-auto my-4">
        {newsData2.map((item, index) => {
          return (
            <div className="flex  w-full bg-white rounded-2xl m-3 " key={index}>
              <div className="flex flex-col">
                <h2 className="text-right text-lg text-blue-400 font-semibold p-2">
                  {item.title}
                </h2>
                <p className="text-xs text-right font-medium text-gray-600">
                  {item.desc}
                </p>
                <button className="text-blue-400 text-xs font-medium text-left p-3">
                  {item.button}
                </button>
              </div>
              <div className="w-full">
                <img src={item.img} className="w-full h-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
