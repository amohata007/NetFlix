import { Logout_Logo, Netflix_logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-40 p-2 my-2 mx-12" src={Netflix_logo} alt="Logo"></img>
      <div>
        <button onClick={signOutButton}>
          <img className="w-12 m-4" alt="logout" src={Logout_Logo}></img>
        </button>
      </div>
    </div>
  );
};

export default Header;
