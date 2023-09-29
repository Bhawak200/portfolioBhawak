import React from "react";

const achievementData = [
  {
    metric: "Awards",
    value: 3,
    content: (
      <ul className="list-decimal">
        <li className="mb-1">
          Awarded with NTSE scholarshipfrom Haryana Government
        </li>
        <li className="mb-1">Awarded with Smt. Bimla Aggrawal Gold Medal </li>
        <li className="mb-1">Awarded with 5 star badge at Hacker rank </li>
      </ul>
    ),
  },
  {
    metric: "Programmatic Problems",
    value: 900,
    content: (
      <ul className="list-decimal">
        <li className="mb-1">Solved 500+ problems in leetcode</li>
        <li className="mb-1">Solved 300+ problems in codeforces </li>
        <li className="mb-1">Solved 100+ problems in Hacker rank </li>
      </ul>
    ),
  },
  {
    metric: "Projects",
    value: 2,
    content: (
      <ul className="list-decimal">
        <li className="mb-1">
          Memory website with help of ReactJS,Express and MongoDb
        </li>
        <li className="mb-1">Portfolio with help of Next JS </li>
      </ul>
    ),
  },
];

const Achievment = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 gap-4">
        {achievementData.map((achievement, index) => {
          return (
            <div
              key={index}
              className="border-[#e7e8ed] border rounded-md h-full w-full p-3"
            >
              <div
                key={index}
                className="flex flex-col items-center justify-center px-3"
              >
                <h1 className="text-white text-4xl font-bold">
                  {achievement.value}
                </h1>
                <h1 className="text-[#eff1f2] text-base">
                  {achievement.metric}
                </h1>
                <h1 className="text-[#eff1f2] text-base px-4">
                  {achievement.content}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievment;
