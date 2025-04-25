import { Link } from "react-router-dom";
import { UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {
  const { user, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              FreshMilk
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Products
            </Link>
            {isAuthenticated && (
              <Link
                to="/orders"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Orders
              </Link>
            )}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/cart"
                  className="text-gray-700 hover:text-primary p-2 rounded-full hover:bg-gray-100">
                  <ShoppingCartIcon className="h-6 w-6" />
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center text-sm font-medium">
                    {user?.name?.[0]?.toUpperCase() || "U"}
                  </div>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
