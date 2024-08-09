import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../Services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const MenuData = useLoaderData();
  console.log(MenuData);
  return (
    <ul className="divide-y-2 px-2">
      {MenuData.map((Menu) => {
        return <MenuItem Menu={Menu} id={Menu.id} />;
      })}
    </ul>
  );
}

export async function loader() {
  const data = await getMenu();
  return data;
}
loader();
export default Menu;
