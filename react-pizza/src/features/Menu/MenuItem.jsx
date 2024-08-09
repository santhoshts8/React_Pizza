import Button from "../../UI/Button";
import { formatCurrency } from "../../Util/helper";

function MenuItem({ Menu }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = Menu;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-slate-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="tex-sm uppercase text-stone-400">Sold out</p>
          )}
          <Button type="small">Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
