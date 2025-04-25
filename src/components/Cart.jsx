import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="bg-white shadow-sm rounded-lg">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center p-4 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="ml-4">
                  <p className="font-medium">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="p-4 border-t">
              <div className="flex justify-between">
                <span className="font-medium">Total:</span>
                <span className="font-bold">₹{total}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
