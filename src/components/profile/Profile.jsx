import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { Tab } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const { likedItems, cart } = useCart();
  const [orderHistory] = useState([
    {
      id: 1,
      date: "2024-02-20",
      items: [{ name: "Cow Milk", quantity: 2, price: 80 }],
      total: 160,
      status: "Delivered",
    },
    // Add more mock orders as needed
  ]);

  const tabs = [
    { name: "Profile", component: ProfileInfo },
    { name: "Orders", component: OrderHistory },
    { name: "Liked Items", component: LikedItems },
    { name: "Cart", component: CartItems },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <Tab.Group>
            <Tab.List className="flex p-2 space-x-2 border-b">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    `px-4 py-2 rounded-lg ${
                      selected
                        ? "bg-primary text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`
                  }>
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="p-4">
              <Tab.Panel>
                <ProfileInfo user={user} />
              </Tab.Panel>
              <Tab.Panel>
                <OrderHistory orders={orderHistory} />
              </Tab.Panel>
              <Tab.Panel>
                <LikedItems items={likedItems} />
              </Tab.Panel>
              <Tab.Panel>
                <CartItems items={cart} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

function ProfileInfo({ user }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Profile Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Email
          </label>
          <p className="mt-1">{user?.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Name
          </label>
          <p className="mt-1">{user?.name || "Not set"}</p>
        </div>
      </div>
      <div className="pt-4 mt-4 border-t">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
          Sign out
        </button>
      </div>
    </div>
  );
}

function OrderHistory({ orders }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Order History</h3>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Order #{order.id}</span>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="mt-2 pt-2 border-t flex justify-between">
              <span>Total</span>
              <span className="font-medium">₹{order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LikedItems({ items }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Liked Items</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center border rounded-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartItems({ items }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Shopping Cart</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center border rounded-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="pt-4 border-t">
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-medium">₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
