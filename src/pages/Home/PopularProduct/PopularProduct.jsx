import { useEffect, useState } from "react";
import PopularCard from "../../../components/PopularCard";
import SubTile from "../../../components/SubTile";

const PopularProduct = () => {
  const [coffiee, setCoffiee] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffiee(data));
  }, [coffiee]);
  return (
    <div>
      <SubTile
        subTitle={"Slip & Savor"}
        title={"Popular Product"}
        btnname={" Add Coffee"}
      />
      <div className="bg-popularItem bg-cover grid grid-cols-2 gap-5 container mt-10 p-10">
        {coffiee.map((coffie) => (
          <PopularCard key={coffie._id} coffie={coffie} />
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;

{
  /* <div className="flex justify-evenly items-center p-10 rounded-md   bg-[#F5F4F1]">
            <img src={cup_2} className="w-28" alt="coffiemug" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-10">
                <h4>
                  Name:<span className="text-color">Americano Coffee</span>
                </h4>
                <div className="bg-orange-600 w-10 h-10 flex items-center justify-center">
                  <IoEyeOutline className=" text-white " />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h4>
                  Chef:<span className="text-color">Mr Matin Paul</span>
                </h4>
                <div className="flex items-center justify-center w-10 h-10 bg-black">
                  <MdOutlineEdit className=" text-white" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h4>
                  Price:<span className="text-color">890 Taka</span>
                </h4>
                <div className="flex items-center justify-center bg-orange-700 h-10 w-10">
                  <AiFillDelete className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center p-10 rounded-md   bg-[#F5F4F1]">
            <img src={cup_3} className="w-24" alt="coffiemug" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-10">
                <h4>
                  Name:<span className="text-color">Americano Coffee</span>
                </h4>
                <div className="bg-orange-600 w-10 h-10 flex items-center justify-center">
                  <IoEyeOutline className=" text-white " />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h4>
                  Chef:<span className="text-color">Mr Matin Paul</span>
                </h4>
                <div className="flex items-center justify-center w-10 h-10 bg-black">
                  <MdOutlineEdit className=" text-white" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h4>
                  Price:<span className="text-color">890 Taka</span>
                </h4>
                <div className="flex items-center justify-center bg-orange-700 h-10 w-10">
                  <AiFillDelete className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center p-10 rounded-md   bg-[#F5F4F1]">
            <img src={cup_4} className="w-24" alt="coffiemug" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-10">
                <h4>
                  Name:<span className="text-color">Americano Coffee</span>
                </h4>
                <div className="bg-orange-600 w-10 h-10 flex items-center justify-center">
                  <IoEyeOutline className=" text-white " />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h4>
                  Chef:<span className="text-color">Mr Matin Paul</span>
                </h4>
                <div className="flex items-center justify-center w-10 h-10 bg-black">
                  <MdOutlineEdit className=" text-white" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h4>
                  Price:<span className="text-color">890 Taka</span>
                </h4>
                <div className="flex items-center justify-center bg-orange-700 h-10 w-10">
                  <AiFillDelete className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center p-10 rounded-md  bg-[#F5F4F1]">
            <img src={cup_5} className="w-24" alt="coffiemug" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-10">
                <h4>
                  Name:<span className="text-color">Americano Coffee</span>
                </h4>
                <div className="bg-orange-600 w-10 h-10 flex items-center justify-center">
                  <IoEyeOutline className=" text-white " />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h4>
                  Chef:<span className="text-color">Mr Matin Paul</span>
                </h4>
                <div className="flex items-center justify-center w-10 h-10 bg-black">
                  <MdOutlineEdit className=" text-white" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h4>
                  Price:<span className="text-color">890 Taka</span>
                </h4>
                <div className="flex items-center justify-center bg-orange-700 h-10 w-10">
                  <AiFillDelete className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center p-10 rounded-md   bg-[#F5F4F1]">
            <img src={cup_6} className="w-24 h-32" alt="coffiemug" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-10">
                <h4>
                  Name:<span className="text-color">Americano Coffee</span>
                </h4>
                <div className="bg-orange-600 w-10 h-10 flex items-center justify-center">
                  <IoEyeOutline className=" text-white " />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h4>
                  Chef:<span className="text-color">Mr Matin Paul</span>
                </h4>
                <div className="flex items-center justify-center w-10 h-10 bg-black">
                  <MdOutlineEdit className=" text-white" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h4>
                  Price:<span className="text-color">890 Taka</span>
                </h4>
                <div className="flex items-center justify-center bg-orange-700 h-10 w-10">
                  <AiFillDelete className="text-white" />
                </div>
              </div>
            </div>
          </div> */
}
