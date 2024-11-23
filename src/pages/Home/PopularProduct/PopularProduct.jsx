import cup_1 from "../../../assets/images/1.png";
import cup_2 from "../../../assets/images/2.png";
import cup_3 from "../../../assets/images/3.png";
import cup_4 from "../../../assets/images/4.png";
import cup_5 from "../../../assets/images/5.png";
import cup_6 from "../../../assets/images/6.png";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  return (
    <div className="bg-popularItem bg-cover container mt-10 p-10">
      <div className="px-5 py-10">
        <div className="text-center space-y-3 mb-6">
          <span>--- Slip & Savor ---</span>
          <h2 className="text-2xl font-bold">Popular Product</h2>
          <div className="flex items-center justify-center">
            <Link to="addcoffee">
              <button className="w-[130px] flex items-center justify-center  h-[48px] border-2 border-black bg-yellow-600 font-bold rounded-md text-white">
                Add Coffee
                <FaCoffee className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="flex justify-evenly items-center p-10 rounded-md   bg-[#F5F4F1]">
            <img src={cup_1} className="w-28" alt="coffiemug" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
