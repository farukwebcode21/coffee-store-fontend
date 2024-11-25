import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const PopularCard = ({ coffie }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, taste, photUrl } = coffie;
  return (
    <>
      <div className="flex justify-evenly items-center p-10 rounded-md   bg-[#F5F4F1]">
        <img src={photUrl} className="w-28" alt="coffiemug" />
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-10">
            <h4>
              Name:<span className="text-color">{name}</span>
            </h4>
            <div className="bg-orange-600 w-10 h-10 flex items-center justify-center">
              <IoEyeOutline className=" text-white " />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h4>
              Taste:<span className="text-color">{taste}</span>
            </h4>
            <div className="flex items-center justify-center w-10 h-10 bg-black">
              <MdOutlineEdit className=" text-white" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h4>
              Price:<span className="text-color">{price} Taka</span>
            </h4>
            <div className="flex items-center justify-center bg-orange-700 h-10 w-10">
              <AiFillDelete className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCard;
