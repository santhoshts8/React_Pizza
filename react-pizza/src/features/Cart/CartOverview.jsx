import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex h-10 items-center justify-between bg-stone-600 text-[15px] font-bold text-stone-300">
      <p className="space-x-2">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
