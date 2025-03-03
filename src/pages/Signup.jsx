import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Account created successfully!");
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fields = [
    { name: "fullName", type: "text", placeholder: "John Doe", label: "Full Name" },
    { name: "email", type: "email", placeholder: "example@email.com", label: "Email" },
    { name: "password", type: "password", placeholder: "Enter your password", label: "Password" },
    { name: "confirmPassword", type: "password", placeholder: "Confirm your password", label: "Confirm Password" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(({ name, type, placeholder, label }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium">{label}</label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="border p-2 rounded w-full mt-1 outline-blue-400"
                required
              />
            </div>
          ))}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
