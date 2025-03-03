// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signin = () => {
//   const [formData, setFormData] = useState({ email: "", phone: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset previous errors
//     try {
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);
//       toast.success("You have successfully signed in");
//       setTimeout(() => navigate("/dashboard"), 1500); // Redirect after success
//     } catch (error) {
//       setError(error.message);
//       toast.error("Sign in failed: " + error.message);
//     }
//   };

//   return (
//     <section className="flex flex-col md:flex-row h-screen items-center">
//       {/* Left Side - Image Section */}
//       <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2  h-screen">
//         <img
//           src="https://source.unsplash.com/random"
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right Side - Login Form */}
//       <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
//         <div className="w-full">
//           <ToastContainer />

//           <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
//             Log in to your account
//           </h1>

//           {error && <p className="text-red-500">{error}</p>}

//           <form className="mt-6" onSubmit={handleSubmit}>
//             {/* Email Field */}
//             <div>
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 required
//               />
//             </div>

//             {/* Phone Number Field */}
//             <div className="mt-4">
//               <label className="block text-gray-700">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//               />
//             </div>

//             {/* Password Field */}
//             <div className="mt-4">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 required
//               />
//             </div>

//             <div className="text-right mt-2">
//               <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700">
//                 Forgot Password?
//               </a>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
//             >
//               Log In
//             </button>
//           </form>

//           <hr className="my-6 border-gray-300 w-full" />

//           {/* Register Link */}
//           <p className="mt-8">
//             Need an account?{" "}
//             <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
//               Create an account
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signin;