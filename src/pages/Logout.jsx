import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; // ✅ Correct import
import { auth } from "./firebase";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // ✅ Correct function name
      navigate("/signin"); // ✅ Redirect to sign-in page after logout
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <button
      onClick={handleLogout} // ✅ Added click handler
      className="bg-red-500 text-white px-4 py-2 rounded mt-2"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
