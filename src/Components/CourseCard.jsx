import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/course/description", { state: { ...data } })}
      className= " bg-blue-500 text-blue-800 w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden text-white "
    >
      <div className="overflow-hidden">
        <img
          className="h-48 w-full rounded-tl-lg rounded-tr-lg  group-hover:scale-[1.2]  transition-all ease-in-out duration-300 "
          src={data?.thumbnail?.secure_url}
          alt="course thumbnail"
        />
      </div>

      {/* course details */}
      <div className="p-3 space-y-1 text-white">
        <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
          {data?.title}
        </h2>
        <p className="line-clamp-2">{data?.description}</p>
        <p className="font-semibold">
          <span className="text-white font-bold">Category : </span>
          {data?.category}
        </p>
        <p className="font-semibold">
          <span className="text-white  font-bold">Total Lectures : </span>
          {data?.numberOfLectures}
        </p>
        <p className="font-semibold">
          <span className="text-white  font-bold">Instructor : </span>
          {data?.createdBy}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
