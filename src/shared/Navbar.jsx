import header_bg from "../assets/images/header_bg.png";
import logo from "../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <div
      className="h-[100px] relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${header_bg})`,
      }}
    >
      <img className="w-16 h-20" src={logo} alt="logo" />
      <h2 className="text-3xl text-white">Espresso Emporium</h2>
    </div>
  );
};

export default Navbar;
