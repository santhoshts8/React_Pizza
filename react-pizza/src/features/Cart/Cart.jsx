import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="space-x-3 px-3 py-3">
      <Link className="text-sm text-blue-800 hover:text-blue-500" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="mt-d7 text-xl font-semibold">Your cart, %NAME%</h2>
      <ul className="divide-y divide-stone-400">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button to="/" type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
