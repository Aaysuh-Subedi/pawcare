'use client';

import { useState } from 'react';
import { registerSchema } from '../schema';
import Link from 'next/link';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const result = registerSchema.safeParse(formData);

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        const newErrors: Record<string, string> = {};
        Object.entries(fieldErrors).forEach(([key, messages]) => {
          if (messages) newErrors[key] = messages[0];
        });
        setErrors(newErrors);
        setLoading(false);
        return;
      }

      // Handle register logic here
      console.log('Register data:', result.data);
      // TODO: Call your register API
      setLoading(false);
    } catch (error) {
      console.error('Register error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="Firstname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              First Name
            </label>
            <input
              id="Firstname"
              name="Firstname"
              type="text"
              value={formData.Firstname}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.Firstname ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              placeholder="Enter your first name"
            />
            {errors.Firstname && <p className="text-red-500 text-sm mt-1">{errors.Firstname}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="Lastname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Last Name
            </label>
            <input
              id="Lastname"
              name="Lastname"
              type="text"
              value={formData.Lastname}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.Lastname ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              placeholder="Enter your last name"
            />
            {errors.Lastname && <p className="text-red-500 text-sm mt-1">{errors.Lastname}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 rounded-lg transition"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
