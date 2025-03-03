import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

const SignIn = () => {
  // Removed <FormData> generic for plain JS. If using TypeScript, define and use a type.
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const password = watch('password');

  const onSubmit = (data) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      alert(`Account created successfully for: ${data.email}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto my-16 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="John"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Doe"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="your@email.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="••••••••"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="••••••••"
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  {...register('agreeTerms', { required: 'You must agree to the terms and conditions' })}
                />
              </div>
              <div className="ml-3 text-sm">
                <span className="text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </div>
            </label>
            {errors.agreeTerms && (
              <p className="mt-1 text-sm text-red-500">{errors.agreeTerms.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : null}
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
