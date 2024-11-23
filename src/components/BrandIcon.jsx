import coffie from "../assets/images/icons/1.png";
import high from "../assets/images/icons/2.png";
import cors from "../assets/images/icons/3.png";
import iceCream from "../assets/images/icons/4.png";
const BrandIcon = () => {
  return (
    <div className=" bg-[#ECEAE3]">
      <div className="flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap  justify-evenly items-center py-10 px-16 gap-6">
        <div className="flex flex-col items-start space-y-4">
          <img width={"60"} src={coffie} alt="coffie icon" />
          <div className="space-y-3">
            <h3 className="font-bold text-2xl">Awesome Aroma</h3>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <img width={"60"} src={high} alt="high icon" />
          <div className="space-y-3">
            <h3 className="font-bold text-2xl">High Quality</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam?
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <img width={"60"} src={cors} alt="high icon" />
          <div className="space-y-3">
            <h3 className="font-bold text-2xl">Pure Grades</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, exercitationem.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <img width={"60"} src={iceCream} alt="high icon" />
          <div className="space-y-3">
            <h3 className="font-bold text-2xl">Proper Roasting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIcon;
