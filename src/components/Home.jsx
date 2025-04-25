import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Fresh Farm Milk</span>
              <span className="block text-primary">Delivered Daily</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Get fresh, pure milk delivered straight from our farms to your
              doorstep. Experience the best quality dairy products with our
              subscription service.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10">
                  View Products
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Fresh from Farm
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Direct from our certified farms, ensuring quality and freshness.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Daily Delivery
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Get your milk delivered fresh every morning at your doorstep.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Quality Guaranteed
              </h3>
              <p className="mt-2 text-base text-gray-500">
                100% pure and unadulterated milk with quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
