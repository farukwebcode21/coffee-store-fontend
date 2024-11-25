import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SubTile = ({ subTitle, title, btnname }) => {
  return (
    <div className="text-center space-y-3 mb-3 mt-6">
      <span>--- {subTitle}---</span>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex items-center justify-center">
        <Link to={"addcoffee"}>
          <button className="w-[130px] flex items-center justify-center  h-[48px] border-2 border-black bg-yellow-600 font-bold rounded-md text-white">
            {btnname}
            <FaCoffee className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubTile;
