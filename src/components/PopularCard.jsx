import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PopularCard = ({ coffie }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, price, taste, photUrl } = coffie;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
      <div className="flex justify-evenly items-center p-10 rounded-md   bg-[#F5F4F1]">
        <img src={photUrl} className="w-28" alt="coffiemug" />
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-10">
            <h4>
              Name:<span className="text-color">{name}</span>
            </h4>
            <div className="bg-orange-600 cursor-pointer w-10 h-10 flex items-center justify-center">
              <IoEyeOutline className=" text-white " />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h4>
              Taste:<span className="text-color">{taste}</span>
            </h4>
            <Link to={`updateCoffee/${_id}`}>
              <div className="flex items-center cursor-pointer justify-center w-10 h-10 bg-black">
                <MdOutlineEdit className=" text-white" />
              </div>
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <h4>
              Price:<span className="text-color">{price} Taka</span>
            </h4>
            <div
              onClick={() => handleDelete(_id)}
              className="flex items-center cursor-pointer justify-center bg-orange-700 h-10 w-10"
            >
              <AiFillDelete className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCard;
