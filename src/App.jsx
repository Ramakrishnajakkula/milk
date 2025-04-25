import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import Profile from "./components/profile/Profile";
import Navigation from "./components/Navigation";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100">
                    <div className="max-w-7xl mx-auto px-4 py-16">
                      <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                          Fresh Farm Milk Delivered Daily
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                          Order farm-fresh milk and dairy products with our
                          convenient delivery service
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-secondary">
                          Start Subscription
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          Quality Guaranteed
                        </h3>
                        <p className="text-gray-600">
                          Fresh, unadulterated milk from certified farms
                        </p>
                      </div>
                      <div className="text-center p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          Live Tracking
                        </h3>
                        <p className="text-gray-600">
                          Track your milk from farm to doorstep
                        </p>
                      </div>
                      <div className="text-center p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          Flexible Plans
                        </h3>
                        <p className="text-gray-600">
                          Daily, weekly, or monthly subscriptions
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
