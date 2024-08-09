import Button from "../../UI/Button";
import { formatCurrency } from "../../Util/helper";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p className="mb-3">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between text-sm">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
