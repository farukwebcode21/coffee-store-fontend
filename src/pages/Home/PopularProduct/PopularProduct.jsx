import cup_1 from "../../../assets/images/1.png";
import cup_2 from "../../../assets/images/2.png";
import cup_3 from "../../../assets/images/3.png";
import cup_4 from "../../../assets/images/4.png";
import cup_5 from "../../../assets/images/5.png";
import cup_6 from "../../../assets/images/6.png";
const PopularProduct = () => {
  return (
    <div className="bg-popularItem bg-cover container mt-10 p-10">
      <div className="px-5 py-10">
        <div className="text-center space-y-3 mb-6">
          <span>--- Slip & Savor ---</span>
          <h2 className="text-2xl font-bold">Popular Product</h2>
          <button className="w-[130px] h-[48px] border-2 border-black bg-yellow-600 font-bold rounded-md text-white">
            Learn More
          </button>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="flex justify-start items-center p-7 bg-[#F5F4F1]">
            <img src={cup_1} alt="coffiemug" />
            <div className="space-y-5">
              <h4>
                Name:<span>Americano Coffee</span>
              </h4>
              <h4>
                Chef:<span>Mr Matin Paul</span>
              </h4>
              <h4>
                Price:<span>890 Taka</span>
              </h4>
            </div>
          </div>
          <div className="flex justify-start items-center p-7 bg-[#F5F4F1]">
            <img src={cup_2} alt="coffiemug" />
            <div className="space-y-5">
              <h4>
                Name:<span>Americano Coffee</span>
              </h4>
              <h4>
                Chef:<span>Mr Matin Paul</span>
              </h4>
              <h4>
                Price:<span>890 Taka</span>
              </h4>
            </div>
          </div>
          <div className="flex items-center justify-start p-7 bg-[#F5F4F1]">
            <img src={cup_3} alt="coffiemug" />
            <div className="space-y-5">
              <h4>
                Name:<span>Americano Coffee</span>
              </h4>
              <h4>
                Chef:<span>Mr Matin Paul</span>
              </h4>
              <h4>
                Price:<span>890 Taka</span>
              </h4>
            </div>
          </div>
          <div className="flex items-center justify-start p-7 bg-[#F5F4F1]">
            <img src={cup_4} alt="coffiemug" />
            <div className="space-y-5">
              <h4>
                Name:<span>Americano Coffee</span>
              </h4>
              <h4>
                Chef:<span>Mr Matin Paul</span>
              </h4>
              <h4>
                Price:<span>890 Taka</span>
              </h4>
            </div>
          </div>
          <div className="flex items-center justify-start p-7 bg-[#F5F4F1]">
            <img src={cup_5} alt="coffiemug" />
            <div className="space-y-5">
              <h4>
                Name:<span>Americano Coffee</span>
              </h4>
              <h4>
                Chef:<span>Mr Matin Paul</span>
              </h4>
              <h4>
                Price:<span>890 Taka</span>
              </h4>
            </div>
          </div>
          <div className="flex items-center justify-start p-7 bg-[#F5F4F1]">
            <img src={cup_6} alt="coffiemug" />
            <div className="space-y-5">
              <h4>
                Name:<span>Americano Coffee</span> Delete
              </h4>
              <h4>
                Chef:<span>Mr Matin Paul</span>Update
              </h4>
              <h4>
                Price:<span>890 Taka</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
