import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const navigate = useNavigate();

  const {
    _id,
    price,
    name,
    quantity,
    supplier,
    taste,
    category,
    detail,
    chef,
    photUrl,
  } = useLoaderData();

  const handleUpdateCoffie = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const quantity = form.quantity.value.trim();
    const supplier = form.supplier.value.trim();
    const taste = form.taste.value.trim();
    const category = form.category.value.trim();
    const chef = form.chef.value.trim();
    const price = form.price.value.trim();
    const detail = form.details.value.trim();
    const photUrl = form.photourl.value.trim();
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      detail,
      price,
      chef,
      photUrl,
      category,
    };
    console.log(updateCoffee);
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success !",
            text: "Your coffee has been updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/");
        }
      });
  };
  return (
    <div>
      <Link to={"/"}>
        <button className="bg-white text-gray-500 text-lg mt-5 flex items-center justify-center">
          <FaLongArrowAltLeft className="mr-5" />
          Back to Home
        </button>
      </Link>
      <div className="bg-gray-200 py-20">
        <div className=" w-4/5 m-auto p-10 text-center space-y-4">
          <h1 className="text-4xl font-bold text-black">
            Update Existing Coffee Details
          </h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="py-1 ">
          <form onSubmit={handleUpdateCoffie}>
            <div className="mt-8 w-4/5 m-auto">
              <div className="grid grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-gray-700">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full"
                    defaultValue={name}
                    placeholder="Enter coffee name"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Quantity</span>
                  <input
                    type="text"
                    name="quantity"
                    required
                    className="mt-1 block w-full"
                    placeholder="Enter coffee quantity"
                    defaultValue={quantity}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Supplier</span>
                  <input
                    type="text"
                    name="supplier"
                    required
                    className="mt-1 block w-full"
                    placeholder="Enter coffee supplier"
                    defaultValue={supplier}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Taste</span>
                  <input
                    type="text"
                    name="taste"
                    required
                    className="mt-1 block w-full"
                    placeholder="Enter coffee taste"
                    defaultValue={taste}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Category</span>
                  <input
                    type="text"
                    name="category"
                    required
                    className="mt-1 block w-full"
                    placeholder="Enter coffee category"
                    defaultValue={category}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Chef</span>
                  <input
                    type="text"
                    name="chef"
                    required
                    className="mt-1 block w-full"
                    placeholder="Enter coffee details"
                    defaultValue={chef}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Details</span>
                  <input
                    type="text"
                    name="details"
                    required
                    className="mt-1 block w-full"
                    placeholder="Enter coffee details"
                    defaultValue={detail}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Price</span>
                  <input
                    type="number"
                    name="price"
                    required
                    className="mt-1 block w-full"
                    placeholder="Enter coffee details"
                    defaultValue={price}
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-gray-700">Photo</span>
                <input
                  type="text"
                  name="photourl"
                  required
                  className="mt-1 block w-full"
                  placeholder="Enter photo URL"
                  defaultValue={photUrl}
                />
              </label>
              <button className="w-full text-lg bg-[#D2B48C] mt-10 py-3 border-2 border-[#331A15] ">
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
