import LogoutButton from "./Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold">Welcome, {user?.email}!</h2>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Dashboard;
