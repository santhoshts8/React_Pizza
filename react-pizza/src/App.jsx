import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./features/Menu/Menu";
import Cart from "./features/Cart/Cart";
import CreateOrder, {
  action as OrderAction,
} from "./features/Order/CreateOrder";
import Order from "./features/Order/Order";
import AppLayout from "./UI/AppLayout";
import { loader as MenuLoader } from "./features/Menu/Menu";
import NotFound from "./UI/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/menu", element: <Menu />, loader: MenuLoader },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: OrderAction,
      },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
