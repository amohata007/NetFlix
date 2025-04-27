import { Netflix_logo } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-10">
      <img className="w-40 p-2 my-2 mx-12" src={Netflix_logo} alt="Logo"></img>
    </div>
  );
};

export default Header;
